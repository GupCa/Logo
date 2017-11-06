﻿using System;
using System.Linq;
using Logo.Contracts;
using Logo.Contracts.Services;
using Logo.Implementation.DatabaseModels;
using System.Threading.Tasks;
using System.Net.Mail;


using System.Security.Cryptography;
using Logo.Contracts;

namespace Logo.Implementation
{
    public class UsersService : IUsersService 
    {
        private readonly LogoDbContext _dbContext;

        public UsersService(LogoDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public UserInfo GetUser(UserCredentials userCredentials)
        {
            var userFromDatabase = _dbContext.Users.FirstOrDefault(x => x.Email == userCredentials.Email && x.Password == userCredentials.Password);

            if (userFromDatabase == null)
            {
                //throw new InvalidOperationException("User not found.");
                return null;
            }

            return new UserInfo
            {
                Id = userFromDatabase.UserId,
                Email = userFromDatabase.Email,
                Name = userFromDatabase.Name
            };
        }

        public void AddUser(Guid id, string email, string password, string name)
        {
            _dbContext.Add(new User { UserId = id, Email = email, Password = password, Name = name });
             _dbContext.SaveChanges();
        }

        public bool ValidateUserCredentials(string email, string password, string name)
        {
            return (IsValidEmail(email) && !String.IsNullOrEmpty(password) && password.Length <= 32 && !String.IsNullOrEmpty(name) && name.Length <= 50 && GetUser(new UserCredentials { Email = email, Password = password }) == null ? true : false);
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


         public byte[] RSAEncrypt(byte[] DataToEncrypt, RSAParameters RSAKeyInfo, bool DoOAEPPadding)
        {
            try
            {
                //Create a new instance of RSACryptoServiceProvider.
                RSACryptoServiceProvider RSAalg = new RSACryptoServiceProvider();

                //Import the RSA Key information. This only needs
                //toinclude the public key information.
                RSAalg.ImportParameters(RSAKeyInfo);

                //Encrypt the passed byte array and specify OAEP padding.  
                //OAEP padding is only available on Microsoft Windows XP or
                //later.  
                return RSAalg.Encrypt(DataToEncrypt, DoOAEPPadding);
            }
            //Catch and display a CryptographicException  
            //to the console.
            catch (CryptographicException e)
            {
                Console.WriteLine(e.Message);

                return null;
            }

        }




    }
}