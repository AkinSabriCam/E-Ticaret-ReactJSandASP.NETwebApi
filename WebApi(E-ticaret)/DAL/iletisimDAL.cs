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
        public ViewModels.CityandDistrictViewModel GetAllCityandDistrict()
        {

            var modelIl = this.GetAllCity();
            var modelIlce = this.GetAllLocation();
            if (modelIl != null)
            {
                var CityandDistrict = new ViewModels.CityandDistrictViewModel();
                CityandDistrict.Iller = modelIl;
                CityandDistrict.Ilceler = modelIlce;
                return CityandDistrict;
            }
            else
            {
                return null;
            }

        }
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
        public Models.Il GetCityByid(int id)
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
        public List<ViewModels.ilceViewModel> GetDistrictsByCityId(int id)
        {
            var Ilceler = db.Ilce.Where(x => x.ilID == id).ToList();
            var IlcelerViewModel = new List<ViewModels.ilceViewModel>();
            if (Ilceler.Count > 0)
            {
                foreach (var ilce in Ilceler)
                {
                    var ilceviewmodel = new ViewModels.ilceViewModel();
                    ilceviewmodel.ilce = ilce.ilce1;
                    ilceviewmodel.ilceID = ilce.ilceID;
                    IlcelerViewModel.Add(ilceviewmodel);
                }
                return IlcelerViewModel;
            }
            else
            {
                return null;
            }
        }

        public bool PostCity(Models.Il model)
        {
            db.Il.Add(model);
            db.SaveChanges();
            return true;

        }
        public bool PutCity(Models.Il model)
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
        public bool DeleteCity(int id)
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
        public List<Models.Ilce> GetAllLocation()
        {

            var model = db.Ilce.ToList();
            if (model != null)
            {
                return model;
            }
            else
            {
                return null;
            }

        }


        public Models.Ilce GetLocationByid(int id)
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
        public bool PostLocation(Models.Ilce model)
        {
            db.Ilce.Add(model);
            db.SaveChanges();
            return true;

        }
        public bool PutLocation(Models.Ilce model)
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
        public bool DeleteLocation(int id)
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
