﻿using System;
using System.Collections.Generic;
using System.Text;

namespace Logo.Contracts
{
    public class UserFullInformation
    {
        public Guid UserId { get; set; }
        public string Name { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
    }
}
