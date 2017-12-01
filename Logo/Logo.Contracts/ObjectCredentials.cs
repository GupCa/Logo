using System;
using System.Collections.Generic;
using System.Text;

namespace Logo.Contracts
{
    public class ObjectCredentials
    {
        public string Name { get; set; }

        public Guid? ParentObjectId { get; set; }
        
        public DateTime ? CreationDate { get; set; }

        public long Size { get; set; }

        public string Tags { get; set; }
    }
}
