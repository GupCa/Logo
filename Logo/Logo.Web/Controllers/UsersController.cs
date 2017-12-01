using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Logo.Contracts;
using Logo.Contracts.Services;
using Logo.Web.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System;
using Logo.Implementation;

namespace Logo.Web.Controllers
{
    [Route("api/[controller]")]
    [ServiceFilter(typeof(ApiExceptionFilter))]
    public class UsersController : Controller
    {
        private readonly IUsersService _usersService;
        private readonly IMathService _cryptographyService;
      
        public UsersController(IUsersService usersService,  IMathService cryptographyService)
        {
            _usersService = usersService;
            _cryptographyService = cryptographyService;
        }
        
        [HttpPost]
        [Route("auth-token")]
        public IActionResult GetUserInfoWithToken([FromBody]UserCredentials userCredentials)
        {
            UserInfo user = null;
            try
            {
                 user = _usersService.GetUserByCredentials(new UserCredentials
                {
                    Email = userCredentials.Email,
                    Password = userCredentials.Password
                });
            }

            catch (Exception ex)
            {
                return Json(new { success = false, message = ex.Message });    
            }

            var handler = new JwtSecurityTokenHandler();

            var identity = new ClaimsIdentity(
                new[]
                {
                    new Claim("UserId", user.Id.ToString("D"))
                });

            var symmetricKey = Encoding.ASCII.GetBytes("9%&NvuFeT#.bc~+[#CX6C5U3+(3$H");

            var securityToken = handler.CreateToken(new SecurityTokenDescriptor
            {
                Issuer = "Logo",
                Audience = "http://logo-service.azurewebsites.net/",
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(symmetricKey), SecurityAlgorithms.HmacSha256Signature),
                Subject = identity
            });
           
            var userInfoWithToken = new UserInfoWithToken
            {
                Token = handler.WriteToken(securityToken),
                UserInfo = new UserInfo
                {
                    Name = user.Name,
                    Email = user.Email,
                    Id = user.Id
                }
            };
            return  Ok(userInfoWithToken);
        }
       
        [HttpPost]
        [Route("add-user")]
        public IActionResult AddUser([FromBody]UserCredentialsWithName userCredentialsWithName)
        {      
            UserFullInformation userFullInformation = new UserFullInformation
            {
                Email = userCredentialsWithName.Email,
                Password = userCredentialsWithName.Password,
                Name = userCredentialsWithName.Name
            };

            try
            {
                if (_usersService.ValidateUserCredentials(userCredentialsWithName))
                {
                    _usersService.AddUser(userCredentialsWithName);
                }
                else
                {
                    throw new InvalidOperationException("Неверный логин или пароль");
                }
            }
            catch (Exception ex)
            {
                return Json(new { success = false, message = ex.Message });    
            }
            return Ok();       
        }
    }
}