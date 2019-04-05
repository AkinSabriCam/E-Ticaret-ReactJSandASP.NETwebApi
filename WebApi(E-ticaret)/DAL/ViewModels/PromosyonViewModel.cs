using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.ViewModels
{
    public class PromosyonViewModel
    {

        public int kategoriID { get; set; }
        public int urunID { get; set; }

        [Required(ErrorMessage ="Lütfen Promosyon Oranını Giriniz")]
        public int promosyonOrani { get; set; }
    }
}
