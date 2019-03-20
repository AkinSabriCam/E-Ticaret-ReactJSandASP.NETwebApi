using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class sepetDAL
    {
        Models.Entities db = new Models.Entities();
        public List<Models.SepettekiUrunler> GetAllSepetforVisitor(int sepetId)
        {
            var Products = db.SepettekiUrunler.Where(x => x.sepetID == sepetId).ToList();
            if (Products.Count != 0)
            {
                return Products;
            }
            else
            {
                return null;
            }

        }
        public List<Models.SepettekiUrunler> GetAllSepetforUser(int kullaniciId)
        {
            var sepet = db.Sepet.FirstOrDefault(x => x.kullaniciID == kullaniciId);
            if (sepet != null)
            {
                var Products = db.SepettekiUrunler.Where(x => x.sepetID == sepet.sepetID).ToList();

                if (Products.Count != 0)
                {
                    return Products;
                }
                else
                {
                    return null;
                }
            }
            else
            {
                return null;
            }
        }

        public int PostProductintoSepetforVisitor(Models.SepettekiUrunler model)
        {
            // burada sepet oluşturulacaktır
            var sepet = new Models.Sepet();
            sepet.siparisVerildiMi = false;
            db.Sepet.Add(sepet);
            db.SaveChanges();

            model.sepetID = sepet.sepetID;
            db.SepettekiUrunler.Add(model);
            db.SaveChanges();

            return sepet.sepetID;// burada ziyaretçi sepetin Id'sini yolluyoruz ziyaretçi bunu kullanacak(siparişte)
        }

        public void PostProductintoSepetforUser(ViewModels.UserSepettekiUrunlerViewModel model)
        {
            // burada kullanıcıId üzerinden bir sepet olup olmadığı kontrol edilecek yoksa oluşturulacaktır.
            var sepet = db.Sepet.FirstOrDefault(x => x.kullaniciID == model.kullaniciID);
            if (sepet != null)
            {   // kullanıcıya ait bir sepet varsa burada işlem yapılacaktır.

                var product = db.Urun.FirstOrDefault(x => x.urunID == model.urunID);

                var SepettekiUrunler = new Models.SepettekiUrunler();
                SepettekiUrunler.adet = model.adet;
                SepettekiUrunler.sepetID = sepet.sepetID;
                SepettekiUrunler.adet = model.adet;
                SepettekiUrunler.urunID = model.urunID;
                SepettekiUrunler.toplamFiyat = product.fiyat * model.adet;
                db.SepettekiUrunler.Add(SepettekiUrunler);
                db.SaveChanges();

            }
            else
            {
                // burada bu kullanıcıya ait sepet olmadığından sepet oluşturulacaktır
                var NewSepet = new Models.Sepet();
                NewSepet.kullaniciID = model.kullaniciID;
                NewSepet.siparisVerildiMi = false;
                db.Sepet.Add(NewSepet);
                db.SaveChanges();

                var product = db.Urun.FirstOrDefault(x => x.urunID == model.urunID);
                var sepettekiUrun = new Models.SepettekiUrunler();
                sepettekiUrun.adet = model.adet;
                sepettekiUrun.sepetID = NewSepet.sepetID;
                sepettekiUrun.urunID = model.urunID;
                sepettekiUrun.toplamFiyat = model.adet * product.urunID;
                db.SepettekiUrunler.Add(sepettekiUrun);
                db.SaveChanges();
            }
            
        }
        
    }
}
