using System;
using System.Collections.Generic;
using System.Text;

namespace Logo.Contracts
{
    public class FileInfo
    {
        public Guid FileId { get; set; }
        public Guid? ParentFolderId { get; set; }
        public Guid OwnerId { get; set; }
        public string Name { get; set; }
        public DateTime? CreationDate { get; set; }
        public DateTime? UploadDate { get; set; }
        public int? Size { get; set; }
        public int Type { get; set; }
        public bool? HasPublicAccess { get; set; }

        public string ResizedImage { get; set; }
        public IEnumerable<string> TagList;

    }
}
