﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class UrunDAL
    {
        Models.Entities db = new Models.Entities();
        public List<Models.Urun> GetAllProduct()
        {
            var model = db.Urun.ToList();
            if (model != null)
            {
                return model;
            }
            else
            {
                return null;
            }
        }

        public Models.Urun GetProductById(int id)
        {
               var model = db.Urun.FirstOrDefault(m => m.urunID == id);
                if (model != null)
                {
                    return model;
                }
                else
                {
                    return null;
                }
                
        }
        public bool PostProductAlreadyExist(ViewModels.ProductStokViewModel model)
        {
             var stok = db.Stok.FirstOrDefault(x => x.stokID == model.stokID);
            if (stok != null)
            {
                stok.adet += model.adet;
                db.SaveChanges();
                return true;
            }
            else
            {
                return false;
            }
            
        }

         public bool PostProduct(ViewModels.ProductStokViewModel model)
         {
            var stok = new Models.Stok();
            stok.adet =  model.adet;
            db.Stok.Add(stok);
            db.SaveChanges();

            var Product = new Models.Urun();

            Product.markaID = model.markaID;
            Product.imagePath = model.imagePath;
            Product.ad = model.ad;
            Product.altKategoriID = model.altKategoriID;
            Product.eklenmeTarihi = model.eklenmeTarihi;
            Product.fiyat = model.fiyat;
            Product.stokID = stok.stokID;
            Product.satinAlinmaDurumu = false;

            db.Urun.Add(Product);
            db.SaveChanges();

            return true;
         }

        public bool PutProduct(ViewModels.ProductStokViewModel model)
        {
            var test = db.Urun.FirstOrDefault(m => m.urunID == model.urunID);
            if (test != null)
            {
                test.ad = model.ad;
                test.altKategoriID = model.altKategoriID;
                test.fiyat = model.fiyat;
                test.imagePath = model.imagePath;
                test.markaID = model.markaID;
                test.eklenmeTarihi = model.eklenmeTarihi;
                test.Stok.adet = model.adet;
                if (model.adet <= 0)
                {
                    test.satinAlinmaDurumu = true;
                }

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
            var test = db.Urun.FirstOrDefault(m => m.urunID == id);
            if (test != null && test.satinAlinmaDurumu==false)
            {
                test.Stok.adet--;
                if (test.Stok.adet == 0)
                {
                    test.satinAlinmaDurumu = true;
                }
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