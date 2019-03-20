using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DAL;

namespace WebApi_E_ticaret_.Controllers
{   
    public class UrunlerController : ApiController
    {
        DAL.UrunDAL  urunDal = new DAL.UrunDAL();

        [HttpGet]
        public IHttpActionResult GetAllProducts()
        {
            var model = urunDal.GetAllProduct();
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
        public IHttpActionResult GetProductById(int id)
        {
            if (id > 0)
            {
                var model = urunDal.GetProductById(id);
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
        public IHttpActionResult PostProductAlreadyExist(DAL.ViewModels.ProductStokViewModel model)
        {
            if (ModelState.IsValid)
            { // buraya önceden ekli olan bir ürün gelecek bu ürüne ait stok bulunup adeti arttırılacaktır
                if (urunDal.PostProductAlreadyExist(model))
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
        [HttpPost]
        public IHttpActionResult PostProduct(DAL.ViewModels.ProductStokViewModel model)
        {
            if (ModelState.IsValid)
            {
                urunDal.PostProduct(model);
                return Ok();
            }
            else
            {
                return BadRequest();
            }

        }

        [HttpPut]
        public IHttpActionResult PutProduct(DAL.ViewModels.ProductStokViewModel model)
        {
            if (ModelState.IsValid)
            {
                if (urunDal.PutProduct(model))
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
        public IHttpActionResult DeleteProduct(int id)
        {
            if (id > 0)
            {
                if (urunDal.Delete(id))
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
