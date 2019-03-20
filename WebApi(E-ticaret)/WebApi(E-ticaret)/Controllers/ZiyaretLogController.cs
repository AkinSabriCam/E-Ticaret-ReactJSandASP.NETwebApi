using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DAL;
namespace WebApi_E_ticaret_.Controllers
{
    public class ZiyaretLogController : ApiController
    {
        DAL.ziyaretcilogDAL ziyaretlog = new ziyaretcilogDAL();
       
        public IHttpActionResult GetLog()
        {
           var model=ziyaretlog.GetLogZiyaret();

            if (model != null)
            {
                return Ok(model);
            }

            return NotFound();
        }

        [HttpPut]
        public IHttpActionResult PutLogDate()
        {
            ziyaretlog.PutDate();
            return Ok();
        }

        [HttpPut]
        public IHttpActionResult PutLogClick()
        {
            ziyaretlog.PutClick();
            return Ok();
        }

    }
}
