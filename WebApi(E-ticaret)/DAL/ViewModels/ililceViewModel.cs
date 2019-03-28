using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.ViewModels
{
    public class ililceViewModel
    {
        public string IlceAdi { get; set; }
        public List<ViewModels.ilceViewModel> Ilceler;
        public ililceViewModel()
        {
            this.Ilceler = new List<ilceViewModel>();
        }
    }
}
