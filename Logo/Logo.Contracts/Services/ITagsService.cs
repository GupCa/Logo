using System;
using System.Collections.Generic;
using System.Text;

namespace Logo.Contracts.Services
{
    public interface ITagsService
    {
        void CreateTagToFolder(TagsCredentials tagsCredentials);

        void CreateTagToFile(TagsCredentials tagsCredentials);
      
        IEnumerable<string> GetFolderTags(Guid folderId);

        IEnumerable<string> GetFileTags(Guid fileId);
       
        void DeleteTagsFromFolder(Guid folderId);

        void DeleteTagsFromFile(Guid fileId);

        IEnumerable<string> GetAllTags();
    }
}
