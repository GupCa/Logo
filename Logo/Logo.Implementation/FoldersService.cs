using System;
using System.Linq;
using Logo.Contracts;
using Logo.Contracts.Services;
using Logo.Implementation.DatabaseModels;
using System.Collections.Generic;
using System.IO;
using System.Globalization;

namespace Logo.Implementation
{
    public enum FileExtentions
    {
        jpg,
        png,
        mov,
        avi,
        mkv
    }


    public class FoldersService : IFoldersService
    {
        private readonly LogodbContext _dbContext;
        private readonly ITagsService _tagsService;
        private readonly IFilesService _filesService;


        private readonly int maxRootLevel = 9;   //[0..9]
        private readonly int maxNameLong = 50;   //[0..9]


        public FoldersService(LogodbContext dbContext, ITagsService tagsService, IFilesService filesService)
        {
            _dbContext = dbContext;
            _tagsService = tagsService;
            _filesService = filesService;
        }

        public FolderInfo GetFolder(Guid folderId)
        {
            var folder = _dbContext.Folders.FirstOrDefault(x => x.FolderId.Equals(folderId));

            if (folder == null)
            {
                throw new InvalidOperationException("Папка не найдена");
            }

            FolderInfo folderInfo =
                 new FolderInfo
                 {
                     FolderId = folder.FolderId,
                     OwnerId = folder.OwnerId,
                     ParentFolderId = folder.ParentFolderId,
                     Name = folder.Name,
                     CreationDate = folder.CreationDate,
                     UploadDate = folder.UploadDate,
                     Level = folder.Level,
                     HasPublicAccess = folder.HasPublicAccess,
                 };

            folderInfo.TagList = _tagsService.GetFolderTags(folderId);

            return folderInfo;
        }

        public Contracts.FileInfo GetFile(Guid fileId)
        {
            var file = _dbContext.Files.FirstOrDefault(x => x.FileId.Equals(fileId));

            if (file == null)
            {
                throw new InvalidOperationException("Файл не найден");
            }

            Contracts.FileInfo fileInfo = new Contracts.FileInfo
            {
                FileId = file.FileId,
                ParentFolderId = file.ParentFolderId,
                OwnerId = file.OwnerId,
                Name = file.Name,
                CreationDate = file.CreationDate,
                UploadDate = file.UploadDate,
                Size = file.Size,
                Type = file.Type,
                HasPublicAccess = file.HasPublicAccess
            };

            fileInfo.TagList = _tagsService.GetFileTags(fileInfo.FileId);

            return fileInfo;
        }

        public void CreateFolder(ObjectCredentialsWithOwner folderCredentialsWithOwner)
        {
            if (folderCredentialsWithOwner.ObjectCredentials.Name.Length > maxNameLong)
                throw new InvalidOperationException(String.Format("Длина имени превышает {0}", maxNameLong));

            if (IsParentContainseFolder(folderCredentialsWithOwner) || IsParentContainseFile(folderCredentialsWithOwner))
                throw new InvalidOperationException("Файл или папка с этим именем уже существуют");

            FolderInfo rootFolder = null;
            if (folderCredentialsWithOwner.ObjectCredentials.ParentObjectId != null)
            {
                rootFolder = GetFolder((Guid)folderCredentialsWithOwner.ObjectCredentials.ParentObjectId);   //   get   parant  of  curent folder

                if (rootFolder.Level == maxRootLevel)
                    throw new InvalidOperationException(String.Format("Уровень вложености папки максимальный не можут превышать {0} уровней", maxRootLevel));
            }

            _dbContext.Add
                (new Folder
                {
                    FolderId = Guid.NewGuid(),
                    OwnerId = folderCredentialsWithOwner.OwnerId,
                    ParentFolderId = folderCredentialsWithOwner.ObjectCredentials.ParentObjectId,
                    Name = folderCredentialsWithOwner.ObjectCredentials.Name,
                    CreationDate = DateTime.Now,
                    UploadDate = null,
                    Level = folderCredentialsWithOwner.ObjectCredentials.ParentObjectId == null ? 0 : rootFolder.Level + 1,
                    HasPublicAccess = false
                });

            _dbContext.SaveChanges();
        }

