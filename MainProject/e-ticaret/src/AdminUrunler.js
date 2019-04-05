import React from 'react'
import { Modal } from 'mdbreact';
import './js/Custom.js';
import  math from 'mathjs';

export class AdminUrunler extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            YeniUrunPage:false,
            yeniUrun:false,
            Products:[],
            productImage:null,
            Kategoriler:[],
            Altkategoriler:[],
            altkategori:false,
            currentPage: 1,
            ProductPerPage:10,
            GuncellePage:false,
            guncelle:false,
            WillUpdatedProduct:{},
            promosyon:false,
            promosyonurunid:0
            
        }
        this.YeniUrun=this.YeniUrun.bind(this);
        this.Close=this.Close.bind(this);
       this.ChangeKategori=this.ChangeKategori.bind(this);
        this.PageButton=this.PageButton.bind(this);
        this.UrunuEkle=this.UrunuEkle.bind(this);
        this.Sil=this.Sil.bind(this);
        this.StokEkle=this.StokEkle.bind(this);
        this.Guncelle=this.Guncelle.bind(this);
        this.Close2=this.Close2.bind(this);
        this.UrunuGuncelle=this.UrunuGuncelle.bind(this);
        this.Promosyon=this.Promosyon.bind(this);
        this.PromosyonEkle=this.PromosyonEkle.bind(this);
        this.PromosyonClose=this.PromosyonClose.bind(this);
    }
    componentDidMount(){
        fetch("http://localhost:50040/api/Urunler/GetAllProducts")
        .then(data=>data.json())
        .then(result=>{this.setState({Products:result})
            console.log(result)})
        .catch(err=>{console.log("Admin için urunler getirilemedi "+err)});
    }
    
    YeniUrun(){
        
       this.setState({YeniUrunPage:true,yeniUrun:true},function(){
        fetch("http://localhost:50040/api/Kategoriler/GetAllSingleKategori")
        .then(data=>data.json())
        .then(result=>{this.setState({Kategoriler:result})})
        .catch(err=>{console.log(err)});

       })
    }
    Close(){
       this.setState({yeniUrun:false,YeniUrunPage:false})
    }
    ChangeKategori(e){
        fetch("http://localhost:50040/api/Kategoriler/GetAltkategoriByKategoriId/"+e.target.value)
        .then(data=>data.json())
        .then(result=>{this.setState({Altkategoriler:result,altkategori:true})})
        .catch(err=>{console.log(err)});
    }
    PageButton(e){
        console.log(e.target.id);
        this.setState({currentPage:e.target.id});
    }
    UrunuEkle(){
        
        let Urun={
            ad:document.getElementById('ad').value,
            adet:document.getElementById('adet').value,
            fiyat:document.getElementById('fiyat').value,
            altKategoriID:document.getElementById('altkategori').value,
            marka:document.getElementById('marka').value
        }

        fetch("http://localhost:50040/api/Urunler/PostProduct",{
            method:"POST",
            body:JSON.stringify(Urun),
            headers:{
             "Content-type":"application/json"
            }
        })
        .then((result)=>{
            if(result.ok){
                this.setState({yeniUrun:false,YeniUrunPage:false})
                fetch("http://localhost:50040/api/Urunler/GetAllProducts")
                    .then(data=>data.json())
                    .then(result=>this.setState({Products:result}))
                    .catch(err=>{console.log(err)});
            }
            else{
                alert("lütfen bilgileri eksik veya doğru birşekilde giriniz");
            }
            })
        .catch(err=>{console.log(err)});

    }
    Sil(urunid){
        fetch("http://localhost:50040/api/Urunler/DeleteProduct/"+urunid,{
            method:"DELETE"
        })
        .then((result)=>{
             if(result.ok){
                fetch("http://localhost:50040/api/Urunler/GetAllProducts")
                    .then(data=>data.json())
                    .then(result=>this.setState({Products:result}))
                    .catch(err=>{console.log(err)});
             } else{
                 alert("Ürün silme işleminde bir problem oluştu !!");
             }
        })
        .catch(err=>{console.log(err)});
    }
    StokEkle(id){
        fetch("http://localhost:50040/api/Urunler/AddCount/"+id)
        .then((result)=>{
            if(result.ok){
                
                fetch("http://localhost:50040/api/Urunler/GetAllProducts")
                    .then(data=>data.json())
                    .then(result=>this.setState({Products:result}))
                    .catch(err=>{console.log(err)});
            }else{
                alert("Stok ekleme işleminde bir problem oluştu !!");
            }
        })
        .catch(err=>{console.log(err)});
    }
    Guncelle(id){
        fetch("http://localhost:50040/api/Urunler/GetProductById/"+id)
        .then(data=>data.json())
        .then(result=>{
            
            this.setState({WillUpdatedProduct:result,GuncellePage:true,guncelle:true},function(){
                fetch("http://localhost:50040/api/Kategoriler/GetAllSingleKategori")
                .then(data=>data.json())
                .then(result=>{this.setState({Kategoriler:result})})
                .catch(err=>{console.log(err)});
            
                })
        })
        .catch(err=>{console.log(err)});

    }
    UrunuGuncelle(urunId){
            let Urun=this.state.WillUpdatedProduct;
            console.log(Urun);
            fetch("http://localhost:50040/api/Urunler/PutProduct",{
                method:"PUT",
                body:JSON.stringify(Urun),
                headers:{
                    "Content-type":"application/json"
                }
            })
            .then(result=>{
                    if(result.ok){
                        this.setState({Guncelle:false,GuncellePage:false},()=>{
                       fetch("http://localhost:50040/api/Urunler/GetAllProducts")
                       .then(data=>data.json())
                       .then(result=>this.setState({Products:result}))
                       .catch(err=>{console.log(err)});
                    })
                    }
                    else{
                        alert("Lütfen Bilgileri uygun veya tam giriniz!!");
                    }
            })
            .catch(err=>{console.log(err)});
            

    }
    Close2(){
        this.setState({guncelle:false,GuncellePage:false})
    }
    Promosyon(id){
        this.setState({promosyonurunid:id,promosyon:true})
    }
    PromosyonEkle(){
        if(document.getElementById("promosyon").value<100 && document.getElementById("promosyon").value>0){
            let Promosyon ={
                promosyonOrani:document.getElementById("promosyon").value,
                urunID:this.state.promosyonurunid
            }
            fetch("http://localhost:50040/api/Urunler/DoPromosyon",{
                method:"put",
                body:JSON.stringify(Promosyon),
                headers:{
                    "Content-type":"application/json"
                }
            })
            .then(result=>{
                    if(result.ok){
                        this.setState({promosyon:false},()=>{
                            fetch("http://localhost:50040/api/Urunler/GetAllProducts")
                            .then(data=>data.json())
                            .then(result=>{this.setState({Products:result})
                            console.log(result)})
                            .catch(err=>{console.log("Admin için urunler getirilemedi "+err)});
                        })
                    }else{
                        alert("Promosyon İşlemi Gerçekleştirilemedi")
                    }
            })
            .catch(err=>alert(err));
        }
        else{
            alert("Lütfen geçerli bir oran giriniz");
        }
    }
    PromosyonClose(){
        this.setState({promosyon:false});
    }
    render(){
        const SonUrunIndeks=this.state.currentPage*10;//Sayfadaki son urun indeksi
        const IlkUrunIndeks=SonUrunIndeks-10;
        const currentProducts = this.state.Products.slice(IlkUrunIndeks,SonUrunIndeks);

        const pageNumbers=[];
        for(let i=0;i < math.ceil(this.state.Products.length / 10); i++){
            pageNumbers.push(i);
        }

        let Butonlar =pageNumbers.map(ind=>{
            return(
                <button className="btn btn-dark" onClick={this.PageButton} id={ind+1}>{ind+1}</button>
            )
        });

        let Kategoriler=this.state.Kategoriler.map((kat,indeks)=>{

            return(
              <option key={indeks} value={kat.kategoriID}>{kat.kategori}</option>
            )
        })
        let Altkategoriler;
        if(this.state.altkategori){
             Altkategoriler=this.state.Altkategoriler.map((kat,indeks)=>{

                return(
                  <option key={indeks} value={kat.altkategoriId}>{kat.altkategori}</option>
                )
            })
        }
        if(this.state.YeniUrunPage){
            return(
                <Modal isOpen={this.state.yeniUrun}>
            <form onSubmit={this.UrunuEkle}>
             <div className="form-group">
            <label>Ürün Adı</label>
            <input type="text" className="form-control"  id="ad"/>
            </div>
            
            <div className="form-group">
            <label>Ürün Adeti</label>
            <input type="text" className="form-control"  id="adet"/>
            </div>

            <div className="form-group">
            <label>Ürün Fiyatı</label>
            <input type="text" className="form-control"  id="fiyat"/>
            </div>

            <div className="form-group">
            <label>Kategori</label>
            <select id="kategori" className="form-control" onClick={this.ChangeKategori}>
                  {Kategoriler} 
            </select>
            
            </div>
            <div className="form-group">
            <label>AltKategori</label>
            <select id="altkategori" className="form-control alt">
            {Altkategoriler}
            </select>
            </div>
            
            <div className="form-group">
            <label>Ürün Markası</label>
            <input type="text" className="form-control"  id="marka"/>
            </div>

            <div className="form-group">
            <button type="button" className="btn btn-dark" onClick={this.UrunuEkle}>Ürünü Ekle</button>
            <button type="button" onClick={this.Close} className="btn btn-dark">KAPAT</button>
            </div>
            </form>
        
        </Modal>
            )
        }
        if(this.state.promosyon){
            return (<Modal isOpen="true">
                <form onSubmit={this.PromosyonEkle}>
                    <div className="form-group">
                        <label>Promosyon Oranı:</label>
                        <input type="text" className="form-control" id="promosyon" placeholder="%"></input>
                    </div>
                    <div className="form-group">
                    <button type="button" className="btn btn-dark" onClick={this.PromosyonEkle}>Promosyon Yap</button>
                    <button type="button" className="btn btn-dark" onClick={this.PromosyonClose}>Kapat</button>
                    </div>
                </form>
            </Modal>)
        }
        if(this.state.GuncellePage){
            return(
                <Modal isOpen={this.state.guncelle}>
            <form onSubmit={this.UrunuEkle}>
             <div className="form-group">
            <label>Ürün Adı</label>
            <input type="text" className="form-control"  id="ad" value={this.state.WillUpdatedProduct.ad}
            onChange={(e) => {let product=this.state.WillUpdatedProduct;product.ad=e.target.value;this.setState({WillUpdatedProduct:product})}}/>
            </div>
            
            <div className="form-group">
            <label>Ürün Adeti</label>
            <input type="text" className="form-control"  id="adet"  value={this.state.WillUpdatedProduct.adet}
             onChange={(e) => {let product=this.state.WillUpdatedProduct;product.adet=e.target.value;this.setState({WillUpdatedProduct:product})}}/>
             
            </div>

            <div className="form-group">
            <label>Ürün Fiyatı</label>
            <input type="text" className="form-control"  id="fiyat" value={this.state.WillUpdatedProduct.fiyat}
             onChange={(e) => {let product=this.state.WillUpdatedProduct;product.fiyat=e.target.value;this.setState({WillUpdatedProduct:product})}}/>
             
            </div>

            <div className="form-group">
            <label>Kategori</label>
            <select id="kategori" className="form-control" onClick={this.ChangeKategori}>
                  {Kategoriler} 
            </select>
            
            </div>
            <div className="form-group">
            <label>AltKategori</label>
            <select id="altkategori" className="form-control alt">
            {Altkategoriler}
            </select>
            </div>
            
            <div className="form-group">
            <label>Ürün Markası</label>
            <input type="text" className="form-control"  id="marka" value={this.state.WillUpdatedProduct.ad}
             onChange={(e) => {let product=this.state.WillUpdatedProduct;product.marka=e.target.value;this.setState({WillUpdatedProduct:product})}}/>
             
            </div>

            <div className="form-group">
            <button type="button" className="btn btn-dark" onClick={()=>this.UrunuGuncelle(this.state.WillUpdatedProduct.urunID)}>Ürünü Güncelle</button>
            <button type="button" onClick={this.Close2} className="btn btn-dark">KAPAT</button>
            </div>
            </form>
        
        </Modal>
            )
        }
        
       let urunler=currentProducts.map((urun,indeks)=>{

                    return(
                        <tr>
                            <td>{urun.ad}</td>
                            <td>{urun.adet}</td>
                            <td>{urun.fiyat}₺</td>
                            <td>{urun.altkategori}</td>
                            <td>{urun.eklenmeTarihi}</td>
                            <td>
                            <a className="btn btn-danger" onClick={()=>this.StokEkle(urun.urunID)}>+</a></td>
                            <td> <a className="btn btn-warning" onClick={()=>this.Promosyon(urun.urunID)}>Promosyon</a></td>
                             <td><a className="btn btn-warning" onClick={()=>this.Guncelle(urun.urunID)}>Güncelle</a></td>
                            <td> <a className="btn btn-warning" onClick={()=>this.Sil(urun.urunID)}>Kaldır</a></td>
                        </tr>
                    )
                
            })
        
    
        return(
            <div className="container">
                <a className="btn btn-success" onClick={this.YeniUrun}>Yeni Ürün Ekle</a>
            <table className="table table-hover">
                <th>Ürün Adı</th>
                <th>Ürün Adet</th>
                <th>Ürün Fiyatı</th>
                <th>Ürün Kategorisi</th>
                <th>Ürün Eklenme Tarihi</th>
                <th></th>
                <th></th>
               <th></th>
               <th></th>
                {urunler}
            </table>
            <div style={{textAlign:"center"}}>
            {Butonlar}
            </div>
            </div>
        )


    }


}