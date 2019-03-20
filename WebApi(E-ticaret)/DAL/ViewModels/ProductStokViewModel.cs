using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.ViewModels
{
    public class ProductStokViewModel
    {
        public int urunID { get; set; }
        public string ad { get; set; }
        public Nullable<int> markaID { get; set; }
        public Nullable<int> altKategoriID { get; set; }
        public Nullable<decimal> fiyat { get; set; }
        public Nullable<System.DateTime> eklenmeTarihi { get; set; }
        public Nullable<int> stokID { get; set; }
        public Nullable<bool> satinAlinmaDurumu { get; set; }
        public string imagePath { get; set; }

        public Nullable<int> adet { get; set; }
    }
}
