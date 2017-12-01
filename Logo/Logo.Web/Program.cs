using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;

using Logo.Implementation.DatabaseModels;
using Logo.Implementation;
using Logo.Contracts;
using System;

namespace Logo.Web
{
    public class Program
    {
        public static void Main(string[] args)
        {              
            BuildWebHost(args).Run();
        }

        public static IWebHost BuildWebHost(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseApplicationInsights()
                .UseStartup<Startup>()
                .Build();
    }
}
