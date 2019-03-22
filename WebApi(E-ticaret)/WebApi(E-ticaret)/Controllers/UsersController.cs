using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DAL;

namespace WebApi_E_ticaret_.Controllers
{
    public class UsersController : ApiController
    {
        DAL.kullaniciDAL kullaniciDal = new kullaniciDAL();
        DAL.kullaniciLogDAL kullaniciLog = new kullaniciLogDAL();

        public IHttpActionResult GetAllUsers()
        {
            var model = kullaniciDal.GetAllusers();
            if (model != null)
            {
                return Ok(model);
            }
            else
            {
                return NotFound();
            }
        }
        public IHttpActionResult GetUserById(int id)
        {
            if (id > 0)
            {
                var model = kullaniciDal.GetusersByid(id);
                if (model != null)
                {
                    return Ok(model);
                }
                else
                {
                    return NotFound();
                }
            }
            else
            {
                return BadRequest();
            }

        }
        public IHttpActionResult PostUser(DAL.ViewModels.UserViewModel model)
        {
            if (ModelState.IsValid)
            {
                kullaniciDal.PostUser(model);
                kullaniciLog.PutUserLog();
                return Ok();
               
            }
            else
            {
                return BadRequest();
            }

        }

        public IHttpActionResult PutUser(DAL.ViewModels.UserViewModel model)
        {
            if (ModelState.IsValid)
            {
                if (kullaniciDal.PutUser(model))
                {
                    return Ok();

                }
                else
                {
                    return NotFound();
                }
            }
            else
            {
                return BadRequest();
            }
        }
        public IHttpActionResult DeleteUser(int id)
        {
            if (id > 0)
            {
                if (kullaniciDal.Delete(id))
                {
                    return Ok();
                }
                else
                {
                    return NotFound();
                }
            }
            else
            {
                return BadRequest();
            }


        }
    }
}
