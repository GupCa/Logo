using Logo.Contracts;
using Logo.Contracts.Services;
using Logo.Implementation;
using Logo.Web.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.IO.Compression;
using System.Linq;
using System.Threading.Tasks;

namespace Logo.Web.Controllers
{
    [Authorize("Bearer")]
    [Route("api/[controller]")]
    [ServiceFilter(typeof(ApiExceptionFilter))]
    public class FilesController : Controller
    {
        IFilesService _filesService;
        IFoldersService _foldersService;
        IHttpContextAccessor _httpContextAccessor;
        public FilesController(IFilesService filesService, IFoldersService foldersService, IHttpContextAccessor httpContextAccessor)
        {
            _filesService = filesService;
            _foldersService = foldersService;
            _httpContextAccessor = httpContextAccessor;
        }

        [HttpPost]
        [Route("upload-request")]
        public async Task<IActionResult> Upload(LoadedFileUI file)
        {
            DateTime date = _foldersService.ParseDate(file.CreationDate);
            Guid fileId = default(Guid);
           try
            {
                if (file == null) throw new Exception("Не выбран файл");
                if (file.FileContent.Length == 0) throw new Exception("Файл пустой");

                Guid ownerId = new Guid(HttpContext.User.Claims.ToList()
                                    .Where(item => item.Type == "UserId")
                                    .Select(item => item.Value)
                                    .FirstOrDefault());

                fileId = _foldersService.CreateFile(new ObjectCredentialsWithOwner
                {
                    OwnerId = ownerId,
                    ObjectCredentials = new ObjectCredentials
                    {
                        Name = file.FileContent.FileName,
                        ParentObjectId = file.ParentFolderId,
                        CreationDate = date,
                        Size = file.FileContent.Length,
                        Tags = file.Tags ?? ""
                    }
                });
                
                using (Stream stream = new MemoryStream())
                {
                    await file.FileContent.OpenReadStream().CopyToAsync(stream);

                    stream.Position = 0;
                    await _filesService.SimpleUploadStreamAsync(new LoadedFileBack()
                    {
                        Stream = stream,
                        FileNameInBlob = fileId
                    });

                    stream.Position = 0;
                    if (_foldersService.GetFileExstention(file.FileContent.FileName).Equals("jpg", StringComparison.InvariantCultureIgnoreCase) ||
                        _foldersService.GetFileExstention(file.FileContent.FileName).Equals("png", StringComparison.InvariantCultureIgnoreCase))
                    {
                        byte[] resizedImage = _filesService.ResizeImage(stream);
                        _foldersService.SetThumbnail(fileId, resizedImage);
                    }
                }
            }
            catch (Exception ex)
            {
                _foldersService.DeleteFile(fileId);
                return Json(new { success = false, message = ex.Message, fileName = file.FileContent.FileName });
            }
            

            return Json(new { success = true, fileName = file.FileContent.FileName });
        }

        [HttpGet]
        [Route("download-file/{fileId?}")]
        public IActionResult DownloadedFile(Guid fileId)
        {
            byte[] arr = null;
            Contracts.FileInfo fileInfo = null;

            try
            {
                Guid ownerId = new Guid(HttpContext.User.Claims.ToList()
                                      .Where(item => item.Type == "UserId")
                                      .Select(item => item.Value)
                                      .FirstOrDefault());

                fileInfo = _foldersService.GetFile(fileId);

                arr = _filesService.SimpleDownloadAsync(fileId.ToString()).GetAwaiter().GetResult();

                string fileExtention = _foldersService.GetFileExstention(fileInfo.Name);
                int fileType = _foldersService.GetFileType(fileExtention);
                string nameFileContent = (fileType == 0 || fileType == 1) ? "image" : "video";
                Request.HttpContext.Response.Headers.Add("Content-Extention", String.Format("{0}/{1}", nameFileContent, fileExtention));
            }
            catch (Exception ex)
            {
                return Json(new { success = false, message = ex.Message });
            }

            string contentType = String.Format("application/{0}", _foldersService.GetFileExstention(fileInfo.Name));
            HttpContext.Response.ContentType = contentType;
            FileContentResult result = new FileContentResult(arr, contentType);

            return result;
        }

        [HttpGet]
        [Route("archive-request/{Id?}")]
        public async Task<IActionResult> ArchiveFiles(string Id)
        {
            List<Contracts.FileInfo> files = null;

            if (Id == default(Guid).ToString())
            {
                Guid ownerId = new Guid(HttpContext.User.Claims.ToList()
                        .Where(item => item.Type == "UserId")
                        .Select(item => item.Value)
                        .FirstOrDefault());

                files = _foldersService.GetRootFiles(ownerId).ToList();
            }
            else
            {
                files = _foldersService.GetFilesInFolder(new Guid(Id)).ToList();
            }

            IEnumerable<byte[]> origFiles = await _filesService.DownloadFiles(files);

            using (var compressedFileStream = new MemoryStream()) //Create an archive and store the stream in memory.
            using (var zipArchive = new ZipArchive(compressedFileStream, ZipArchiveMode.Create, false))
            {
                int i = 0;

                foreach (var origFile in origFiles)
                {
                    var zipEntry = zipArchive.CreateEntry(files[i].Name);

                    using (var originalFileStream = new MemoryStream(origFile))
                    using (var zipEntryStream = zipEntry.Open())
                    {
                        await originalFileStream.CopyToAsync(zipEntryStream);
                    }
                    i++;
                }

                byte[] archivedFile = compressedFileStream.ToArray();
                Request.HttpContext.Response.Headers.Add("Content-Extention", String.Format("{0}/{1}", "archive", "zip"));
                string contentType = "application/zip";
                HttpContext.Response.ContentType = contentType;

                return new FileContentResult(archivedFile, "application/zip");
            }
        }
    }
}