        public  string GetFileExstention(string fileName)
        {
            return fileName.Substring(fileName.LastIndexOf('.') + 1);
        }

        public  int GetFileType(string fileExtention)
        {
            int type = -1;

            if (fileExtention.Equals(FileExtentions.jpg.ToString(), StringComparison.InvariantCultureIgnoreCase))
                type = 0;
            else  if (fileExtention.Equals(FileExtentions.png.ToString(), StringComparison.InvariantCultureIgnoreCase))
                type = 1;
            else if (fileExtention.Equals(FileExtentions.mov.ToString(), StringComparison.InvariantCultureIgnoreCase))
                type = 2;
            else if (fileExtention.Equals(FileExtentions.avi.ToString(), StringComparison.InvariantCultureIgnoreCase))
                type = 3;
            else if (fileExtention.Equals(FileExtentions.mkv.ToString(), StringComparison.InvariantCultureIgnoreCase))
                type = 4;

            return type;
        }

        public  string  GetFileTypeString(int  type)
        {
            if (type == 0) return "jpg";
            else if (type == 1) return "png";
            else if (type == 2) return "mov";
            else if (type == 3) return "avi";
            else if (type == 4) return "mkv";
            return "";
        }

        public Guid CreateFile(ObjectCredentialsWithOwner fileCredentialsWithOwner)
        {
            string fileName = fileCredentialsWithOwner.ObjectCredentials.Name;
            string fileExtention = GetFileExstention(fileName);
            int fileType = GetFileType(fileExtention);

            if (fileType == -1)
            {
                throw new InvalidOperationException("Расширение файла недопустимо");
            }

            if (IsParentContainseFolder(fileCredentialsWithOwner) || IsParentContainseFile(fileCredentialsWithOwner))
            {
                throw new InvalidOperationException("Файл или папка с этим именем уже существуют");
            }
            
            Guid fileId = Guid.NewGuid();   //this value   is  name of file in   blockblob
            _dbContext.Files.Add
                (new DatabaseModels.File
                {
                    FileId = fileId,
                    OwnerId = fileCredentialsWithOwner.OwnerId,
                    ParentFolderId = fileCredentialsWithOwner.ObjectCredentials.ParentObjectId,
                    Name = fileCredentialsWithOwner.ObjectCredentials.Name,
                    CreationDate = fileCredentialsWithOwner.ObjectCredentials.CreationDate,
                    UploadDate = DateTime.Now,
                    Size = (int)fileCredentialsWithOwner.ObjectCredentials.Size,
                    Type = fileType,
                    HasPublicAccess = false,

                    ImageStorage = null
                });

            _dbContext.SaveChanges();
            _tagsService.CreateTagToFile(new TagsCredentials
            {
                ObjectId = fileId,
                Text = fileCredentialsWithOwner.ObjectCredentials.Tags
            });

            return fileId;                     
        }

        public void RenameFolder(UpdatedObject updatedFolder)
        {
            if (updatedFolder.updatedName.Length > maxNameLong)
                throw new InvalidOperationException(String.Format("Длина имени превышает {0}", maxNameLong));

            FolderInfo folder = GetFolder(updatedFolder.ObjectId);

            ObjectCredentialsWithOwner folderCredentialsWithOwner = new ObjectCredentialsWithOwner
            {
                ObjectCredentials = new ObjectCredentials
                {
                    ParentObjectId = folder.ParentFolderId,
                    Name = updatedFolder.updatedName,
                },

                OwnerId = folder.OwnerId
            };

            if (IsParentContainseFolder(folderCredentialsWithOwner) || IsParentContainseFile(folderCredentialsWithOwner))
            {
                throw new InvalidOperationException("Файл или папка с этим именем уже существуют");
            }

            _dbContext
                .Folders
                .Where(f => f.FolderId == updatedFolder.ObjectId)
                .FirstOrDefault()
                .Name = updatedFolder.updatedName;
            _dbContext.SaveChanges();
        }

