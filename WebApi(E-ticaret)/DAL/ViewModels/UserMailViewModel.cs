using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.ViewModels
{
    public class UserMailViewModel
    {
        public string kullaniciAdi { get; set; }
        public string ad { get; set; }
        public string soyad { get; set; }
        public string email { get; set; }
        public string mesaj { get; set; }
    }
}
