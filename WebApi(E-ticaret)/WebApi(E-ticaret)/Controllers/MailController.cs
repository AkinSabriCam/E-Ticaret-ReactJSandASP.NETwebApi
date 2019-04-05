using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DAL;

namespace WebApi_E_ticaret_.Controllers
{
    public class MailController : ApiController
    {
        DAL.MailDAL mailDal = new MailDAL();

        [HttpPost]
        public IHttpActionResult SendMailAsVisitor(DAL.ViewModels.MailViewModel model)
        {
            if (ModelState.IsValid)
            {
                mailDal.SendMailAsVisitor(model);
                return Ok();
            }
            else return BadRequest();            
        }

        [HttpPost]
        public IHttpActionResult SendMailAsUser(DAL.ViewModels.UserMailViewModel model)
        {
            if (ModelState.IsValid)
            {
                mailDal.SendMailAsUser(model);
                return Ok();
            }
            else return BadRequest();
        }
    }
}
