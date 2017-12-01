using Logo.Contracts;

namespace Logo.Web.Models
{
    public class UserInfoWithToken
    {
        public string Token { get; set; }

        public UserInfo UserInfo { get; set; }
    }
}