﻿using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Logo.Contracts;
using Logo.Contracts.Services;
using Logo.Web.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace Logo.Web.Controllers
{
    [Route("api/[controller]")]
    public class UsersController : Controller
    {
        private readonly IUsersService _usersService;

        public UsersController(IUsersService usersService)
        {
            _usersService = usersService;
        }

        [HttpPost("auth-token")]
        public UserInfoWithToken GetAuthorizationToken([FromBody]UserCredentials userCredentials)
        {
            var user = _usersService.GetUser(userCredentials);

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

            return userInfoWithToken;
        }
    }
}