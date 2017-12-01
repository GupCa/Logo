using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Logo.Contracts.Services;
using Logo.Implementation;
using Logo.Contracts;
using Microsoft.AspNetCore.Authorization;
using Logo.Web.Models;

namespace Logo.Web.Controllers
{
    [Route("api/[controller]")]
    [Authorize(Policy = "Bearer")]
    [ServiceFilter(typeof(ApiExceptionFilter))]

    public class FoldersController : Controller
    {
        private readonly IFoldersService _foldersService;
        private readonly ITagsService _tagsService;
        private readonly IFilesService _filesService;

        public FoldersController(IFoldersService foldersService, ITagsService tagsService, IFilesService filesService)
        {
            _foldersService = foldersService;
            _tagsService = tagsService;
            _filesService = filesService;
        }

        [HttpGet]
        [Route("get-folder/{id?}")]
        public FolderInfo GetFolder(Guid id)
        {
            return _foldersService.GetFolder(id);
        }

        [HttpGet]
        [Route("get-file/{id?}")]
        public FileInfo GetFile(Guid id)
        {
            return _foldersService.GetFile(id);
        }

        [HttpGet]
        [Route("get-folders/{id?}")]
        public IEnumerable<FolderInfo> GetFoldersContent(Guid id)
        {
            try
            {
                if (id == default(Guid))
                {
                    Guid ownerId = new Guid(HttpContext.User.Claims.ToList()
                                          .Where(item => item.Type == "UserId")
                                          .Select(item => item.Value)
                                          .FirstOrDefault());

                    return _foldersService.GetRootFolders(ownerId);

                }
            }

            catch(Exception)
            {
                return null;
            }

            return _foldersService.GetFoldersInFolder(id);
        }

        [HttpGet]
        [Route("get-files/{id?}")]
        public IEnumerable<FileInfo> GetFilesContent(Guid id)
        {
            try
            {
                if (id == default(Guid))
                {
                    Guid ownerId = new Guid(HttpContext.User.Claims.ToList()
                                          .Where(item => item.Type == "UserId")
                                          .Select(item => item.Value)
                                          .FirstOrDefault());

                    return _foldersService.GetRootFiles(ownerId);
                }
            }
            catch (Exception)
            {
                return null;
            }
            return _foldersService.GetFilesInFolder(id);
        }

        [HttpPost]
        [Route("add-folder")]
        public IActionResult CreateFolder([FromBody]  ObjectCredentials folderCredentials)
        {
            try
            {
                Guid ownerId = new Guid(HttpContext.User.Claims.ToList()
                                   .Where(item => item.Type == "UserId")
                                   .Select(item => item.Value)
                                   .FirstOrDefault());

                _foldersService.CreateFolder(new ObjectCredentialsWithOwner
                {
                    ObjectCredentials = folderCredentials,
                    OwnerId = ownerId
                });
            }

            catch (Exception ex)
            {
                return Json(new { success = false, message = ex.Message });    
            }
            return Ok();
        }

        [HttpPost]
        [Route("add-file")]
        public IActionResult CreateFile([FromBody]  ObjectCredentials fileCredentials)
        {
            try
            {
                Guid ownerId = new Guid(HttpContext.User.Claims.ToList()
                                   .Where(item => item.Type == "UserId")
                                   .Select(item => item.Value)
                                   .FirstOrDefault());

                _foldersService.CreateFile(new ObjectCredentialsWithOwner
                {
                    ObjectCredentials = fileCredentials,
                    OwnerId = ownerId                 
                });
            }
            catch (Exception ex)
            {
                return Json(new { success = false, message = ex.Message });
            }
            return Ok();
        }

        [HttpPost]
        [Route("rename-folder")]
        public IActionResult RenameFolder([FromBody] UpdatedObject updatedFolder)
        {
            try
            {
                _foldersService.RenameFolder(updatedFolder);
            }

            catch (Exception ex)
            {
                return Json(new { success = false, message = ex.Message });    
            }
            return Ok();
        }

        [HttpPost]
        [Route("rename-file")]
        public IActionResult RenameFile([FromBody] UpdatedObject updatedFolder)
        {
            try
            {
                _foldersService.RenameFile(updatedFolder);
            }
            catch (Exception ex)
            {
                return Json(new { success = false, message = ex.Message });    
            }
            return Ok();
        }

