using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DAL;
namespace WebApi_E_ticaret_.Controllers
{
    public class KategorilerController : ApiController
    {
        DAL.kategoriDAL kategoriDal = new kategoriDAL();
        [HttpGet]
        public IHttpActionResult GetAllCategory()
       {
            var model = kategoriDal.GetAllCategory();
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
        public IHttpActionResult GetCategoryById(int id)
        {
            if (id > 0)
            {
                var model = kategoriDal.GetCategoryByid(id);
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

        [HttpPost]
        public IHttpActionResult PostCategory(DAL.Models.Kategori model)
        {
            if (ModelState.IsValid)
            {
                kategoriDal.PostCategory(model);
                return Ok();
            }
            else
            {
                 return BadRequest();
            }

        }
        [HttpPut]
        public IHttpActionResult PutCategory(DAL.Models.Kategori model)
        {
            if (ModelState.IsValid)
            {
                if (kategoriDal.PutCategory(model))
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
        public IHttpActionResult DeleteCategory(int id)
        {
            if (id > 0)
            {
                if (kategoriDal.Delete(id))
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
