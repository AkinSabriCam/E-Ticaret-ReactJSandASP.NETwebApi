using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DAL;

namespace WebApi_E_ticaret_.Controllers
{
    public class IletisimController : ApiController
    {
        DAL.iletisimDAL iletisimDal = new iletisimDAL();
        [HttpGet]
        public IHttpActionResult GetAllCity()
        {
            var model = iletisimDal.GetAllCityandDistrict();
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
        public IHttpActionResult GetCityById(int id)
        {
            if (id > 0)
            {
                var model = iletisimDal.GetCityByid(id);
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

        [HttpGet]
        public IHttpActionResult GetDistrictsByCityId(int id)
        {
            if (id > 0)
            {
                var model=iletisimDal.GetDistrictsByCityId(id);
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
        public IHttpActionResult PostCity(DAL.Models.Il model)
        {
            if (ModelState.IsValid)
            {
                iletisimDal.PostCity(model);
                return Ok();
            }
            else
            {
                return BadRequest();
            }

        }

        [HttpPut]
        public IHttpActionResult PutCity(DAL.Models.Il model)
        {
            if (ModelState.IsValid)
            {
                if (iletisimDal.PutCity(model))
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
        public IHttpActionResult DeleteCity(int id)
        {
            if (id > 0)
            {
                if (iletisimDal.DeleteCity(id))
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
        public IHttpActionResult GetAllLocation()
        {
            var model = iletisimDal.GetAllLocation();
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
        public IHttpActionResult GetLocationById(int id)
        {
            if (id > 0)
            {
                var model = iletisimDal.GetLocationByid(id);
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
        public IHttpActionResult PostLocaiton(DAL.Models.Ilce model)
        {
            if (ModelState.IsValid)
            {
                iletisimDal.PostLocation(model);
                return Ok();
            }
            else
            {
                return BadRequest();
            }

        }

        [HttpPut]
        public IHttpActionResult PutLocation(DAL.Models.Ilce model)
        {
            if (ModelState.IsValid)
            {
                if (iletisimDal.PutLocation(model))
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
        public IHttpActionResult DeleteLocation(int id)
        {
            if (id > 0)
            {
                if (iletisimDal.DeleteLocation(id))
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
