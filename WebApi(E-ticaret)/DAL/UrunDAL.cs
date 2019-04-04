using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class UrunDAL
    {
        static Random rnd = new Random();
        Models.Entities db = new Models.Entities();
        public List<ViewModels.ProductStokViewModel> GetAllProduct()
        {
            var model = db.Urun.ToList();
            var Products = new List<ViewModels.ProductStokViewModel>();
            if (model != null)
            {   
                foreach(var urun in model)
                {
                    var product = new ViewModels.ProductStokViewModel();
                    product.ad = urun.ad;
                    product.adet = urun.Stok.adet;
                    product.altKategoriID = urun.altKategoriID;
                    product.altkategori = urun.AltKategori.altKategori1;
                    product.kategori = urun.AltKategori.Kategori.kategori1;
                    product.eklenmeTarihi = urun.eklenmeTarihi;
                    product.fiyat = urun.fiyat;
                    product.imagePath = urun.imagePath;
                    product.markaID = urun.markaID;
                    product.satinAlinmaDurumu = urun.satinAlinmaDurumu;
                    product.stokID = urun.stokID;
                    product.urunID = urun.urunID;

                    Products.Add(product);
                }

                return Products;
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

        //ProductsByCategory
        public List<ViewModels.ProductStokViewModel> GetProductsByCategory(int id)
        {
            var AltKategori= db.AltKategori.FirstOrDefault(x => x.altKategoriID == id);
            var Products = new List<ViewModels.ProductStokViewModel>();
            if (AltKategori.Urun.Count>0)
            {
                foreach(var model in AltKategori.Urun.ToList()) { 
                
                    var product = new ViewModels.ProductStokViewModel();
                    product.ad = model.ad;
                    product.adet = model.Stok.adet;
                    product.altKategoriID = model.altKategoriID;
                    product.eklenmeTarihi = model.eklenmeTarihi;
                    product.fiyat = model.fiyat;
                    product.altkategori = AltKategori.altKategori1;
                    product.imagePath = model.imagePath;
                    product.markaID = model.markaID;
                    product.marka = model.Marka.marka1;
                    product.satinAlinmaDurumu = model.satinAlinmaDurumu;
                    product.stokID = model.stokID;
                    product.urunID = model.urunID;
                    Products.Add(product);
                }
                return Products;
            }
            else
            {
                return null;
            }

        }

        public List<ViewModels.ProductStokViewModel> GetProductsOrderByBestSellers(int id)
        {
            var bestSellers = db.FN_OrderByBestSallers3().Where(x => x.altKategoriID == id).ToList();
            var Products = new List<ViewModels.ProductStokViewModel>();
            if (bestSellers.Count > 0)
            {
                foreach (var model in bestSellers)
                {
                    var product = new ViewModels.ProductStokViewModel();
                    product.ad = model.ad;
                    product.adet = model.adet;
                    product.altKategoriID = model.altKategoriID;
                    product.eklenmeTarihi = model.eklenmeTarihi;
                    product.fiyat = model.fiyat;
                    product.altkategori = model.altKategori;
                    product.imagePath = model.imagePath;
                    product.markaID = model.markaID;
                    product.marka = model.marka;
                    product.satinAlinmaDurumu = model.satinAlinmaDurumu;
                    product.stokID = model.stokID;
                    product.urunID = model.urunID;
                    Products.Add(product);
                }
                return Products;
            }
            else
            {
                return null;
            }
        }

        public List<ViewModels.ProductStokViewModel> GetProductsOrderByNameASC(int id)
        {
            var nameAsc = db.FN_OrderByNameASC1().Where(x => x.altKategoriID == id).ToList();
            var Products = new List<ViewModels.ProductStokViewModel>();
            if (nameAsc.Count > 0)
            {
                foreach (var model in nameAsc)
                {
                    var product = new ViewModels.ProductStokViewModel();
                    product.ad = model.ad;
                    product.adet = model.adet;
                    product.altKategoriID = model.altKategoriID;
                    product.eklenmeTarihi = model.eklenmeTarihi;
                    product.fiyat = model.fiyat;
                    product.altkategori = model.altKategori;
                    product.imagePath = model.imagePath;
                    product.markaID = model.markaID;
                    product.marka = model.marka;
                    product.satinAlinmaDurumu = model.satinAlinmaDurumu;
                    product.stokID = model.stokID;
                    product.urunID = model.urunID;
                    Products.Add(product);
                }
                return Products;
            }
            else
            {
                return null;
            }
        }

        public List<ViewModels.ProductStokViewModel> GetProductsOrderByNameDESC(int id)
        {
            var nameDesc = db.FN_OrderByNameDESC1().Where(x => x.altKategoriID == id).ToList();
            var Products = new List<ViewModels.ProductStokViewModel>();
            if (nameDesc.Count > 0)
            {
                foreach (var model in nameDesc)
                {
                    var product = new ViewModels.ProductStokViewModel();
                    product.ad = model.ad;
                    product.adet = model.adet;
                    product.altKategoriID = model.altKategoriID;
                    product.eklenmeTarihi = model.eklenmeTarihi;
                    product.fiyat = model.fiyat;
                    product.altkategori = model.altKategori;
                    product.imagePath = model.imagePath;
                    product.markaID = model.markaID;
                    product.marka = model.marka;
                    product.satinAlinmaDurumu = model.satinAlinmaDurumu;
                    product.stokID = model.stokID;
                    product.urunID = model.urunID;
                    Products.Add(product);
                }
                return Products;
            }
            else
            {
                return null;
            }
        }

        public List<ViewModels.ProductStokViewModel> GetProductsOrderByPriceASC(int id)
        {
            var priceAsc = db.FN_OrderByPriceASC1().Where(x => x.altKategoriID == id).ToList();
            var Products = new List<ViewModels.ProductStokViewModel>();
            if (priceAsc.Count > 0)
            {
                foreach (var model in priceAsc)
                {
                    var product = new ViewModels.ProductStokViewModel();
                    product.ad = model.ad;
                    product.adet = model.adet;
                    product.altKategoriID = model.altKategoriID;
                    product.eklenmeTarihi = model.eklenmeTarihi;
                    product.fiyat = model.fiyat;
                    product.altkategori = model.altKategori;
                    product.imagePath = model.imagePath;
                    product.markaID = model.markaID;
                    product.marka = model.marka;
                    product.satinAlinmaDurumu = model.satinAlinmaDurumu;
                    product.stokID = model.stokID;
                    product.urunID = model.urunID;
                    Products.Add(product);
                }
                return Products;
            }
            else
            {
                return null;
            }
        }

        public List<ViewModels.ProductStokViewModel> GetProductsOrderByPriceDESC(int id)
        {
            var priceDesc = db.FN_OrderByPriceDESC1().Where(x => x.altKategoriID == id).ToList();
            var Products = new List<ViewModels.ProductStokViewModel>();
            if (priceDesc.Count > 0)
            {
                foreach (var model in priceDesc)
                {
                    var product = new ViewModels.ProductStokViewModel();
                    product.ad = model.ad;
                    product.adet = model.adet;
                    product.altKategoriID = model.altKategoriID;
                    product.eklenmeTarihi = model.eklenmeTarihi;
                    product.fiyat = model.fiyat;
                    product.altkategori = model.altKategori;
                    product.imagePath = model.imagePath;
                    product.markaID = model.markaID;
                    product.marka = model.marka;
                    product.satinAlinmaDurumu = model.satinAlinmaDurumu;
                    product.stokID = model.stokID;
                    product.urunID = model.urunID;
                    Products.Add(product);
                }
                return Products;
            }
            else
            {
                return null;
            }
        }

        public List<ViewModels.ProductStokViewModel> GetFilterByPrice(int id, int min, int max)
        {
            if (max < min)
                max = min + 1;

            var filteredProducts = db.Urun.Where(x => x.fiyat >= min && x.fiyat <= max && x.altKategoriID == id).ToList();
            var Products = new List<ViewModels.ProductStokViewModel>();
            if (filteredProducts.Count > 0)
            {
                foreach (var model in filteredProducts)
                {
                    var product = new ViewModels.ProductStokViewModel();
                    product.ad = model.ad;
                    product.adet = model.Stok.adet;
                    product.altKategoriID = model.altKategoriID;
                    product.eklenmeTarihi = model.eklenmeTarihi;
                    product.fiyat = model.fiyat;
                    product.altkategori = model.AltKategori.altKategori1;
                    product.imagePath = model.imagePath;
                    product.markaID = model.markaID;
                    product.marka = model.Marka.marka1;
                    product.satinAlinmaDurumu = model.satinAlinmaDurumu;
                    product.stokID = model.stokID;
                    product.urunID = model.urunID;
                    Products.Add(product);
                }
                return Products;
            }
            else
            {
                return null;
            }
        }



        public List<ViewModels.ProductStokViewModel> GetFilterByBrand(int id, string marka)
        {
            var filteredProducts = db.Urun.Where(x => x.Marka.marka1 == marka && x.altKategoriID == id).ToList();
            var Products = new List<ViewModels.ProductStokViewModel>();
            if (filteredProducts.Count > 0)
            {
                foreach (var model in filteredProducts)
                {

                    var product = new ViewModels.ProductStokViewModel();
                    product.ad = model.ad;
                    product.adet = model.Stok.adet;
                    product.altKategoriID = model.altKategoriID;
                    product.eklenmeTarihi = model.eklenmeTarihi;
                    product.fiyat = model.fiyat;
                    product.altkategori = model.AltKategori.altKategori1;
                    product.imagePath = model.imagePath;
                    product.markaID = model.markaID;
                    product.marka = model.Marka.marka1;
                    product.satinAlinmaDurumu = model.satinAlinmaDurumu;
                    product.stokID = model.stokID;
                    product.urunID = model.urunID;
                    Products.Add(product);
                }
                return Products;
            }
            else
            {
                return null;
            }

        }//endOfProductsByCategory

        //Search
        public List<ViewModels.ProductStokViewModel> GetProductsBySearch(string search)
        {
            var searchResults = db.FN_SearchProduct1(search).ToList();
            var Products = new List<ViewModels.ProductStokViewModel>();
            if (searchResults.Count > 0)
            {
                foreach (var model in searchResults)
                {
                    var product = new ViewModels.ProductStokViewModel();
                    product.ad = model.ad;
                    product.adet = model.adet;
                    product.altKategoriID = model.altKategoriID;
                    product.eklenmeTarihi = model.eklenmeTarihi;
                    product.fiyat = model.fiyat;
                    product.altkategori = model.altKategori;
                    product.imagePath = model.imagePath;
                    product.markaID = model.markaID;
                    product.marka = model.marka;
                    product.satinAlinmaDurumu = model.satinAlinmaDurumu;
                    product.stokID = model.stokID;
                    product.urunID = model.urunID;
                    Products.Add(product);
                }
                return Products;
            }
            else
            {
                return null;
            }
        }

        public List<ViewModels.ProductStokViewModel> GetProductsOrderByBestSellersInSearch(string search)
        {
            var bestSellers = db.FN_OrderByBestSallers2().Where(x => x.ad.Contains(search)).ToList();
            var Products = new List<ViewModels.ProductStokViewModel>();
            if (bestSellers.Count > 0)
            {
                foreach (var model in bestSellers)
                {
                    var product = new ViewModels.ProductStokViewModel();
                    product.ad = model.ad;
                    product.adet = model.adet;
                    product.altKategoriID = model.altKategoriID;
                    product.eklenmeTarihi = model.eklenmeTarihi;
                    product.fiyat = model.fiyat;
                    product.altkategori = model.altKategori;
                    product.imagePath = model.imagePath;
                    product.markaID = model.markaID;
                    product.marka = model.marka;
                    product.satinAlinmaDurumu = model.satinAlinmaDurumu;
                    product.stokID = model.stokID;
                    product.urunID = model.urunID;
                    Products.Add(product);
                }
                return Products;
            }
            else
            {
                return null;
            }
        }

        public List<ViewModels.ProductStokViewModel> GetProductsOrderByNameASCInSearch(string search)
        {
            var nameAsc = db.FN_OrderByNameASC1().Where(x => x.ad.Contains(search)).ToList();
            var Products = new List<ViewModels.ProductStokViewModel>();
            if (nameAsc.Count > 0)
            {
                foreach (var model in nameAsc)
                {
                    var product = new ViewModels.ProductStokViewModel();
                    product.ad = model.ad;
                    product.adet = model.adet;
                    product.altKategoriID = model.altKategoriID;
                    product.eklenmeTarihi = model.eklenmeTarihi;
                    product.fiyat = model.fiyat;
                    product.altkategori = model.altKategori;
                    product.imagePath = model.imagePath;
                    product.markaID = model.markaID;
                    product.marka = model.marka;
                    product.satinAlinmaDurumu = model.satinAlinmaDurumu;
                    product.stokID = model.stokID;
                    product.urunID = model.urunID;
                    Products.Add(product);
                }
                return Products;
            }
            else
            {
                return null;
            }
        }

        public List<ViewModels.ProductStokViewModel> GetProductsOrderByNameDESCInSearch(string search)
        {
            var nameDesc = db.FN_OrderByNameDESC1().Where(x => x.ad.Contains(search)).ToList();
            var Products = new List<ViewModels.ProductStokViewModel>();
            if (nameDesc.Count > 0)
            {
                foreach (var model in nameDesc)
                {
                    var product = new ViewModels.ProductStokViewModel();
                    product.ad = model.ad;
                    product.adet = model.adet;
                    product.altKategoriID = model.altKategoriID;
                    product.eklenmeTarihi = model.eklenmeTarihi;
                    product.fiyat = model.fiyat;
                    product.altkategori = model.altKategori;
                    product.imagePath = model.imagePath;
                    product.markaID = model.markaID;
                    product.marka = model.marka;
                    product.satinAlinmaDurumu = model.satinAlinmaDurumu;
                    product.stokID = model.stokID;
                    product.urunID = model.urunID;
                    Products.Add(product);
                }
                return Products;
            }
            else
            {
                return null;
            }
        }

        public List<ViewModels.ProductStokViewModel> GetProductsOrderByPriceASCInSearch(string search)
        {
            var priceAsc = db.FN_OrderByPriceASC1().Where(x => x.ad.Contains(search)).ToList();
            var Products = new List<ViewModels.ProductStokViewModel>();
            if (priceAsc.Count > 0)
            {
                foreach (var model in priceAsc)
                {
                    var product = new ViewModels.ProductStokViewModel();
                    product.ad = model.ad;
                    product.adet = model.adet;
                    product.altKategoriID = model.altKategoriID;
                    product.eklenmeTarihi = model.eklenmeTarihi;
                    product.fiyat = model.fiyat;
                    product.altkategori = model.altKategori;
                    product.imagePath = model.imagePath;
                    product.markaID = model.markaID;
                    product.marka = model.marka;
                    product.satinAlinmaDurumu = model.satinAlinmaDurumu;
                    product.stokID = model.stokID;
                    product.urunID = model.urunID;
                    Products.Add(product);
                }
                return Products;
            }
            else
            {
                return null;
            }
        }

        public List<ViewModels.ProductStokViewModel> GetProductsOrderByPriceDESCInSearch(string search)
        {
            var priceDesc = db.FN_OrderByPriceDESC1().Where(x => x.ad.Contains(search)).ToList();
            var Products = new List<ViewModels.ProductStokViewModel>();
            if (priceDesc.Count > 0)
            {
                foreach (var model in priceDesc)
                {
                    var product = new ViewModels.ProductStokViewModel();
                    product.ad = model.ad;
                    product.adet = model.adet;
                    product.altKategoriID = model.altKategoriID;
                    product.eklenmeTarihi = model.eklenmeTarihi;
                    product.fiyat = model.fiyat;
                    product.altkategori = model.altKategori;
                    product.imagePath = model.imagePath;
                    product.markaID = model.markaID;
                    product.marka = model.marka;
                    product.satinAlinmaDurumu = model.satinAlinmaDurumu;
                    product.stokID = model.stokID;
                    product.urunID = model.urunID;
                    Products.Add(product);
                }
                return Products;
            }
            else
            {
                return null;
            }
        }

        public List<ViewModels.ProductStokViewModel> GetFilterByPriceInSearch(string search, int min, int max)
        {
            if (max < min)
                max = min + 1;

            var searchResults = db.FN_SearchProduct1(search).ToList();
            var filteredProducts = searchResults.Where(x => x.fiyat >= min && x.fiyat <= max).ToList();
            var Products = new List<ViewModels.ProductStokViewModel>();
            if (filteredProducts.Count > 0)
            {
                foreach (var model in filteredProducts)
                {
                    var product = new ViewModels.ProductStokViewModel();
                    product.ad = model.ad;
                    product.adet = model.adet;
                    product.altKategoriID = model.altKategoriID;
                    product.eklenmeTarihi = model.eklenmeTarihi;
                    product.fiyat = model.fiyat;
                    product.altkategori = model.altKategori;
                    product.imagePath = model.imagePath;
                    product.markaID = model.markaID;
                    product.marka = model.marka;
                    product.satinAlinmaDurumu = model.satinAlinmaDurumu;
                    product.stokID = model.stokID;
                    product.urunID = model.urunID;
                    Products.Add(product);
                }
                return Products;
            }
            else
            {
                return null;
            }
        }

        

        public List<ViewModels.ProductStokViewModel> GetFilterByBrandInSearch(string search, string marka)
        {
            var searchResults = db.FN_SearchProduct1(search).ToList();
            var filteredProducts = searchResults.Where(x => x.marka == marka).ToList();
            var Products = new List<ViewModels.ProductStokViewModel>();
            if (filteredProducts.Count > 0)
            {
                foreach (var model in filteredProducts)
                {

                    var product = new ViewModels.ProductStokViewModel();
                    product.ad = model.ad;
                    product.adet = model.adet;
                    product.altKategoriID = model.altKategoriID;
                    product.eklenmeTarihi = model.eklenmeTarihi;
                    product.fiyat = model.fiyat;
                    product.altkategori = model.altKategori;
                    product.imagePath = model.imagePath;
                    product.markaID = model.markaID;
                    product.marka = model.marka;
                    product.satinAlinmaDurumu = model.satinAlinmaDurumu;
                    product.stokID = model.stokID;
                    product.urunID = model.urunID;
                    Products.Add(product);
                }
                return Products;
            }
            else
            {
                return null;
            }

        }//endOfSearch

        //Ürün Öner
        public ViewModels.ProductStokViewModel SuggestProductToUser(int id)
        {
            var model = db.EnCokEtkilesimAlanAltKategori(id).FirstOrDefault();
            if (model != null)
            {
                var urunler = db.Urun.Where(x => x.altKategoriID == model.altKategoriID).ToList();
                var onerilecekUrun = urunler.OrderBy(x => Guid.NewGuid()).Take(1).ToList();
                var product = new ViewModels.ProductStokViewModel();
                foreach (var urun in onerilecekUrun)
                {
                    product.ad = urun.ad;
                    product.adet = urun.Stok.adet;
                    product.altKategoriID = urun.altKategoriID;
                    product.altkategori = urun.AltKategori.altKategori1;
                    product.kategori = urun.AltKategori.Kategori.kategori1;
                    product.eklenmeTarihi = urun.eklenmeTarihi;
                    product.fiyat = urun.fiyat;
                    product.imagePath = urun.imagePath;
                    product.markaID = urun.markaID;
                    product.marka = urun.Marka.marka1;
                    product.satinAlinmaDurumu = urun.satinAlinmaDurumu;
                    product.stokID = urun.stokID;
                    product.urunID = urun.urunID; 
                }
                return product;
            }
            else return null;
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
            stok.adet = model.adet;
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
            if (test != null && test.satinAlinmaDurumu == false)
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
