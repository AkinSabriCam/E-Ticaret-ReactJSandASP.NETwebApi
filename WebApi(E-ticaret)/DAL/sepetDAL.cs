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
            var AlreadyExistSepet = db.Sepet.FirstOrDefault(x => x.sepetID == model.sepetID);
            if (AlreadyExistSepet != null && AlreadyExistSepet.siparisVerildiMi != true)
            {   // bu ziyaretçiye ait sepet olduğunda buraya girecektir.
                // ziyaretçinin sepeti var ve siparis verilmemiş ise buraya girecektir.
                    model.toplamFiyat = model.adet * model.Urun.fiyat;
                    db.SepettekiUrunler.Add(model);
                    db.SaveChanges();
                    // var olan sepet id 'sini tekrar geri döndürecektir
                    return (int)model.sepetID;
                
             }
            else
            {   // ziyaretçiye ait sepet yok ise veya var olan sepet siparis verilmiş ise buraya girecektir.
                // burada sepet oluşturulacaktır
                var sepet = new Models.Sepet();
                sepet.siparisVerildiMi = false;
                db.Sepet.Add(sepet);
                db.SaveChanges();

                model.sepetID = sepet.sepetID;
                var product = db.Urun.FirstOrDefault(x => x.urunID == model.urunID);
                model.toplamFiyat = model.adet * product.fiyat;
                db.SepettekiUrunler.Add(model);
                db.SaveChanges();

                return sepet.sepetID;// burada ziyaretçi sepetin Id'sini yolluyoruz ziyaretçi bunu kullanacak(siparişte)
            }
        }

        public bool  PostProductintoSepetforUser(ViewModels.UserSepettekiUrunlerViewModel model)
        {
            
            // burada kullanıcıId üzerinden bir sepet olup olmadığı kontrol edilecek yoksa oluşturulacaktır.
            
            var sepet = db.Sepet.Where(x => x.kullaniciID == model.kullaniciID).ToList();
            if (sepet.Count != 0)
            {
                foreach (var sep in sepet)
                {
                   
                    if (sep.siparisVerildiMi == false)
                    {
                        var product = db.Urun.FirstOrDefault(x => x.urunID == model.urunID);

                        var SepettekiUrunler = new Models.SepettekiUrunler();
                        SepettekiUrunler.adet = model.adet;
                        SepettekiUrunler.sepetID = sep.sepetID;
                        SepettekiUrunler.adet = model.adet;
                        SepettekiUrunler.urunID = model.urunID;
                        SepettekiUrunler.toplamFiyat = product.fiyat * model.adet;
                        db.SepettekiUrunler.Add(SepettekiUrunler);
                        db.SaveChanges();
                        return true;
                    }
                }
            }
            else
            {   // yukarıda kullanıcıya ait tüm sepetleri gezdi ve uygun sepet bulamadıysa kod buradan devam edecektir. 
                // burada bu kullanıcıya ait sepet olmadığından sepet oluşturulacaktır
                var NewSepet1 = new Models.Sepet();
                NewSepet1.kullaniciID = model.kullaniciID;
                NewSepet1.siparisVerildiMi = false;
                db.Sepet.Add(NewSepet1);
                db.SaveChanges();

                var product1 = db.Urun.FirstOrDefault(x => x.urunID == model.urunID);
                var sepettekiUrun1 = new Models.SepettekiUrunler();
                sepettekiUrun1.adet = model.adet;
                sepettekiUrun1.sepetID = NewSepet1.sepetID;
                sepettekiUrun1.urunID = model.urunID;
                sepettekiUrun1.toplamFiyat = model.adet * product1.fiyat;
                db.SepettekiUrunler.Add(sepettekiUrun1);
                db.SaveChanges();
                return true;
            }

                // yukarıda if bloğunda herhangi bir sonuç elde edilmemişse kullanının var olan sepetleri uygun değildir,kod buraya düşecektir.
                // burada yeni bir sepet oluşturulacaktır
                var NewSepet = new Models.Sepet();
                NewSepet.kullaniciID = model.kullaniciID;
                NewSepet.siparisVerildiMi = false;
                db.Sepet.Add(NewSepet);
                db.SaveChanges();

                var product2 = db.Urun.FirstOrDefault(x => x.urunID == model.urunID);
                var sepettekiUrun = new Models.SepettekiUrunler();
                sepettekiUrun.adet = model.adet;
                sepettekiUrun.sepetID = NewSepet.sepetID;
                sepettekiUrun.urunID = model.urunID;
                sepettekiUrun.toplamFiyat = model.adet * product2.urunID;
                db.SepettekiUrunler.Add(sepettekiUrun);
                db.SaveChanges();
                return true;
            }
            
        }
        
    
}
