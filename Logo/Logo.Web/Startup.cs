using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using System.IO;
using System.Text;
using Logo.Contracts.Services;
using Logo.Implementation;
using Logo.Implementation.DatabaseModels;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Serilog;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.DependencyInjection.Extensions;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Rewrite;

namespace Logo.Web
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
            services.TryAddSingleton<IHttpContextAccessor, HttpContextAccessor>();  

            services.AddAuthorization(auth =>
            {
                auth.AddPolicy("Bearer", new AuthorizationPolicyBuilder()
                    .AddAuthenticationSchemes(JwtBearerDefaults.AuthenticationScheme)
                    .RequireAuthenticatedUser().Build());          
            });

            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(options =>
                {
                    options.TokenValidationParameters.IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes("9%&NvuFeT#.bc~+[#CX6C5U3+(3$H"));
                    options.TokenValidationParameters.ValidAudience = "http://logo-service.azurewebsites.net/";
                    options.TokenValidationParameters.ValidIssuer = "Logo";
                    options.TokenValidationParameters.ValidateIssuerSigningKey = true;
                    options.TokenValidationParameters.RequireExpirationTime = false;
                    options.TokenValidationParameters.ValidateLifetime = false;
                    options.TokenValidationParameters.ValidateIssuer = true;
                    options.TokenValidationParameters.ValidateAudience = true;
                });


			services.AddMvc(
                options =>
                {
                    options.Filters.Add(new RequireHttpsAttribute());
                    //  options.Filters.Add(new ApiExceptionFilter(new  loggerFactory.AddSerilog()));
                });



            services.AddScoped<ApiExceptionFilter>();

            var connectionString = "Server=tcp:logo-server-darabase.database.windows.net,1433;Initial Catalog=logodb;Persist Security Info=False;User ID=logo-server-admin;Password=pF8Tyzu7FEH8;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;";
            services.AddDbContext<LogodbContext>(options => options.UseSqlServer(connectionString));

            //var connectionStringLocal = "Data Source=YOURCAT\\SQLEXPRESS;Initial Catalog=logodb;Integrated Security=True;Persist Security Info=False;Pooling=False;MultipleActiveResultSets=False;Connect Timeout=60;Encrypt=False;TrustServerCertificate=True";
            //services.AddDbContext<LogoDbContext>(options => options.UseSqlServer(connectionStringLocal));

            //services.AddDbContext<LogodbContext>(options => options.UseInMemoryDatabase("TestBase"));

            services.AddTransient<IUsersService, UsersService>();
            services.AddTransient<IFoldersService, FoldersService>();
            services.AddTransient<IMathService, MathService>();
            services.AddTransient<ITagsService, TagsService>();
            services.AddTransient<IFilesService, FilesService>();

            Log.Logger = new LoggerConfiguration()
               .MinimumLevel
               .Information()
               .WriteTo.File("log-history.txt")  //  LogEventLevel.Information
               .CreateLogger();
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddSerilog();

            app.Use(async (context, next) =>
            {
                await next();
                if (context.Response.StatusCode == 404 &&
                    !Path.HasExtension(context.Request.Path.Value) &&
                    !context.Request.Path.Value.StartsWith("/api/"))
                {
                    context.Request.Path = "";
                    await next();
                }
            });

            app.UseMvcWithDefaultRoute();
            app.UseDefaultFiles();
            app.UseStaticFiles();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseAuthentication();

            var options = new RewriteOptions()
               .AddRedirectToHttps();

            app.UseRewriter(options);
        }
    }
}