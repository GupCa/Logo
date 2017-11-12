﻿using System;
using System.Linq;
using Logo.Contracts;
using Logo.Contracts.Services;
using Logo.Implementation.DatabaseModels;
using System.Collections.Generic;

namespace Logo.Implementation
{
    public class FoldersService : IFoldersService
    {
        private readonly LogoDbContext _dbContext;

        public FoldersService(LogoDbContext dbContext  )
        {
            _dbContext = dbContext;
        }


        public FolderInfo GetFolder(Guid folderId)
        {
            var folder = _dbContext.Folders.FirstOrDefault(x => x.FolderId.Equals(folderId));


            if (folder == null)
            {
                throw new InvalidOperationException("Folder not found.");       
            }

            return new FolderInfo
            {
                FolderId = folder.FolderId,
                OwnerId = folder.OwnerId,
                ParentFolderId = folder.ParentFolderId,
                Name = folder.Name,
                CreationDate = folder.CreationDate,
                UploadDate = folder.UploadDate,
                Level = folder.Level,
                HasPublicAccess = folder.HasPublicAccess
            };
        }


        public FolderInfo CreateFolder(string folderName, Guid ownerId, Guid? parentFolderId)
        {
            
            FolderInfo folder = new FolderInfo
            {
                FolderId = Guid.NewGuid(),
                OwnerId = ownerId,
                ParentFolderId = parentFolderId,
                Name = folderName,
                CreationDate = DateTime.Now,
                UploadDate = null,
                Level = parentFolderId == null ? 0 : GetFolder((Guid)parentFolderId).Level + 1,
                HasPublicAccess = false
            };

            return folder;
        }

        public void AddFolder(FolderInfo folder)
        {
            _dbContext.Add
                  (new Folder
                  {
                      FolderId = folder.FolderId,
                      OwnerId = folder.OwnerId,
                      ParentFolderId = folder.ParentFolderId,
                      Name = folder.Name,
                      CreationDate = folder.CreationDate,
                      UploadDate = folder.UploadDate,
                      Level = folder.Level,
                      HasPublicAccess = folder.HasPublicAccess
                  });

            _dbContext.SaveChanges();
        }

        public void DeleteFolder(Guid folderId)
        {
            var folder = GetFolder(folderId);


            if  (folder  ==  null)
            {
                throw new InvalidOperationException("Folder  doesn't exist");
            }

            _dbContext.Remove(folder);
            
            _dbContext.SaveChanges();
        }



        public  IEnumerable<FolderInfo> GetAllFolders()   //only  for  testing
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
                   HasPublicAccess = y.HasPublicAccess
               });
        }


        public  IEnumerable<FolderInfo> GetFoldersInFolder(Guid FolderId)
        {
            return _dbContext.Folders.Where(x => x.ParentFolderId.Equals(FolderId)).Select(y => new FolderInfo()
            {
                 FolderId  =  y.FolderId,
                 ParentFolderId = y.ParentFolderId,
                 OwnerId  = y.OwnerId,
                 Name = y.Name,
                 CreationDate = y.CreationDate,
                 UploadDate = y.UploadDate,
                 Level = y.Level,
                 HasPublicAccess = y.HasPublicAccess       
            }).ToList(); 
              
        }

        public IEnumerable<FileInfo> GetFilesInFolder(Guid FolderId)
        {
            return _dbContext.Files.Where(x => x.ParentFolderId.Equals(FolderId)).Select( y => new FileInfo()
            {
                FileId = y.FileId,
                ParentFolderId = y.ParentFolderId,
                OwnerId = y.OwnerId,
                Name = y.Name,
                CreationDate = y.CreationDate,
                UploadDate = y.UploadDate,    
                Size = y.Size,
                Type =  y.Type,
                HasPublicAccess = y.HasPublicAccess               
            }).ToList();
        }
    }
}



