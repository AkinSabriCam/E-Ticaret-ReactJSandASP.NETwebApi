using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DAL;

namespace WebApi_E_ticaret_.Controllers
{
    public class FavoriController : ApiController
    {
        favoriDAL favoriDal = new favoriDAL();
        [HttpGet]
        public IHttpActionResult GetAllFavouritesForUser(int id)
        {
            var model = favoriDal.GetAllFavouritesForUser(id);
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
        public IHttpActionResult PostProductIntoFavouriteForUser(DAL.ViewModels.UserFavoridekiUrunViewModel model)
        {
            if (ModelState.IsValid)
            {
                favoriDal.PostProductIntoFavouriteForUser(model);
                return Ok();
            }
            else
            {
                return BadRequest();
            }
        }

        [HttpDelete]
        public IHttpActionResult DeleteProductInFavori(int id)
        {
            if (id > 0)
            {
                if (favoriDal.DeleteProductInFavori(id))
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
