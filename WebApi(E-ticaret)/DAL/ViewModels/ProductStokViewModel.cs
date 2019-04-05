using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.ViewModels
{
    public class ProductStokViewModel
    {
        public int urunID { get; set; }
        [Required(ErrorMessage ="Lütfen Ad Giriniz")]
        public string ad { get; set; }
        public Nullable<int> markaID { get; set; }
        [Required(ErrorMessage = "Lütfen marka Giriniz")]
        public string marka { get; set; }
        public Nullable<int> altKategoriID { get; set; }
        [Required(ErrorMessage = "Lütfen Fiyat Giriniz")]
        public Nullable<decimal> fiyat { get; set; }
        public Nullable<System.DateTime> eklenmeTarihi { get; set; }
        public string altkategori { get; set; }

        [Required(ErrorMessage = "Lütfen Kategori Bilgisi Giriniz")]
        public int altkategoriID { get; set; }
        public string kategori { get; set; }
        public Nullable<int> stokID { get; set; }
        public Nullable<bool> satinAlinmaDurumu { get; set; }
        public string imagePath { get; set; }

        public Nullable<int> adet { get; set; }
        public string kullaniciAdi { get; set; }
    }
}
