using System;
using System.Collections.Generic;
using System.Text;

namespace Logo.Contracts
{
    public  class FolderInfo
    {
        public Guid FolderId { get; set; }
        public Guid? ParentFolderId { get; set; }
        public Guid OwnerId { get; set; }
        public string Name { get; set; }
        public DateTime? CreationDate { get; set; }
        public DateTime? UploadDate { get; set; }
        public int Level { get; set; }
        public bool? HasPublicAccess { get; set; }

        public IEnumerable<string> TagList;
    }
}
