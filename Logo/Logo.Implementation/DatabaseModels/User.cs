using System;
using System.Collections.Generic;

namespace Logo.Implementation.DatabaseModels
{
    public partial class User
    {
        public User()
        {
            Files = new HashSet<File>();
            FilesToUsers = new HashSet<FilesToUsers>();
            Folders = new HashSet<Folder>();
            FoldersToUsers = new HashSet<FoldersToUsers>();
        }

        public Guid UserId { get; set; }
        public string Name { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }

        public ICollection<File> Files { get; set; }
        public ICollection<FilesToUsers> FilesToUsers { get; set; }
        public ICollection<Folder> Folders { get; set; }
        public ICollection<FoldersToUsers> FoldersToUsers { get; set; }
    }
}
