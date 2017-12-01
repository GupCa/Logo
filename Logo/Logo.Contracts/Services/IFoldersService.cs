using System;
using System.Collections.Generic;
using System.IO;

namespace Logo.Contracts.Services
{
    public interface IFoldersService
    {
        IEnumerable<FolderInfo> GetRootFolders(Guid ownerId);
        FolderInfo GetFolder(Guid folderId);
        void CreateFolder(ObjectCredentialsWithOwner folderCredentials);
        void RenameFolder(UpdatedObject updatedFolder);
        void DeleteFolder(Guid folderId);

        IEnumerable<FileInfo> GetRootFiles(Guid ownerId);
        FileInfo GetFile(Guid fileId);
        Guid CreateFile(ObjectCredentialsWithOwner folderCredentials);  
        
        void RenameFile(UpdatedObject updatedFolder);
        void DeleteFile(Guid folderId);

        string GetFileExstention(string fileName);

        DateTime ParseDate(string date);

        IEnumerable<FolderInfo> GetPathToRoot(Guid FolderId);

        IEnumerable<FolderInfo> GetFoldersInFolder(Guid folderId);
        IEnumerable<FileInfo> GetFilesInFolder(Guid folderId);

        IEnumerable<FileInfo> SearchFilesOnName(string fileName,  Guid ownerId);
        IEnumerable<FileInfo> SearchFilesOnTag(string tagName,  Guid ownerId);


        IEnumerable<FolderInfo> GetAllFolders();  //only  for   testing
        IEnumerable<FileInfo> GetAllFiles();  //only  for   testing

        void SetThumbnail(Guid fileId, byte[] resizedImage);

        int GetFileType(string fileExtention);

        //List<Guid> GetAllFilesFromDirectory(Guid folderId, List<Guid> filesList);
    }

}
