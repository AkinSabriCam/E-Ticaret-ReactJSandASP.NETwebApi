using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class ziyaretcilogDAL
    {
        Models.Entities db = new Models.Entities();

        public Models.logZiyaret GetLogZiyaret()
        {
            return db.logZiyaret.FirstOrDefault(x => x.logZiyaretID == 2);
        }

        public bool PutClick()
        {
            var log = db.logZiyaret.FirstOrDefault(x => x.logZiyaretID == 2);
            log.gunlukZiyaret++;
            log.haftalikZiyaret++;
            log.toplamZiyaret++;
            db.SaveChanges();

            return true;
        }

        public bool PutDate()
        {
            var log=db.logZiyaret.FirstOrDefault(x => x.logZiyaretID == 2);
            if ((log.gunlukTarih.Value.DayOfYear/7) != ((DateTime.Now.DayOfYear)/7))
            {
                log.haftalikTarih++;
                log.haftalikZiyaret = 0;
                db.SaveChanges();
            }
            else if (log.gunlukTarih.Value.Day != DateTime.Now.Day)
            {
                log.gunlukTarih = DateTime.Now;
                log.gunlukZiyaret = 0;
                db.SaveChanges();
            }
            return true;
        }




    }
}
