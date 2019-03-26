using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class kategoriDAL
    {
        Models.Entities db = new Models.Entities();
        public List<ViewModels.KategoriAltKategoriViewModel> GetAllCategory()
        {
            var model = db.Kategori.ToList();
            var Kategoriler = new List<ViewModels.KategoriAltKategoriViewModel>();
            if (model != null)
            { 
                foreach(var kat in model)
                {
                    var kategori = new ViewModels.KategoriAltKategoriViewModel();
                    
                    foreach (var altkat in kat.AltKategori)
                    {
                        var altkategori = new ViewModels.AltKategoriModelView();
                        altkategori.altkategori = altkat.altKategori1;
                        altkategori.altkategoriId = altkat.altKategoriID;
                        kategori.AltKategoriler.Add(altkategori);
 
                    }

                    kategori.KategoriAdi = kat.kategori1;
                    Kategoriler.Add(kategori);
                }
                return Kategoriler;
            }
            else
            {
                return null;
            }

        }
        public Models.Kategori GetCategoryByid(int id)
        {
            var model = db.Kategori.FirstOrDefault(x => x.kategoriID == id);
            if (model != null)
            {
                return model;
            }
            else
            {
                return null;
            }
        }


        public bool PostCategory(Models.Kategori model)
        {
            db.Kategori.Add(model);
            db.SaveChanges();
            return true;

        }
        public bool PutCategory (Models.Kategori model)
        {

            var test = db.Kategori.FirstOrDefault(m => m.kategoriID == model.kategoriID);
            if (test != null)
            {
                test.kategori1 = model.kategori1;
                db.SaveChanges();
                return true;
            }
            else
            {
                return false;
            }

        }
        public bool Delete(int id)
        {
            var model = db.Kategori.FirstOrDefault(m => m.kategoriID == id);
            if (model != null)
            {
                db.Kategori.Remove(model);
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
