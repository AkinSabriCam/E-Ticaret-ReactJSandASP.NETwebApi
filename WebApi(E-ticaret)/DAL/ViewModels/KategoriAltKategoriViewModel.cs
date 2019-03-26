using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.ViewModels
{
    public class KategoriAltKategoriViewModel
    {
        public string KategoriAdi { get; set; }
        public List<ViewModels.AltKategoriModelView> AltKategoriler;
        public KategoriAltKategoriViewModel()
        {
            this.AltKategoriler = new List<AltKategoriModelView>();
        }
    }
}
