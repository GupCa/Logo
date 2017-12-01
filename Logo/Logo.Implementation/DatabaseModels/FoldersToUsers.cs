using System;
using System.Collections.Generic;

namespace Logo.Implementation.DatabaseModels
{
    public partial class FoldersToUsers
    {
        public Guid FolderId { get; set; }
        public Guid UserId { get; set; }

        public Folder Folder { get; set; }
        public User User { get; set; }
    }
}
