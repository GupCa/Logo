using System;
using System.Collections.Generic;
using Logo.Implementation.DatabaseModels;
using System.Linq;
using Logo.Contracts;
using Logo.Contracts.Services;

namespace Logo.Implementation
{
    public class TagsService : ITagsService
    {
        LogodbContext _dbContext;
        private readonly int _maxTagLength = 100;
        private readonly int _maxTagsPerFile = 200;

        public TagsService(LogodbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public Tag CreateTag(TagsCredentials tagsCredentials)
        {
            Tag tag = new Tag { Name = tagsCredentials.Text, TagId = Guid.NewGuid() };
            _dbContext.Add(tag);
            _dbContext.SaveChanges();

            return tag;
        }

        public void CreateTagToFolder(TagsCredentials tagsCredentials)
        {
            string[] tags = ParseTagString(tagsCredentials.Text);

            foreach (var tagName in tags)
            {
                Tag tag = _dbContext.Tags.Where(t => t.Name.Equals(tagName)).FirstOrDefault();

                if (tag == null)
                {
                    tag = CreateTag(new TagsCredentials
                    {
                        Text = tagName,
                        ObjectId = tagsCredentials.ObjectId
                    });
                }

                FoldersToTags foldersToTags = new FoldersToTags  //  create   connectin  betwenn  folder  and tag
                {
                    FolderId = tagsCredentials.ObjectId,
                    TagId = tag.TagId
                };

                if (_dbContext.FoldersToTags     //if  not   esist   connection   between  tag  and  folder
                    .Where(t => t.FolderId == foldersToTags.FolderId && t.TagId == foldersToTags.TagId)
                    .FirstOrDefault() == null)
                {
                    _dbContext.FoldersToTags.Add(foldersToTags);
                    _dbContext.SaveChanges();
                }
            }

        }


        int GetFileTagsCapacity(Guid fileId)
        {
            return _dbContext.FilesToTags.Where(t => t.FileId == fileId).Count();
        }

        public void CreateTagToFile(TagsCredentials tagsCredentials)
        {
            string[] tags = ParseTagString(tagsCredentials.Text);

            foreach (var tagName in tags)
            {
                if (tagName.Length > _maxTagLength)
                    throw new InvalidOperationException(String.Format("Длинна тега превышает {0} символов", _maxTagLength));

                if (GetFileTagsCapacity(tagsCredentials.ObjectId) + 1 > _maxTagsPerFile)
                    throw new InvalidOperationException(String.Format("На один файл возможно добавить не более {0} тегов", _maxTagsPerFile));

                Tag tag = _dbContext.Tags.Where(t => t.Name.Equals(tagName, StringComparison.InvariantCultureIgnoreCase)).FirstOrDefault();

                if (tag == null)
                {
                    tag = CreateTag(new TagsCredentials
                    {
                        Text = tagName,
                        ObjectId = tagsCredentials.ObjectId
                    });
                }

                FilesToTags filesToTags = new FilesToTags
                {
                    FileId = tagsCredentials.ObjectId,
                    TagId = tag.TagId
                };

                if (_dbContext.FilesToTags     //if  not   exsist   connection   between  tag  and  files
                    .Where(t => t.FileId == filesToTags.FileId && t.TagId == filesToTags.TagId)
                    .FirstOrDefault() == null)
                {
                    _dbContext.FilesToTags.Add(filesToTags);
                    _dbContext.SaveChanges();
                }
            }
        }

        public void DeleteTagsFromFile(Guid fileId)
        {
            var fileToTag = _dbContext.FilesToTags
                .Where(t => t.FileId == fileId);

            foreach (var file in fileToTag)
            {
                _dbContext.FilesToTags.Remove(file);
            }

            _dbContext.SaveChanges();
        }

        public void DeleteTagsFromFolder(Guid folderId)
        {
            var folderToTags = _dbContext.FoldersToTags
                  .Where(t => t.FolderId == folderId);

            foreach (var folder in folderToTags)
            {
                _dbContext.FoldersToTags.Remove(folder);
            }

            _dbContext.SaveChanges();
        }

        public IEnumerable<string> GetFileTags(Guid fileId)
        {
            return _dbContext.FilesToTags.Where(t => t.FileId == fileId)
            .Select(t => t.Tag.Name)
            .ToList();
        }

        public IEnumerable<string> GetFolderTags(Guid folderId)
        {
            return _dbContext.FoldersToTags.Where(t => t.FolderId == folderId)
            .Select(t => t.Tag.Name)
            .ToList();
        }

        public IEnumerable<string> GetAllTags()
        {
            return _dbContext.Tags
             .Select(t => t.Name)
             .ToList();
        }

        public string[] ParseTagString(string text)
        {
            return text.Split(new string[] { "#", " " }, StringSplitOptions.RemoveEmptyEntries);
        }
    }
}
