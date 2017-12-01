using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace Logo.Web.Models
{

    public class LoadedFileUI 
    {
        public IFormFile FileContent { get; set; }

        public  Guid ? ParentFolderId { get; set; }

        public string  CreationDate { get; set; }

        public  string  Tags { get; set; }        
    }

}
