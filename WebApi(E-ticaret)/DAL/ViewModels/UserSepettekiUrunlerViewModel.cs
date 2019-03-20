using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.ViewModels
{
    public class UserSepettekiUrunlerViewModel
    {
        public int sepettekiUrunID { get; set; }
        public Nullable<int> sepetID { get; set; }
        public Nullable<int> urunID { get; set; }
        public Nullable<int> adet { get; set; }
        public Nullable<decimal> toplamFiyat { get; set; }
        public int kullaniciID { get; set; }
    }
}
