using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class SiparisSepetLogDAL
    {
        Models.Entities db = new Models.Entities();
        public bool PostSiparisLog(Models.logSepet model)
        {

            db.logSepet.Add(model);
            db.SaveChanges();

            return true;
        }
    }
}
