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

        public List<Models.Kullanici> GetAllusers()
        {
            var model = db.Kullanici.ToList();
            if (model != null)
            {
                return model;
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

            var Useril = new Models.Il();
            Useril.il1 = model.il;
       
            db.Il.Add(Useril);
            db.SaveChanges();


            var Userilce = new Models.Ilce();
            Userilce.ilce1 = model.ilce;
            Userilce.ilID = Useril.ilID;

            db.Ilce.Add(Userilce);
            db.SaveChanges();


            var UserContact = new Models.Iletisim();
            UserContact.detay = model.acikAdres;
            UserContact.ilID = Useril.ilID;
            UserContact.ilceID = Userilce.ilceID;

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
        /*public bool PutUser(ViewModels.UserViewModel model)
        {
            var testUser = db.Kullanici.FirstOrDefault(x => x.kullaniciID == model.kullaniciID);
            if (testUser != null)
            {
                var iletisim = db.Iletisim.FirstOrDefault(x => x.ilID == model.ilID && x.ilceID == model.ilceID);
                iletisim.ilce = model.ilce;
                iletisim.il = model.il;
                db.SaveChanges();


                testUser.kullaniciAdi = model.kullaniciAdi;
                testUser.kayitTarihi = model.kayitTarihi;
                testUser.email = model.email;
                testUser.sifre = model.sifre;
                testUser.rolID = model.rolID;
                db.SaveChanges();

                var userInformation = db.KullaniciBilgileri.FirstOrDefault(x => x.kullaniciID == testUser.kullaniciID);
                userInformation.iletisimID = iletisim.iletisimID;
                userInformation.ad = model.ad;
                userInformation.cinsiyet = model.cinsiyet;
                userInformation.soyad = model.soyad;

                db.SaveChanges();
                return true;
            }
            else
            {
                return false;
            }
        }*/
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
