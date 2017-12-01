using System;
using System.Linq;
using Logo.Contracts;
using Logo.Contracts.Services;
using Logo.Implementation.DatabaseModels;
using System.Threading.Tasks;
using System.Net.Mail;

using System.Security.Cryptography;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;

namespace Logo.Implementation
{
    public class UsersService : IUsersService 
    {
        private readonly LogodbContext _dbContext;
        private readonly IFoldersService _folderService;
        private ILogger<ApiExceptionFilter> _logger;

        public UsersService(LogodbContext dbContext,  IFoldersService foldersService, ILogger<ApiExceptionFilter> logger)
        {
            _dbContext = dbContext;
            _folderService = foldersService;
            _logger = logger;

            //this._logger.LogError("some  error");
        }

        public UserInfo GetUserByEmail(string  email)
        {
            var userFromDatabase = _dbContext.Users.FirstOrDefault(x => x.Email == email);
            
            if (userFromDatabase == null)
            {
                throw new InvalidOperationException("Юзер не найден"); 
            }
            
            return new UserInfo
            {
                Id = userFromDatabase.UserId,
                Email = userFromDatabase.Email,
                Name = userFromDatabase.Name
            };
        }

        public UserInfo GetUserById(Guid userId)
        {
            var userFromDatabase = _dbContext.Users.FirstOrDefault(x => x.UserId == userId);

            if (userFromDatabase == null)
            {
                throw new InvalidOperationException("Юзер не найден");
            }

            return new UserInfo
            {
                Id = userFromDatabase.UserId,
                Email = userFromDatabase.Email,
                Name = userFromDatabase.Name
            };
        }

        public UserInfo GetUserByCredentials(UserCredentials userCredentials)
        {
            var userFromDatabase = _dbContext.Users.FirstOrDefault(x => x.Email == userCredentials.Email  && x.Password ==  userCredentials.Password);

            if (userFromDatabase == null)
            {
                throw new InvalidOperationException("Неверный логин или пароль");
            }

            return new UserInfo
            {
                Id = userFromDatabase.UserId,
                Email = userFromDatabase.Email,
                Name = userFromDatabase.Name
            };
        }

        public void AddUser(UserCredentialsWithName userData)
        {
            User user = new User
            {
                UserId = Guid.NewGuid(),
                Email = userData.Email,
                Password = userData.Password,
                Name = userData.Name

            };

            _dbContext.Add(user);

           
            _dbContext.SaveChanges();
        }

        public bool ValidateUserCredentials(UserCredentialsWithName userData)
        {
            var user = _dbContext
                .Users
                .Where(x => x.Email == userData.Email)
                .FirstOrDefault();  // unique  email   for  registration

            return (user == null &&
                IsValidEmail(userData.Email) && userData.Email.Length <= 254 &&
                !String.IsNullOrEmpty(userData.Password) && userData.Password.Length <= 32 &&
                !String.IsNullOrEmpty(userData.Name) && userData.Name.Length <= 50
                ) ? true : false;
        }

        public bool IsValidEmail(string emailaddress)
        {
            if (String.IsNullOrEmpty(emailaddress) || emailaddress.Length > 255)
                return false;
            try
            {
                MailAddress m = new MailAddress(emailaddress);
                return true;
            }
            catch (FormatException)
            {
                return false;
            }
        }

        public IEnumerable<UserFullInformation> GetAllUsers()
        {
           return  _dbContext.Set<User>().Select(
                 y => new UserFullInformation()
                 {
                     Email = y.Email,
                     UserId = y.UserId,
                     Name = y.Password,
                     Password = y.Password
                 });
        }
    }
}