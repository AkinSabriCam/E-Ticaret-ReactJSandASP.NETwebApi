using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.ViewModels
{
    public class UserViewModel
    {
        public int kullaniciID { get; set; } 
        public string kullaniciAdi { get; set; }
        public string sifre { get; set; } 
        public string email { get; set; }
        public Nullable<int> rolID { get; set; } 
        public Nullable<System.DateTime> kayitTarihi { get; set; } 


        public string ad { get; set; } 
        public string soyad { get; set; } 
        public Nullable<bool> cinsiyet { get; set; }

        public int ilID { get; set; }
        public string ilAdi { get; set; }
        public int ilceID { get; set; }
        public string ilceAdi { get; set; }
        public string acikAdres { get; set; }
    }
}