        public void RenameFile(UpdatedObject updatedFile)
        {  
            Contracts.FileInfo file = GetFile(updatedFile.ObjectId);
            string extention = GetFileTypeString(file.Type);

            ObjectCredentialsWithOwner fileCredentialsWithOwner = new ObjectCredentialsWithOwner
            {
                ObjectCredentials = new ObjectCredentials
                {
                    ParentObjectId = file.ParentFolderId,
                    Name = updatedFile.updatedName + "." + extention
                },
                OwnerId = file.OwnerId
            };

            if (IsParentContainseFolder(fileCredentialsWithOwner) || IsParentContainseFile(fileCredentialsWithOwner))
            {
                throw new InvalidOperationException("Файл или папка с этим именем уже существуют");
            }

            _dbContext.Files
                .Where(f => f.FileId == updatedFile.ObjectId)
                .FirstOrDefault().Name = fileCredentialsWithOwner.ObjectCredentials.Name;

            _dbContext.SaveChanges();
        }

        public void DeleteFolder(Guid folderId)  //  need    recursive  deleting   
        {
            var folder = GetFolder(folderId);

            List<FolderInfo> folders = GetFoldersInFolder(folderId).ToList();
            List<Contracts.FileInfo> files = GetFilesInFolder(folderId).ToList();

            foreach (var fileInfo in files)       // delete all  files in  current  dirictory
            {
                DeleteFile(fileInfo.FileId);
                _dbContext.SaveChanges();
            }

            foreach (var folderinfo in folders)   //deep   recursive to   sub -  directives   and   delete   them
            {
                _tagsService.DeleteTagsFromFolder(folderinfo.FolderId);
                _dbContext.SaveChanges();
                DeleteFolder(folderinfo.FolderId);
                _dbContext.SaveChanges();
            }

            _tagsService.DeleteTagsFromFolder(folderId);
            _dbContext.SaveChanges();

            var folderRoot = _dbContext.Folders.FirstOrDefault(x => x.FolderId == folderId);         // delete  root  directory   
            _dbContext.Folders.Remove(folderRoot);
            _dbContext.SaveChanges();
        }



        public void DeleteFile(Guid fileId)
        {
            _tagsService.DeleteTagsFromFile(fileId);
            _dbContext.SaveChanges();

            var file = _dbContext.Files.FirstOrDefault(x => x.FileId == fileId);
            _dbContext.Files.Remove(file);

            _dbContext.SaveChanges();
        }

        public bool IsParentContainseFolder(ObjectCredentialsWithOwner folderCredentialsWithOwner)
        {
            return _dbContext.Folders
                   .Where(x => x.ParentFolderId.Equals(folderCredentialsWithOwner.ObjectCredentials.ParentObjectId)
                   && x.OwnerId.Equals(folderCredentialsWithOwner.OwnerId))
                   .Any(x => x.Name.Equals(folderCredentialsWithOwner.ObjectCredentials.Name));
        }

        public bool IsParentContainseFile(ObjectCredentialsWithOwner objectCredentialsWithOwner)
        {
            return _dbContext.Files
                   .Where(x => x.ParentFolderId.Equals(objectCredentialsWithOwner.ObjectCredentials.ParentObjectId)
                   && x.OwnerId.Equals(objectCredentialsWithOwner.OwnerId))
                   .Any(x => x.Name.Equals(objectCredentialsWithOwner.ObjectCredentials.Name));
        }

