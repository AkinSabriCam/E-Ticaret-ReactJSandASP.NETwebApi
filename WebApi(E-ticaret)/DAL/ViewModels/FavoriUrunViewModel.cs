using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.ViewModels
{
    public class FavoriUrunViewModel
    {
        public int favoriID { get; set; }
        public Nullable<int> urunID { get; set; }
        public string ad { get; set; }
        public decimal fiyat { get; set; }
        public string marka { get; set; }
    }
}
