using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class iletisimDAL
    {
        Models.Entities db = new Models.Entities();
        public List<Models.Il> GetAllCity()
        {

            var model = db.Il.ToList();
            if (model != null)
            {
                return model;
            }
            else
            {
                return null;
            }

        }
        public Models.Il GetProvinceByid(int id)
        {
            var model = db.Il.FirstOrDefault(x => x.ilID == id);
            if (model != null)
            {
                return model;
            }
            else
            {
                return null;
            }
        }
        public bool PostProvince(Models.Il model)
        {
            db.Il.Add(model);
            db.SaveChanges();
            return true;

        }
        public bool PutProvince(Models.Il model)
        {

            var test = db.Il.FirstOrDefault(m => m.ilID == model.ilID);
            if (test != null)
            {
                test.il1 = model.il1;
                db.SaveChanges();
                return true;
            }
            else
            {
                return false;
            }

        }
        public bool DeleteProvince(int id)
        {
            var model = db.Il.FirstOrDefault(m => m.ilID == id);
            if (model != null)
            {
                db.Il.Remove(model);
                db.SaveChanges();
                return true;
            }
            else
            {
                return false;
            }
        }


        
        public Models.Ilce GetCityByid(int id)
        {
            var model = db.Ilce.FirstOrDefault(x => x.ilceID == id);
            if (model != null)
            {
                return model;
            }
            else
            {
                return null;
            }
        }
        public bool PostCity(Models.Ilce model)
        {
            db.Ilce.Add(model);
            db.SaveChanges();
            return true;

        }
        public bool PutCity(Models.Ilce model)
        {

            var test = db.Ilce.FirstOrDefault(m => m.ilceID == model.ilceID);
            if (test != null)
            {
                test.ilce1 = model.ilce1;
                db.SaveChanges();
                return true;
            }
            else
            {
                return false;
            }

        }
        public bool DeleteCity(int id)
        {
            var model = db.Ilce.FirstOrDefault(m => m.ilceID == id);
            if (model != null)
            {
                db.Ilce.Remove(model);
                db.SaveChanges();
                return true;
            }
            else
            {
                return false;
            }
        }

    }
}
