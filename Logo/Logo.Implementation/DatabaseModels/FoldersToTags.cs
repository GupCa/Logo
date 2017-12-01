using System;
using System.Collections.Generic;

namespace Logo.Implementation.DatabaseModels
{
    public partial class FoldersToTags
    {
        public Guid FolderId { get; set; }
        public Guid TagId { get; set; }

        public Folder Folder { get; set; }
        public Tag Tag { get; set; }
    }
}
