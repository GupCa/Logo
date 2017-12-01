using System;
using System.Collections.Generic;

namespace Logo.Implementation.DatabaseModels
{
    public partial class FilesToUsers
    {
        public Guid FileId { get; set; }
        public Guid UserId { get; set; }

        public File File { get; set; }
        public User User { get; set; }
    }
}
