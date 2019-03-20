using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class kategoriDAL
    {
        Models.Entities db = new Models.Entities();
        public List<Models.Kategori> GetAllCategory()
        {
            var model = db.Kategori.ToList();
            if (model != null)
            {
                return model;
            }
            else
            {
                return null;
            }

        }
        public Models.Kategori GetCategoryByid(int id)
        {
            var model = db.Kategori.FirstOrDefault(x => x.kategoriID == id);
            if (model != null)
            {
                return model;
            }
            else
            {
                return null;
            }
        }


        public bool PostCategory(Models.Kategori model)
        {
            db.Kategori.Add(model);
            db.SaveChanges();
            return true;

        }
        public bool PutCategory (Models.Kategori model)
        {

            var test = db.Kategori.FirstOrDefault(m => m.kategoriID == model.kategoriID);
            if (test != null)
            {
                test.kategori1 = model.kategori1;
                db.SaveChanges();
                return true;
            }
            else
            {
                return false;
            }

        }
        public bool Delete(int id)
        {
            var model = db.Kategori.FirstOrDefault(m => m.kategoriID == id);
            if (model != null)
            {
                db.Kategori.Remove(model);
                db.SaveChanges();
                return true;
            }
            else
            {
                return false;
            }
        } 
    }
}
