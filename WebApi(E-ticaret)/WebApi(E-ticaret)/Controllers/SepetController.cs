using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DAL;
using DAL.Models;
using Newtonsoft.Json;
namespace WebApi_E_ticaret_.Controllers
{
    
    public class SepetController : ApiController
    {
        sepetDAL sepetDal = new  sepetDAL();
        [HttpGet]
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
        [HttpGet]
        public IHttpActionResult GetAllProductsinSepetforUser(int id)
        {  
            // buraya gönderilen Id kullanıcının id sidir.  

            var model = sepetDal.GetAllSepetforUser(id);
            if (model != null)
            {
                return Ok(model);
            }
            else
            {
                return NotFound();
            }

        }
        [HttpGet]
        public IHttpActionResult GetAllCompletedProductsinSepetforUser(int id)
        {   // kullanıcının tamamlamış olduğu siparişleri getirir.
            // buraya gönderilen Id kullanıcının id sidir.  
            var model = sepetDal.GetAllCompletedSepetforUser(id);
            if (model != null)
            {
                return Ok(model);
            }
            else
            {
                return NotFound();
            }

        }
        [HttpGet]
        public IHttpActionResult GetProductCountinSepet(int id)
        {
            // buraya gönderilen Id kullanıcının id sidir.  
            int  count = sepetDal.GetProductCountinSepet(id);
            if (count> 0)
            {
                return Ok(
                    new{
                    value = count
                });
            }
            else
            {
                return Ok(
                    new
                    {
                        value = count
                    });
            }

        }
        [HttpPost]
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
        [HttpPost]
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
        [HttpDelete]
        public IHttpActionResult DeleteSepet(int id)
        {  
            if (id > 0)
            {
                if (sepetDal.DeleteSepet(id))
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
        [HttpDelete]
        public IHttpActionResult DeleteProductinSepet(int sepetid , int uruninsepetid)
        {
            if(sepetid>0 && uruninsepetid > 0)
            {
                if (sepetDal.DeleteProductinSepet(sepetid, uruninsepetid))
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

        [HttpPut]
        public IHttpActionResult PutSepettoUser(int sepetid, int kullaniciId)
        {
            if (sepetid > 0 && kullaniciId > 0)
            {
                if (sepetDal.PutSepettoUser(sepetid,kullaniciId))
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
        [HttpPut]
        [Authorize(Roles ="Kayıtlı Kullanıcı")]
        public IHttpActionResult SiparisTamamla(int kullaniciId)
        {
            if (kullaniciId > 0)
            {
                if(sepetDal.SiparisTamamla(kullaniciId))
                {
                    return Ok();
                }
                else
                {
                    return NotFound();
                }

            }
            else{
                return BadRequest();
            }

        }


    }
}
