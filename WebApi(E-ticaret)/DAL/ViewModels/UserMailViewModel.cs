using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.ViewModels
{
    public class UserMailViewModel
    {
        public int kullaniciID { get; set; }
        public string email { get; set; }
        public string mesaj { get; set; }
    }
}
