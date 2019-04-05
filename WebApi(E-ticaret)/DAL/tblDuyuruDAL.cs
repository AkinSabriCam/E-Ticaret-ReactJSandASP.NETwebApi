using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class tblDuyuruDAL
    {
        Models.Entities db = new Models.Entities();
        
        public Models.Duyuru Get()
        {
            var model = db.Duyuru.FirstOrDefault(x=>x.okunmaDurumu==false);

            if (model!= null)
            {
               return model;
            }
            else
            {
                return null;
            }
        }

        public bool Post(Models.Duyuru model)
        {
            var duyurumodel =new  Models.Duyuru();
            duyurumodel.icerik = model.icerik;
            duyurumodel.okunmaDurumu = false;
            duyurumodel.tarih = DateTime.Now;
            db.Duyuru.Add(duyurumodel);
            db.SaveChanges();
            return true;
            
        }

    }
}
