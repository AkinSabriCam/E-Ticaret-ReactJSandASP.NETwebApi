using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DAL;

namespace WebApi_E_ticaret_.Controllers
{
    public class KullaniciLogController : ApiController
    {
        DAL.kullaniciLogDAL kullaniciLog = new kullaniciLogDAL();

        public IHttpActionResult GetLogKullanici()
        {
            var model = kullaniciLog.GetLogKullanici();

            if (model != null)
            {
                return Ok(model);
            }
            else
                return NotFound();
        }

        [HttpPut]
        public IHttpActionResult PutLogDate()
        {
            kullaniciLog.PutLogDate();
            return Ok();
        }

        [HttpPut]
        public IHttpActionResult PutUserLog()
        {
            kullaniciLog.PutUserLog();
            return Ok();
        }

    }
}
