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
        DAL.UrunDAL urunDal = new DAL.UrunDAL();

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

        //ProductsByCategory
        [HttpGet]
        public IHttpActionResult GetProductsByCategory(int id)
        {
            if (id > 0)
            {
                var model = urunDal.GetProductsByCategory(id);
                if (model.Count > 0)
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

        [HttpGet]
        public IHttpActionResult GetProductsOrderByBestSellers(int id)
        {
            if (id > 0)
            {
                var model = urunDal.GetProductsOrderByBestSellers(id);
                if (model.Count > 0) return Ok(model);
                else return NotFound();
            }
            else return BadRequest();
        }

        [HttpGet]
        public IHttpActionResult GetProductsByNameASC(int id)
        {
            if (id > 0)
            {
                var model = urunDal.GetProductsOrderByNameASC(id);
                if (model.Count > 0) return Ok(model);
                else return NotFound();
            }
            else return BadRequest();
        }

        [HttpGet]
        public IHttpActionResult GetProductsByNameDESC(int id)
        {
            if (id > 0)
            {
                var model = urunDal.GetProductsOrderByNameDESC(id);
                if (model.Count > 0) return Ok(model);
                else return NotFound();
            }
            else return BadRequest();
        }
        [HttpGet]
        public IHttpActionResult AddCount(int id)
        {
            if (id > 0)
            {
                if (urunDal.AddCount(id))
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
        [HttpGet]
        public IHttpActionResult GetProductsByPriceASC(int id)
        {
            if (id > 0)
            {
                var model = urunDal.GetProductsOrderByPriceASC(id);
                if (model.Count > 0) return Ok(model);
                else return NotFound();
            }
            else return BadRequest();
        }

        [HttpGet]
        public IHttpActionResult GetProductsByPriceDESC(int id)
        {
            if (id > 0)
            {
                var model = urunDal.GetProductsOrderByPriceDESC(id);
                if (model.Count > 0) return Ok(model);
                else return NotFound();
            }
            else return BadRequest();
        }

        [HttpGet]
        public IHttpActionResult GetFilterByPrice(int id, int min, int max)
        {
            if (id > 0)
            {
                var model = urunDal.GetFilterByPrice(id, min, max);
                if (model.Count > 0) return Ok(model);
                else return NotFound();
            }
            else return BadRequest();
        }

        [HttpGet]
        public IHttpActionResult GetFilterByBrand(int id, string marka)
        {
            if (id > 0)
            {
                var model = urunDal.GetFilterByBrand(id, marka);
                if (model.Count > 0) return Ok(model);
                else return NotFound();
            }
            else return BadRequest();
        }//endOfProductsByCategory

        //Search
        [HttpGet]
        public IHttpActionResult GetProductsBySearch(string search)
        {
            if (search != "")
            {
                var model = urunDal.GetProductsBySearch(search);
                if (model.Count > 0)
                    return Ok(model);
                else
                    return NotFound();
            }
            else
                return BadRequest();
        }

        [HttpGet]
        public IHttpActionResult GetProductsByBestSellersInSearch(string search)
        {
            if (search != null)
            {
                var model = urunDal.GetProductsOrderByBestSellersInSearch(search);
                if (model.Count > 0) return Ok(model);
                else return NotFound();
            }
            else return BadRequest();
        }
        [HttpGet]
        public IHttpActionResult GetAllSellerProducts()
        {
            var model = urunDal.GetAllSellerProduts();
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
        public IHttpActionResult GetSellerProductsByUserId(int id)
        {
            var model = urunDal.GetSellerProductsByUserId(id);
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
        public IHttpActionResult GetFiveBestSellerProduts()
        {
            var model = urunDal.GetFiveBestSellerProduts();
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
        public IHttpActionResult GetProductsByNameASCInSearch(string search)
        {
            if (search != null)
            {
                var model = urunDal.GetProductsOrderByNameASCInSearch(search);
                if (model.Count > 0) return Ok(model);
                else return NotFound();
            }
            else return BadRequest();
        }

        [HttpGet]
        public IHttpActionResult GetProductsByNameDESCInSearch(string search)
        {
            if (search != null)
            {
                var model = urunDal.GetProductsOrderByNameDESCInSearch(search);
                if (model.Count > 0) return Ok(model);
                else return NotFound();
            }
            else return BadRequest();
        }

        [HttpGet]
        public IHttpActionResult GetProductsByPriceASCInSearch(string search)
        {
            if (search != null)
            {
                var model = urunDal.GetProductsOrderByPriceASCInSearch(search);
                if (model.Count > 0) return Ok(model);
                else return NotFound();
            }
            else return BadRequest();
        }

        [HttpGet]
        public IHttpActionResult GetProductsByPriceDESCInSearch(string search)
        {
            if (search != null)
            {
                var model = urunDal.GetProductsOrderByPriceDESCInSearch(search);
                if (model.Count > 0) return Ok(model);
                else return NotFound();
            }
            else return BadRequest();
        }

        [HttpGet]
        public IHttpActionResult GetFilterByPriceInSearch(string search, int min, int max)
        {
            if (search != null)
            {
                var model = urunDal.GetFilterByPriceInSearch(search, min, max);
                if (model.Count > 0) return Ok(model);
                else return NotFound();
            }
            else return BadRequest();
        }

        [HttpGet]
        public IHttpActionResult GetFilterByBrandInSearch(string search, string marka)
        {
            if (search != null)
            {
                var model = urunDal.GetFilterByBrandInSearch(search, marka);
                if (model.Count > 0) return Ok(model);
                else return NotFound();
            }
            else return BadRequest();
        }//endOfSearch


        //Ürün Öner
        [HttpGet]
        public IHttpActionResult SuggestProductToUser(int id)
        {
            if (id > 0)
            {
                var model = urunDal.SuggestProductToUser(id);
                if (model != null) return Ok(model);
                else return NotFound();
            }
            else return BadRequest();
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
        
        [HttpPut]
        public IHttpActionResult DoPromosyon(DAL.ViewModels.PromosyonViewModel model)
        {

            if (ModelState.IsValid)
            {
                if (urunDal.DoPromosyon(model))
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
        public IHttpActionResult DoPromosyonForCategory(DAL.ViewModels.PromosyonViewModel model)
        {

            if (ModelState.IsValid)
            {
                if (urunDal.DoPromosyonForCategory(model))
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
