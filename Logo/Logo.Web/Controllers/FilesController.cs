﻿using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

using Microsoft.AspNetCore.Authorization;

namespace Logo.Web.Controllers
{
    [Authorize("Bearer")]
    [Route("api/[controller]")]

    public class FilesController : Controller
    {
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new[] { "file1", "file2" };
        }




       




    }
}
