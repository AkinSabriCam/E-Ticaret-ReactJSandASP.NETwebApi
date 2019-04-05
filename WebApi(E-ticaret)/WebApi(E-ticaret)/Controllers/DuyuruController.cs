using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DAL;

namespace WebApi_E_ticaret_.Controllers
{
    public class DuyuruController : ApiController
    {
        DAL.tblDuyuruDAL duyuruDal = new tblDuyuruDAL();
        [HttpGet]
        public IHttpActionResult Get()
        {
            var model = duyuruDal.Get();
            if (model != null)
            {
                return Ok(model);
            }
            else
            {
                return NotFound();
            }
        }

        [HttpPost]
        public IHttpActionResult Post(DAL.Models.Duyuru model)
        {
            if (ModelState.IsValid)
            {
                duyuruDal.Post(model);
                return Ok();
            }
            else
            {
                return BadRequest();
            }


        }
    }
}