        public IEnumerable<FolderInfo> GetAllFolders()   //only  for  testing
        {
            return _dbContext.Set<Folder>().Select(
               y => new FolderInfo()
               {
                   FolderId = y.FolderId,
                   ParentFolderId = y.ParentFolderId,
                   OwnerId = y.OwnerId,
                   Name = y.Name,
                   CreationDate = y.CreationDate,
                   UploadDate = y.UploadDate,
                   Level = y.Level,
                   HasPublicAccess = y.HasPublicAccess,

                   //TagList = _tagsService.GetFolderTags(y.FolderId)

               });
        }

        public IEnumerable<Contracts.FileInfo> GetAllFiles()   //only  for  testing
        {

            return _dbContext.Set<DatabaseModels.File>().Select(
               y => new Contracts.FileInfo()
               {
                   FileId = y.FileId,
                   ParentFolderId = y.ParentFolderId,
                   OwnerId = y.OwnerId,
                   Name = y.Name,
                   CreationDate = y.CreationDate,
                   UploadDate = y.UploadDate,
                   Size = y.Size,
                   Type = y.Type,
                   HasPublicAccess = y.HasPublicAccess,
                   // TagList = _tagsService.GetFolderTags(y.FileId)
               });
        }



        public IEnumerable<FolderInfo> GetFoldersInFolder(Guid folderId)
        {
            IEnumerable<FolderInfo> folders =
                _dbContext.Folders.Where(x => x.ParentFolderId.Equals(folderId))
                .Select(y => new FolderInfo()
                {
                    FolderId = y.FolderId,
                    ParentFolderId = y.ParentFolderId,
                    OwnerId = y.OwnerId,
                    Name = y.Name,
                    CreationDate = y.CreationDate,
                    UploadDate = y.UploadDate,
                    Level = y.Level,
                    HasPublicAccess = y.HasPublicAccess
                }).ToList();

            foreach (var folder in folders)
            {
                folder.TagList = _tagsService.GetFolderTags(folder.FolderId);
            }


            return folders;
        }

        public IEnumerable<Contracts.FileInfo> GetFilesInFolder(Guid folderId)
        {

            IEnumerable<Contracts.FileInfo> files =

                 _dbContext.Files.Where(x => x.ParentFolderId.Equals(folderId))
                    .Select(y => new Contracts.FileInfo()
                    {
                        FileId = y.FileId,
                        ParentFolderId = y.ParentFolderId,
                        OwnerId = y.OwnerId,
                        Name = y.Name,
                        CreationDate = y.CreationDate,
                        UploadDate = y.UploadDate,
                        Size = y.Size,
                        Type = y.Type,
                        HasPublicAccess = y.HasPublicAccess,

                        ResizedImage = y.ImageStorage == null ? "not  correct  image" : Convert.ToBase64String(y.ImageStorage)

                    }).ToList();


            foreach (var file in files)
            {
                file.TagList = _tagsService.GetFileTags(file.FileId);
            }





            return files;
        }


        public IEnumerable<FolderInfo> GetRootFolders(Guid ownerId)
        {

            IEnumerable<FolderInfo> folders =

            _dbContext.Folders.Where(x => x.ParentFolderId == null && x.OwnerId == ownerId)
                .Select(y => new FolderInfo()
                {
                    FolderId = y.FolderId,
                    ParentFolderId = y.ParentFolderId,
                    OwnerId = y.OwnerId,
                    Name = y.Name,
                    CreationDate = y.CreationDate,
                    UploadDate = y.UploadDate,
                    Level = y.Level,
                    HasPublicAccess = y.HasPublicAccess,
                }).ToList();

            foreach (var folder in folders)
            {
                folder.TagList = _tagsService.GetFolderTags(folder.FolderId);
            }

            return folders;
        }

