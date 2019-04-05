using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL.Models;

namespace DAL.ViewModels
{
    public class SepettekiUrunViewModel
    {
        public int sepettekiUrunID { get; set; }
        public Nullable<int> sepetID { get; set; }
        public Nullable<int> urunID { get; set; }

        public string ad { get; set; }
        public decimal fiyat { get; set; }
        public string imagePath { get; set; }
        public Nullable<int> adet { get; set; }
        public Nullable<decimal> toplamFiyat { get; set; }
    }
     
}
