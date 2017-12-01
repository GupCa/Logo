using Logo.Contracts;
using Logo.Implementation;
using Logo.Implementation.DatabaseModels;
using Logo.Web.Controllers;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Logo.Tests
{
    //[TestClass]
    public class UsersControllerTest
    {
        //[TestMethod]
        public void GetTokenTest()
        {
            var connectionString = "";
            using (var logoDb = new LogodbContext(connectionString) )
            {
                //var usersService = new UsersService(logoDb, new FoldersService(logoDb) );
                var cryptographyService = new MathService();

               // var usersController = new UsersController(usersService, cryptographyService);

                var model = new UserCredentials
                {
                    Email = "anntytova@gmail.com",
                    Password = "qwerty"
                };

               // var userInfoWithToken = usersController.GetUserInfoWithToken(model);
                
                //Assert.IsFalse(string.IsNullOrEmpty(userInfoWithToken.Token));


            }
        }
    }
}
