using System;
using System.Collections.Generic;

namespace Logo.Implementation.DatabaseModels
{
    public partial class File
    {
        public File()
        {
            FilesToTags = new HashSet<FilesToTags>();
            FilesToUsers = new HashSet<FilesToUsers>();
        }

        public Guid FileId { get; set; }
        public Guid? ParentFolderId { get; set; }
        public Guid OwnerId { get; set; }
        public string Name { get; set; }
        public DateTime? CreationDate { get; set; }
        public DateTime? UploadDate { get; set; }
        public int? Size { get; set; }
        public int Type { get; set; }
        public bool HasPublicAccess { get; set; }
        public byte[] ImageStorage { get; set; }

        public User Owner { get; set; }
        public Folder ParentFolder { get; set; }
        public ICollection<FilesToTags> FilesToTags { get; set; }
        public ICollection<FilesToUsers> FilesToUsers { get; set; }
    }
}
