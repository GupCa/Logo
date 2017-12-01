using System;
using System.Collections.Generic;

namespace Logo.Implementation.DatabaseModels
{
    public partial class FilesToTags
    {
        public Guid FileId { get; set; }
        public Guid TagId { get; set; }

        public File File { get; set; }
        public Tag Tag { get; set; }
    }
}
