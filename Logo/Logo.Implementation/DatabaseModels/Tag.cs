using System;
using System.Collections.Generic;

namespace Logo.Implementation.DatabaseModels
{
    public partial class Tag
    {
        public Tag()
        {
            FilesToTags = new HashSet<FilesToTags>();
            FoldersToTags = new HashSet<FoldersToTags>();
        }

        public Guid TagId { get; set; }
        public string Name { get; set; }

        public ICollection<FilesToTags> FilesToTags { get; set; }
        public ICollection<FoldersToTags> FoldersToTags { get; set; }
    }
}
