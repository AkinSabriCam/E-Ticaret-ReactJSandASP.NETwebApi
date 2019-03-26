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
        public List<ViewModels.UserSepettekiUrunlerViewModel> GetAllSepetforVisitor(int sepetId)
        {
            var Products = db.SepettekiUrunler.Where(x => x.sepetID == sepetId).ToList();

            var SepettekiUrunler = new List<ViewModels.UserSepettekiUrunlerViewModel>();
            if (Products.Count != 0)
            {
                foreach (var sepUrun in Products)
                {
                    var sepettekiUrun = new ViewModels.UserSepettekiUrunlerViewModel();
                    sepettekiUrun.ad = sepUrun.Urun.ad;
                    sepettekiUrun.adet = sepUrun.adet;
                    sepettekiUrun.fiyat = sepUrun.Urun.fiyat;
                    sepettekiUrun.toplamFiyat = sepUrun.toplamFiyat;
                    SepettekiUrunler.Add(sepettekiUrun);

                }

                return SepettekiUrunler;
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
                var product = db.Urun.FirstOrDefault(x => x.urunID == model.urunID);
                    model.toplamFiyat = model.adet * product.fiyat;
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
            if (model.sepetID > 0)
            {   // gönderilen modelde sepet Id 0 dan büyük ise kullanıcının ziyaretçi olarak sepeti vardır

                var sepet = db.Sepet.FirstOrDefault(x => x.sepetID == model.sepetID);// bu sepet kullanıcının ziyaretçi olarak oluşturuğu sepettir
                sepet.kullaniciID = model.kullaniciID;
                db.SaveChanges();

                var product2 = db.Urun.FirstOrDefault(x => x.urunID == model.urunID);
                var sepettekiUrun = new Models.SepettekiUrunler();
                sepettekiUrun.adet = model.adet;
                sepettekiUrun.sepetID = model.sepetID;
                sepettekiUrun.urunID = product2.urunID;
                sepettekiUrun.toplamFiyat = model.adet * product2.fiyat;
                db.SepettekiUrunler.Add(sepettekiUrun);
                db.SaveChanges();
                return true;
            }
            else
            {   // kullanıcının ziyaretçi olarak oluşturduğu bir sepet yoktur (ama kullanıcı olarak bir sepeti olabilir)
                // burada kullanıcının sepeti varsa içine eklicez yoksa oluşturucaz
                var sepetler = db.Sepet.Where(x => x.kullaniciID == model.kullaniciID).ToList();
                if (sepetler.Count != 0)
                {  
                    foreach (var sep in sepetler)
                    {

                        if (sep.siparisVerildiMi == false)
                        {
                            var product = db.Urun.FirstOrDefault(x => x.urunID == model.urunID);

                            var SepettekiUrunler = new Models.SepettekiUrunler();
                            SepettekiUrunler.adet = model.adet;
                            SepettekiUrunler.sepetID = sep.sepetID;
                            SepettekiUrunler.adet = model.adet;
                            SepettekiUrunler.urunID = product.urunID;
                            SepettekiUrunler.toplamFiyat = product.fiyat * model.adet;
                            db.SepettekiUrunler.Add(SepettekiUrunler);
                            db.SaveChanges();
                           
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
                    sepettekiUrun1.urunID = product1.urunID;
                    sepettekiUrun1.toplamFiyat = model.adet * product1.fiyat;
                    db.SepettekiUrunler.Add(sepettekiUrun1);
                    db.SaveChanges();
                    
                }
                return true;
            }
            
        }
        public int GetProductCountinSepet(int id)
        {
            var sepet = db.Sepet.FirstOrDefault(x => x.kullaniciID == id);
            if (sepet!=null)
            {
                return sepet.SepettekiUrunler.Count();
            }
            else
            {
                return 0;
            }

                        
            

        }
    }
}