        public IEnumerable<Contracts.FileInfo> GetRootFiles(Guid ownerId)
        {

            IEnumerable<Contracts.FileInfo> files =

             _dbContext.Files.Where(x => x.ParentFolderId == null && x.OwnerId == ownerId)
                .Select(y => new Contracts.FileInfo()
                {
                    FileId = y.FileId,
                    ParentFolderId = y.ParentFolderId,
                    OwnerId = y.OwnerId,
                    Name = y.Name,
                    CreationDate = y.CreationDate,
                    UploadDate = y.UploadDate,
                    Size = y.Size,
                    Type = y.Type,
                    HasPublicAccess = y.HasPublicAccess,
                    ResizedImage = y.ImageStorage == null ? "not  correct  image" : Convert.ToBase64String(y.ImageStorage)
                }).ToList();

            foreach (var file in files)
            {
                file.TagList = _tagsService.GetFileTags(file.FileId);
            }

            return files;
        }

        public IEnumerable<FolderInfo> GetPathToRoot(Guid FolderId)
        {
            if (FolderId == null) return null;

            FolderInfo folder = GetFolder(FolderId);
            List<FolderInfo> breadCrumpList = new List<FolderInfo>
            {
                folder
            };

            while (folder.ParentFolderId != null)
            {
                folder = GetFolder((Guid)folder.ParentFolderId);
                breadCrumpList.Add(folder);
            }

            return breadCrumpList;
        }

        public IEnumerable<Contracts.FileInfo> SearchFilesOnName(string fileName, Guid ownerId)
        {
            IEnumerable<Contracts.FileInfo> files = _dbContext
                .Files
                .Where(t => t.Name.Contains(fileName) && t.OwnerId == ownerId)
                 .Select(y => new Contracts.FileInfo()
                 {
                     FileId = y.FileId,
                     ParentFolderId = y.ParentFolderId,
                     OwnerId = y.OwnerId,
                     Name = y.Name,
                     CreationDate = y.CreationDate,
                     UploadDate = y.UploadDate,
                     Size = y.Size,
                     Type = y.Type,
                     HasPublicAccess = y.HasPublicAccess,
                     ResizedImage = y.ImageStorage == null ? "not  correct  image" : Convert.ToBase64String(y.ImageStorage)
                 }).ToList();

            foreach (var file in files)
            {
                file.TagList = _tagsService.GetFileTags(file.FileId);
            }

            return files;
        }

        public IEnumerable<Contracts.FileInfo> SearchFilesOnTag(string tagName, Guid ownerId)
        {
            IEnumerable<Contracts.FileInfo> files = _dbContext.FilesToTags.Where(t => t.Tag.Name.Contains(tagName) && t.File.OwnerId == ownerId)
                 .Select(y => new Contracts.FileInfo()
                 {
                     FileId = y.File.FileId,
                     ParentFolderId = y.File.ParentFolderId,
                     OwnerId = y.File.OwnerId,
                     Name = y.File.Name,
                     CreationDate = y.File.CreationDate,
                     UploadDate = y.File.UploadDate,
                     Size = y.File.Size,
                     Type = y.File.Type,
                     HasPublicAccess = y.File.HasPublicAccess,
                     ResizedImage = y.File.ImageStorage == null ? "not  correct  image" : Convert.ToBase64String(y.File.ImageStorage)
                 }).ToList();

            foreach (var file in files)
            {
                file.TagList = _tagsService.GetFileTags(file.FileId);
            }

            return files;
        }

        public void SetThumbnail(Guid fileId, byte[] resizedImage)
        {
            _dbContext.Files.Where(t => t.FileId == fileId)
                .FirstOrDefault()
                .ImageStorage = resizedImage;

            _dbContext.SaveChanges();
        }

        

        public DateTime ParseDate(string date)
        {
            DateTime parsedDate;              
            try
            {                
                DateTime.TryParse(date, out parsedDate);
            }
            catch (FormatException)
            {
                parsedDate = DateTime.Now;
                return parsedDate;
            }

            return parsedDate;
        }
    }
}



