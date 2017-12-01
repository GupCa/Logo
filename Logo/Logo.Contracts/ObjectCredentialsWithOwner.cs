using System;
using System.Collections.Generic;
using System.Text;

namespace Logo.Contracts
{
    public class ObjectCredentialsWithOwner   //file or   folder
    {        
        public ObjectCredentials ObjectCredentials { get; set; }

        public Guid OwnerId { get; set; }

    }
}