        [HttpGet]
        [Route("delete-folder/{id?}")]
        public IActionResult DeleteFolder(Guid id)
        {
            try
            {
                _foldersService.DeleteFolder(id);
            }
            catch (Exception ex)
            {
                return Json(new { success = false, message = ex.Message });    
            }           
            return Ok();
        }

        [HttpGet]
        [Route("delete-file/{id?}")]
        public async  Task <IActionResult> DeleteFile(Guid id)
        {
            try
            {
                _foldersService.DeleteFile(id);
                 await _filesService.DeleteFileFromBlob(id.ToString());                
            }

            catch (Exception ex)
            {
                return Json(new { success = false, message = ex.Message });    
            }
            return Ok();
        }

        [HttpGet]
        [Route("get-root-folders")]
        public IEnumerable<FolderInfo> GetRootFolders()
        {
            Guid ownerId = new Guid(HttpContext.User.Claims.ToList()
                                  .Where(item => item.Type == "UserId")
                                  .Select(item => item.Value)
                                  .FirstOrDefault());

            return _foldersService.GetRootFolders(ownerId);
        }

        [HttpGet]
        [Route("get-root-files")]
        public IEnumerable<FileInfo> GetRootFiles()
        {
            Guid ownerId = new Guid(HttpContext.User.Claims.ToList()
                                  .Where(item => item.Type == "UserId")
                                  .Select(item => item.Value)
                                  .FirstOrDefault());
           
           return _foldersService.GetRootFiles(ownerId);         
        }

        [HttpPost]
        [Route("add-folder-tag")]
        public IActionResult CreateFolderTag([FromBody] TagsCredentials tagsCredentials)
        {
            try
            {
                _tagsService.CreateTagToFolder(tagsCredentials);
            }
            catch (Exception ex)
            {
                return Json(new { success = false, message = ex.Message });
            }

            return Ok();
        }

        [HttpPost]
        [Route("add-file-tag")]
        public IActionResult CreateFileTag([FromBody] TagsCredentials tagsCredentials)
        {
            try
            {
                _tagsService.CreateTagToFile(tagsCredentials);
            }
            catch (Exception ex)
            {
                return Json(new { success = false, message = ex.Message });
            }
            return Ok();
        }


        [HttpGet]
        [Route("get-file-tag/{id?}")]
        public IEnumerable <string> GetFileTag(Guid  id)
        {
            try
            {
                return _tagsService.GetFileTags(id);
            }
            catch (Exception ex)
            {
                return null;
            }
        }

        [HttpGet]
        [Route("get-folder-tag/{id?}")]
        public IEnumerable<string> GetFolderTag(Guid id)
        {
            try
            {
                return _tagsService.GetFolderTags(id);
            }
            catch (Exception )
            {
                return null;
            }
        }

        [HttpGet]
        [Route("get-path-to-root/{folderId?}")]
        public IEnumerable<FolderInfo> GetPathToRoot(Guid folderId)
        {
            try
            {
                return _foldersService.GetPathToRoot(folderId);
            }
            catch (Exception)
            {
                return null;
            }
        }

        [HttpPost]
        [Route("search-name")]
        public IEnumerable<FileInfo> SearchFilesOnName([FromBody] ObjectSearch objectSearch)
        {
            Guid ownerId = new Guid(HttpContext.User.Claims.ToList()
                                  .Where(item => item.Type == "UserId")
                                  .Select(item => item.Value)
                                  .FirstOrDefault());
            try
            {
                return _foldersService.SearchFilesOnName(objectSearch.Name, ownerId);
            }
            catch (Exception )
            {
                return null;
            }
        }

        [HttpPost]
        [Route("search-tag")]
        public IEnumerable<FileInfo> SearchFilesOnTag([FromBody] ObjectSearch objectSearch)
        {
            Guid ownerId = new Guid(HttpContext.User.Claims.ToList()
                                  .Where(item => item.Type == "UserId")
                                  .Select(item => item.Value)
                                  .FirstOrDefault());
            try
            {
                return _foldersService.SearchFilesOnTag(objectSearch.Name, ownerId);
            }

            catch (Exception )
            {
                return null;
            }
        }
    }
}
