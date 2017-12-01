using System;
using System.Collections.Generic;

namespace Logo.Implementation.DatabaseModels
{
    public partial class Folder
    {
        public Folder()
        {
            Files = new HashSet<File>();
            FoldersToTags = new HashSet<FoldersToTags>();
            FoldersToUsers = new HashSet<FoldersToUsers>();
            InverseParentFolder = new HashSet<Folder>();
        }

        public Guid FolderId { get; set; }
        public Guid? ParentFolderId { get; set; }
        public Guid OwnerId { get; set; }
        public string Name { get; set; }
        public DateTime? CreationDate { get; set; }
        public DateTime? UploadDate { get; set; }
        public int Level { get; set; }
        public bool? HasPublicAccess { get; set; }

        public User Owner { get; set; }
        public Folder ParentFolder { get; set; }
        public ICollection<File> Files { get; set; }
        public ICollection<FoldersToTags> FoldersToTags { get; set; }
        public ICollection<FoldersToUsers> FoldersToUsers { get; set; }
        public ICollection<Folder> InverseParentFolder { get; set; }
    }
}
