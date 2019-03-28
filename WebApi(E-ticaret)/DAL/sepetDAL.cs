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
                    sepettekiUrun.sepettekiUrunID = sepUrun.sepettekiUrunID;
                    sepettekiUrun.urunID = sepUrun.urunID;
                    sepettekiUrun.sepetID = sepUrun.sepetID;
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
        public List<ViewModels.UserSepettekiUrunlerViewModel> GetAllSepetforUser(int kullaniciId)
      {
            var sepet = db.Sepet.FirstOrDefault(x => x.kullaniciID == kullaniciId && x.siparisVerildiMi == false);
            if (sepet != null )
            {
                if (sepet.SepettekiUrunler.ToList().Count>0)
                {
                    var Products = new List<ViewModels.UserSepettekiUrunlerViewModel>();
                    foreach(var sepettekiurun in sepet.SepettekiUrunler.ToList())
                    {

                        var sepettekiUrun = new ViewModels.UserSepettekiUrunlerViewModel();
                        sepettekiUrun.sepettekiUrunID = sepettekiurun.sepettekiUrunID;
                        sepettekiUrun.sepetID = sepettekiurun.sepetID;
                        sepettekiUrun.urunID = sepettekiurun.urunID;
                        sepettekiUrun.ad = sepettekiurun.Urun.ad;
                        sepettekiUrun.adet = sepettekiurun.adet;
                        sepettekiUrun.fiyat = sepettekiurun.Urun.fiyat;
                        sepettekiUrun.toplamFiyat = sepettekiurun.toplamFiyat;

                        Products.Add(sepettekiUrun);

                    }
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
                product.Stok.adet -= model.adet;
                    model.toplamFiyat = model.adet * product.fiyat;
                    db.SepettekiUrunler.Add(model);
                    db.SaveChanges();
                // var olan sepet id 'sini tekrar geri döndürecektir
                var SepetLogDal = new SiparisSepetLogDAL();
                var logsepet = new Models.logSepet();
                logsepet.adet = model.adet;
                logsepet.urunID = model.urunID;
                SepetLogDal.PostSiparisLog(logsepet);
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
                product.Stok.adet -= model.adet;
                model.toplamFiyat = model.adet * product.fiyat;
                db.SepettekiUrunler.Add(model);
                db.SaveChanges();

                var SepetLogDal = new SiparisSepetLogDAL();
                var logsepet = new Models.logSepet();
                logsepet.adet = model.adet;
                logsepet.urunID = model.urunID;
                SepetLogDal.PostSiparisLog(logsepet);
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
                product2.Stok.adet -= model.adet;
                var sepettekiUrun = new Models.SepettekiUrunler();
                sepettekiUrun.adet = model.adet;
                sepettekiUrun.sepetID = model.sepetID;
                sepettekiUrun.urunID = product2.urunID;
                sepettekiUrun.toplamFiyat = model.adet * product2.fiyat;
                db.SepettekiUrunler.Add(sepettekiUrun);
                db.SaveChanges();
                var SepetLogDal = new SiparisSepetLogDAL();
                var logsepet = new Models.logSepet();
                logsepet.adet = model.adet;
                logsepet.urunID = model.urunID;
                SepetLogDal.PostSiparisLog(logsepet);
                return true;
            }
            else
            {   // kullanıcının ziyaretçi olarak oluşturduğu bir sepet yoktur (ama kullanıcı olarak bir sepeti olabilir)
                // burada kullanıcının sepeti varsa içine eklicez yoksa oluşturucaz
                var sepetler = db.Sepet.Where(x => x.kullaniciID == model.kullaniciID).ToList();
                if (sepetler.Count != 0)
                {
                    var SepetLogDal1 = new SiparisSepetLogDAL();
                    var logsepet1 = new Models.logSepet();
                    foreach (var sep in sepetler)
                    {

                        if (sep.siparisVerildiMi == false)
                        {
                            var product = db.Urun.FirstOrDefault(x => x.urunID == model.urunID);
                             product.Stok.adet -= model.adet;

                            var SepettekiUrunler = new Models.SepettekiUrunler();
                            SepettekiUrunler.adet = model.adet;
                            SepettekiUrunler.sepetID = sep.sepetID;
                            SepettekiUrunler.adet = model.adet;
                            SepettekiUrunler.urunID = product.urunID;
                            SepettekiUrunler.toplamFiyat = product.fiyat * model.adet;
                            db.SepettekiUrunler.Add(SepettekiUrunler);
                            db.SaveChanges();
                            
                            logsepet1.adet = model.adet;
                            logsepet1.urunID = model.urunID;
                            SepetLogDal1.PostSiparisLog(logsepet1);
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
                    product1.Stok.adet -= model.adet;
                    var sepettekiUrun1 = new Models.SepettekiUrunler();
                    sepettekiUrun1.adet = model.adet;
                    sepettekiUrun1.sepetID = NewSepet1.sepetID;
                    sepettekiUrun1.urunID = product1.urunID;
                    sepettekiUrun1.toplamFiyat = model.adet * product1.fiyat;
                    db.SepettekiUrunler.Add(sepettekiUrun1);
                    db.SaveChanges();
                    var SepetLogDal2 = new SiparisSepetLogDAL();
                    var logsepet2 = new Models.logSepet();
                    logsepet2.adet = model.adet;
                    logsepet2.urunID = model.urunID;
                    SepetLogDal2.PostSiparisLog(logsepet2);
                    return true;
                }
                var NewSepet2 = new Models.Sepet();
                NewSepet2.kullaniciID = model.kullaniciID;
                NewSepet2.siparisVerildiMi = false;
                db.Sepet.Add(NewSepet2);
                db.SaveChanges(); 
              

                var product2 = db.Urun.FirstOrDefault(x => x.urunID == model.urunID);
                product2.Stok.adet -= model.adet;
                var sepettekiUrun2 = new Models.SepettekiUrunler();
                sepettekiUrun2.adet = model.adet;
                sepettekiUrun2.sepetID = NewSepet2.sepetID;
                sepettekiUrun2.urunID = product2.urunID;
                sepettekiUrun2.toplamFiyat = model.adet * product2.fiyat;
                db.SepettekiUrunler.Add(sepettekiUrun2);
                db.SaveChanges();

                var SepetLogDal = new SiparisSepetLogDAL();
                var logsepet = new Models.logSepet();
                logsepet.adet = model.adet;
                logsepet.urunID = model.urunID;
                SepetLogDal.PostSiparisLog(logsepet);
                return true;
            }
            
        }
        public int GetProductCountinSepet(int id)
        {
            var sepet = db.Sepet.FirstOrDefault(x => x.kullaniciID == id);
            if (sepet!=null && sepet.siparisVerildiMi==false)
            {
                return sepet.SepettekiUrunler.Count();
            }
            else
            {
                return 0;
            }

        }

        public bool DeleteSepet(int id)
        {
            var model = db.Sepet.FirstOrDefault(x => x.sepetID == id);
            if (model != null)
            {
                foreach(var prod in model.SepettekiUrunler.ToList())
                {
                    prod.Urun.Stok.adet += prod.adet;
                    db.SepettekiUrunler.Remove(prod);
                   
                }
                db.Sepet.Remove(model);
                db.SaveChanges();
                return true;
            }
            else
            {
                return false;
            }

        }

        public bool DeleteProductinSepet(int sepetid,int productid)
        {
            var sepet = db.Sepet.FirstOrDefault(x => x.sepetID == sepetid);
            if (sepet != null)
            {
                var prod = sepet.SepettekiUrunler.FirstOrDefault(x => x.sepettekiUrunID == productid);
                if (prod != null)
                {
                    var Urun = db.Urun.FirstOrDefault(x => x.urunID == prod.urunID);
                    Urun.Stok.adet += prod.adet;

                    db.SepettekiUrunler.Remove(prod);
                    db.SaveChanges();
                    if (sepet.SepettekiUrunler.Count == 0)
                    {
                        db.Sepet.Remove(sepet);
                        db.SaveChanges();
                    }

                    return true;

                }
                else
                {
                    return false;
                }
            }
            else
            {
                return false;
            }
        }

        public bool PutSepettoUser(int sepetid, int kullaniciId)
        {
            var sepet = db.Sepet.FirstOrDefault(x => x.sepetID == sepetid);
            if (sepet != null)
            {
                sepet.kullaniciID = kullaniciId;
                db.SaveChanges();
                return true;
            }
            else
            {
                return false;
            }


            
        }
        public bool SiparisTamamla(int kullaniciId)
        {
            var sepet = db.Sepet.FirstOrDefault(x => x.kullaniciID == kullaniciId && x.siparisVerildiMi == false);
            if(sepet!=null)
            {
                var siparis = new Models.Siparis();
               
                siparis.sepetID = sepet.sepetID;
                db.Siparis.Add(siparis);
                sepet.siparisVerildiMi = true;
                db.SaveChanges();

                var siparisDetay = new Models.SiparisDetay();
                siparisDetay.siparisID = siparis.siparisID;
               
                siparisDetay.siparisTarihi = DateTime.Now;

                decimal siparisTutari = 0;
                foreach (var urun in sepet.SepettekiUrunler.ToList())
                {
                    siparisTutari += (decimal)urun.toplamFiyat;
                }

                siparisDetay.siparisTutari = siparisTutari;
                db.SiparisDetay.Add(siparisDetay);

                db.SaveChanges();
                var satinalinanlogDal = new SatinAlinanLogDAL();
                satinalinanlogDal.PostSatinAlinanLog(sepet.SepettekiUrunler.ToList());
                return true;
            }
            else
            {
                return false;
            }
            
        }
    }
}
