using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DAL;
using DAL.Models
namespace WebApi_E_ticaret_.Controllers
{
    
    public class SepetController : ApiController
    {
        sepetDAL sepetDal = new  sepetDAL();
        public IHttpActionResult GetAllProductsinSepetforVisitor(int id)
        {  // buraya gönderilen id sepetin id sidir.

            var model = sepetDal.GetAllSepetforVisitor(id);
            if (model != null)
            {
                return Ok(model);
            }
            else
            {
                return NotFound();
            }

        }

        public IHttpActionResult GetAllProductsinSepetforUser(int id)
        {  
            // buraya gönderilen Id kullanıcının id sidir.  

            var model = sepetDal.GetAllSepetforVisitor(id);
            if (model != null)
            {
                return Ok(model);
            }
            else
            {
                return NotFound();
            }

        }

        public IHttpActionResult PostProductForUser(DAL.ViewModels.UserSepettekiUrunlerViewModel model)
        {
            if (ModelState.IsValid)
            {
                sepetDal.PostProductintoSepetforUser(model);
                return Ok();
            }
            else
            {
                return BadRequest();
            }
        }

        public IHttpActionResult PostProductForVisitor(SepettekiUrunler model)
        {
            if (ModelState.IsValid)
            {
                var id=sepetDal.PostProductintoSepetforVisitor(model);//sepet id dönmektedir.
                return Ok(id);
            }
            else
            {
                return BadRequest();
            }

        }



    }
}
