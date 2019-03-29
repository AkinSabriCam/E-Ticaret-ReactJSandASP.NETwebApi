using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class SatinAlinanLogDAL
    {
        public void PostSatinAlinanLog(List<Models.SepettekiUrunler> model)
        {
            var db = new Models.Entities();
            foreach (var sepettekiUrun in model)
            {
                var logsatinalinan = new Models.logSatinAlinan();
                logsatinalinan.adet = sepettekiUrun.adet;
                logsatinalinan.kategoriID = sepettekiUrun.Urun.AltKategori.kategoriID;
                logsatinalinan.urunID = sepettekiUrun.urunID;
                db.logSatinAlinan.Add(logsatinalinan);
            }
            db.SaveChanges();
        }
    }
}
