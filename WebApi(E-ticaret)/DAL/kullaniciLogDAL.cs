using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class kullaniciLogDAL
    {
        Models.Entities db = new Models.Entities();

        public Models.logKullanici GetLogKullanici()
        {
            return db.logKullanici.FirstOrDefault(x => x.logKullaniciID == 1);
        }

        public bool PutUserLog()
        {
            var log = db.logKullanici.FirstOrDefault(x => x.logKullaniciID == 1);
            if (log != null)
            {
                log.gunlukKayit++;
                log.haftalikKayit++;
                log.toplamKayit++;
                db.SaveChanges();

                return true;
            }
            else
            {
                return false;
            }
        }

        public bool PutLogDate()
        {
            var log = db.logKullanici.FirstOrDefault(x => x.logKullaniciID == 1);
            if (log != null && log.gunlukTarih!=null)
            {
                if ((log.gunlukTarih.Value.DayOfYear / 7) != ((DateTime.Now.DayOfYear) / 7))
                {
                    log.haftalikTarih++;
                    log.haftalikKayit = 0;
                    db.SaveChanges();
                }
                else if (log.gunlukTarih.Value.Day != DateTime.Now.Day)
                {
                    log.gunlukTarih = DateTime.Now;
                    log.gunlukKayit = 0;
                    db.SaveChanges();
                }
                return true;
            }
            else
            {
                return false;
            }

        }
    }
}
