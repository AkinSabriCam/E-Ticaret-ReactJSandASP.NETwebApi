import React from 'react'
import './css/productDetail.css'
import { number } from 'prop-types';
import Cookies from 'js-cookie';



export class ProductDetail extends React.Component{
    constructor(){
        super();
        this.state={
            Product:{},
            prodid:0,
            sepetId:0,
            sepettekiUrun:0
        }
        this.SepeteEkle=this.SepeteEkle.bind(this);
    }
        
        
    componentDidMount(){
     
        const {productId} = this.props.location.state;
        console.log(productId);
       fetch("http://localhost:50040/api/Urunler/GetProductById/"+productId).then(data=>data.json())
       .then(result=>{this.setState({Product:result}); console.log(result)})
       .catch(error=>console.log( "Error :"+error))
    }
    SepeteEkle(urunID){
       
        var urunadet=document.getElementById("adet").value;
        if(!isNaN(urunadet))
        {   //adet number bir değişken ise buraya girecektir
            if(urunadet<=(this.state.Product.Stok && this.state.Product.Stok.adet)){
                    // girilen adet değeri stok adetinden az veya eşit ise buraya girecektir
                    console.log("girilen adet makuldur");
                    if(Cookies.get("Login")==null){
                        let urun={
                        adet:urunadet,
                        urunID:this.state.Product.urunID,
                        sepetID:Cookies.get("sepetid")
                    }
                    fetch("http://localhost:50040/api/Sepet/PostProductForVisitor",
                    {
                        method:"POST",
                        body:JSON.stringify(urun),
                        headers:{
                            "Content-type":"application/json"
                        }
                    }).then(data=>data.json())
                    .then(result=>{
                        this.setState({sepetId:result})
                        let urunsayisi=Cookies.get("ProductCount");
                        if(urunsayisi==0 || urunsayisi=="" || urunsayisi==null){
                            urunsayisi=0;
                        }
                        urunsayisi=parseInt(urunsayisi)+1;
                        Cookies.set("ProductCount",urunsayisi);
                        
                        let tenMinutes = new Date(new Date().getTime() + 10 * 60 * 1000);
                        Cookies.set("sepetid",result,{
                            expires:tenMinutes
                        });    
                        
                       
                    })
                    .catch(error=>console.log("errorr"));
                    }
                    else if(Cookies.get("Login")=="true"){
                        let urun={
                            adet:urunadet,
                            urunID:this.state.Product.urunID,
                            sepetID:Cookies.get("sepetid"),
                            kullaniciID:1
                            }
                        
                        console.log("user sepete ürün eklemek istiyor")
                            // bir kullanıcı önceden ziyaretçi olarak sepet oluşturmamış ise buraya girecektir.
                            // bu kullanıcıya ait bir sepet var ama siparis verilmiş ise yeni sepet oluşturulacaktır
                            // bu kullanıcıya ait bir sepet ziyaretçi olarak mevcut ise 
                            fetch("http://localhost:50040/api/Sepet/PostProductForUser",
                            {
                                method:"POST",
                                body:JSON.stringify(urun),
                                headers:{
                                    "Content-type":"application/json"
                                }
                            })
                            .then(()=>{
                                    let urunsayisi=Cookies.get("ProductCount");
                                    if(urunsayisi==0 || urunsayisi=="" || urunsayisi==null){
                                        urunsayisi=0;
                                    }
                                    urunsayisi=parseInt(urunsayisi)+1
                                    Cookies.set("ProductCount",urunsayisi)
                                    window.location = '/ProductDetail';
                            }).catch((err)=>{console.log("err")})
                          
                    }
                    else{
                        console.log("login cookie de bir problem var !");
                    }
            }
            else{
                // girilen adet stoktan fazla ise hata vermelidir yani buraya girecektir.
                console.log("girilen adet stok adetinden fazladır");
            }
        }
        else
        {   //adet number değil ise buraya girececktir
            console.log("LÜTFEN ADET KISMINI SAYI OLACAK ŞEKİLDE GİRİNİZ");
        }
    }
    render(){
        return(
            <div>            
                <div class="container">
                    <div class="card">
                        <div class="container-fliud">
                            <div class="wrapper row">
                                <div class="preview col-md-6">
                                    <div class="preview-pic tab-content">
                                        <div class="tab-pane active" id="pic-1"><img class="card-img-top"  src="http://placehold.it/1200x800" alt="" /></div>
                                    </div>
                                </div>
                                <div class="details col-md-6">
                                    <h3 class="product-title">{this.state.Product.ad}</h3>
                                    <div class="rating">
                                        <div class="stars">
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star"></span>
                                            <span class="fa fa-star"></span>
                                        </div>
                                        <span class="review-no">
                                        <h3>
                                        {this.state.Product.Marka  && this.state.Product.Marka.marka1}
                                        </h3>
                                        </span>
                                    </div>
                                    <p class="product-description">41 reviews</p>
                                    <p class="product-description">Kalan Adet: <b>{this.state.Product.Stok  && this.state.Product.Stok.adet}</b></p>
                                    <p class="product-description">Adet Giriniz:
                                    <input type="text" name="adet" id="adet"></input>
                                    </p>
                                    <h4 class="price">Güncel Fiyat: <span>{this.state.Product.fiyat}₺</span></h4>
                                    <div class="action">
                                        <button class="add-to-cart btn btn-outline-danger" type="button" onClick={()=>{this.SepeteEkle(this.state.Product.urunID)}}>sepete ekle</button>
                                        <button class="like btn btn-default" type="button"><span class="fa fa-heart"></span></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>   
        )
    }
}
export default ProductDetail;