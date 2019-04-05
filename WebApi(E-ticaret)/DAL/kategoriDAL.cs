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
        public List<ViewModels.KategoriViewModel> GetAllSingleKategori()
        {
            var model = db.Kategori.ToList();
            var Kategoriler = new List<ViewModels.KategoriViewModel>();
            foreach(var kat in model)
            {
                var kategori = new ViewModels.KategoriViewModel();
                kategori.kategori = kat.kategori1;
                kategori.kategoriID = kat.kategoriID;
                Kategoriler.Add(kategori);
            }
            return Kategoriler;

        }
        public List<ViewModels.AltKategoriModelView>GetAltkategoriByKategoriId(int id)
        {
            var model = db.AltKategori.Where(x => x.kategoriID == id);
            var Altkategoriler = new List<ViewModels.AltKategoriModelView>();
            foreach(var kat in model)
            {
                var altkategori = new ViewModels.AltKategoriModelView();
                altkategori.altkategoriId = kat.altKategoriID;
                altkategori.altkategori = kat.altKategori1;
                Altkategoriler.Add(altkategori);
            }
            return Altkategoriler;
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
        public bool PostAltKategori(ViewModels.AltKategoriModelView model)
        {
            var altkategori = new Models.AltKategori();
            var kategori = db.Kategori.FirstOrDefault(x => x.kategoriID == model.kategoriID);
            if (kategori != null)
            {
                altkategori.altKategori1 = model.altkategori;
                altkategori.kategoriID = model.kategoriID;
                db.AltKategori.Add(altkategori);
                db.SaveChanges();
                return true;

            }
            else
            {
                return false;
            }
            
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
