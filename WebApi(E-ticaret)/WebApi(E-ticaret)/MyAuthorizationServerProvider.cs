using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.Owin.Security.OAuth;
using DAL;

namespace WebApi_E_ticaret_
{
    public class MyAuthorizationServerProvider : OAuthAuthorizationServerProvider
    {
       
        public override async Task GrantResourceOwnerCredentials(OAuthGrantResourceOwnerCredentialsContext context)
        {
            context.OwinContext.Response.Headers.Add("Access-Control-Allow-Original", new[] { "*" });

            if(context.UserName!=""  && context.Password != "")
            {
                DAL.kullaniciDAL kullanicidal = new kullaniciDAL();
                var Kullanici=kullanicidal.ChechUser(context.UserName, context.Password);


            if (Kullanici!=null)
                {
                    var identity = new ClaimsIdentity(context.Options.AuthenticationType);
                    identity.AddClaim(new Claim("sub", Kullanici.kullaniciAdi));
                    identity.AddClaim(new Claim("role", "user"));
                    identity.AddClaim(new Claim(ClaimTypes.Role, Kullanici.Rol.rol1));
                    context.Validated(identity);

                }
                else
                {
                    context.SetError("Böyle bir kullanıcı bulunamadı");
                }

            }
            else
            {
                context.SetError("kullanici adi veya password giriniz");
            }
        }

       

        public override async  Task ValidateClientAuthentication(OAuthValidateClientAuthenticationContext context)
        {
            context.Validated();
        }
        
    }
}