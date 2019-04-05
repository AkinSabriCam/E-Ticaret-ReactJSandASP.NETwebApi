using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class kullaniciDAL
    {
        Models.Entities db = new Models.Entities();

        public List<ViewModels.UserViewModel> GetAllusers()
        {
            var model = db.Kullanici.ToList();
            var KullaniciList = new List<ViewModels.UserViewModel>();
            if (model.Count> 0)
            {
                foreach(var user in model)
                {
                    var User = new ViewModels.UserViewModel();
                    User.ad = user.KullaniciBilgileri.ad;
                    User.soyad = user.KullaniciBilgileri.soyad;
                    User.kullaniciAdi = user.kullaniciAdi;
                    User.kayitTarihi = user.kayitTarihi;
                    User.kullaniciID = user.kullaniciID;
                    KullaniciList.Add(User);
                }
                return KullaniciList;
            }
            else
            {
                return null;
            }
        }

        public Models.Kullanici GetusersByid(int id)
        {
            var model = db.Kullanici.FirstOrDefault(x=>x.kullaniciID==id);
            if (model != null)
            {
                return model;
            }
            else
            {
                return null;
            }
        }
        public Models.Kullanici GetuserId(string username,string password)
        {
            var model = db.Kullanici.FirstOrDefault(x => x.kullaniciAdi == username &&x.sifre==password);
            if (model != null)
            {
                return model;
            }
            else
            {
                return null;
            }
        }
        public bool PostUser(ViewModels.UserViewModel model)
        {
            var User = new Models.Kullanici();
            User.kullaniciAdi = model.kullaniciAdi;
            User.rolID = model.rolID;
            User.sifre = model.sifre;
            User.kayitTarihi = model.kayitTarihi;
            User.email = model.email;

            db.Kullanici.Add(User);
            db.SaveChanges();

            

            var UserContact = new Models.Iletisim();
            UserContact.detay = model.Detay;
            UserContact.ilID = model.ilID;
            UserContact.ilceID = model.ilceID;

            db.Iletisim.Add(UserContact);
            db.SaveChanges();

            //var iletisim = db.Iletisim.FirstOrDefault(x => x.ilceID == model.ilceID && x.ilID == model.ilID);
            var UserInformation = new Models.KullaniciBilgileri();
            UserInformation.ad = model.ad;
            UserInformation.iletisimID = UserContact.iletisimID;
            UserInformation.kullaniciID = User.kullaniciID;
            UserInformation.soyad = model.soyad;
            UserInformation.cinsiyet = model.cinsiyet;
            db.KullaniciBilgileri.Add(UserInformation);
            db.SaveChanges();
            return true;
            
        }
        public bool PutUser(ViewModels.UserViewModel model)
        {
            var testUser = db.Kullanici.FirstOrDefault(x => x.kullaniciID == model.kullaniciID);
            if (testUser != null)
            {

                testUser.kullaniciAdi = model.kullaniciAdi;
                testUser.kayitTarihi = model.kayitTarihi;
                testUser.email = model.email;
                testUser.sifre = model.sifre;

                db.SaveChanges();

                var userInformation = db.KullaniciBilgileri.FirstOrDefault(x => x.kullaniciID == testUser.kullaniciID);
                userInformation.ad = model.ad;
                userInformation.cinsiyet = model.cinsiyet;
                userInformation.soyad = model.soyad;
                testUser.KullaniciBilgileri.Iletisim.ilID = model.ilID;
                testUser.KullaniciBilgileri.Iletisim.ilceID = model.ilceID;
                testUser.KullaniciBilgileri.Iletisim.detay = model.Detay;


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
            var test = db.Kullanici.FirstOrDefault(x => x.kullaniciID == id);
            if (test != null)
            {
                db.Kullanici.Remove(test);
                db.SaveChanges();
                return true;
            }
            else
            {
                return false;
            }
        }

        public Models.Kullanici ChechUser(string username,string password)
        {
            var user = db.Kullanici.FirstOrDefault(x => x.kullaniciAdi == username);

            if (user != null)
            {
                if (user.sifre == password)
                {
                    return user;
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
    }
}
