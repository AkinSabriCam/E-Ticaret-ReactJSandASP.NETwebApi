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
        public IHttpActionResult GetAllProvince()
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
        public IHttpActionResult GetProvinceById(int id)
        {
            if (id > 0)
            {
                var model = iletisimDal.GetProvinceByid(id);
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
        public IHttpActionResult PostProvince(DAL.Models.Il model)
        {
            if (ModelState.IsValid)
            {
                iletisimDal.PostProvince(model);
                return Ok();
            }
            else
            {
                return BadRequest();
            }

        }

        [HttpPut]
        public IHttpActionResult PutProvince(DAL.Models.Il model)
        {
            if (ModelState.IsValid)
            {
                if (iletisimDal.PutProvince(model))
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
        public IHttpActionResult DeleteProvince(int id)
        {
            if (id > 0)
            {
                if (iletisimDal.DeleteProvince(id))
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

        [HttpPost]
        public IHttpActionResult PostCity(DAL.Models.Ilce model)
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
        public IHttpActionResult PutCity(DAL.Models.Ilce model)
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

    }
}
