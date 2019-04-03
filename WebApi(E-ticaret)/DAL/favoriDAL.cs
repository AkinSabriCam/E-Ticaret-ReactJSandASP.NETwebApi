using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class favoriDAL
    {
        Models.Entities db = new Models.Entities();
        public List<ViewModels.FavoriUrunViewModel> GetAllFavouritesForUser(int kullaniciId)
        {
            var favoriler = db.Favoriler.Where(x => x.kullaniciID == kullaniciId).ToList(); //Burada Sıkıntı vardı(ibo :D)
            if (favoriler.Count > 0)
            {
                var ProductList = new List<ViewModels.FavoriUrunViewModel>();
                foreach (var favori in favoriler)
                {
                    var prod = new ViewModels.FavoriUrunViewModel();
                    prod.favoriID = favori.favoriID;
                    prod.ad = favori.Urun.ad;
                    prod.fiyat = (decimal)favori.Urun.fiyat;
                    prod.marka = favori.Urun.Marka.marka1;
                    prod.urunID = favori.urunID;
                    ProductList.Add(prod);
                }
                return ProductList;
            }
            else
            {
                return null;
            }
        }

        public bool PostProductIntoFavouriteForUser(ViewModels.UserFavoridekiUrunViewModel model)
        {
            if (model != null)
            {
                var NewFavori = new Models.Favoriler();
                NewFavori.kullaniciID = model.kullaniciID;
                NewFavori.urunID = model.urunID;
                //NewFavori.favoriID = model.favoriID;

                db.Favoriler.Add(NewFavori);
                db.SaveChanges();
                return true;

            }
            else
                return false;

        }
        public bool DeleteProductInFavori(int favoriId)
        {
            var model = db.Favoriler.FirstOrDefault(x => x.favoriID == favoriId);
            if (model != null)
            {
                db.Favoriler.Remove(model);
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
