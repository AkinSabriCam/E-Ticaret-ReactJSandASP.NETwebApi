import React, { Component } from "react";
import cartt from './img/shopping_cart.jpg';
import "./styles/cart_responsive.css";
import "./styles/cart_styles.css";
import Cookies from 'js-cookie';
import { Router } from "react-router";
import{Redirect} from 'react-router';

export class Siparis extends React.Component{
    constructor(props){
        super(props);
        this.state={
            SiparisProducts:[]
        }
        this.UrunKaldir=this.UrunKaldir.bind(this);
        this.SiparisTamamla=this.SiparisTamamla.bind(this);
    }

    componentDidMount(){
            if(Cookies.get("Login")=="true"){
                console.log("login")  
                // kullanıcı login olmuştur
                fetch('http://localhost:50040/api/Sepet/GetAllProductsinSepetforUser/'+Cookies.get("kullaniciID"))
                .then(data=>data.json())
                .then(result=>{this.setState({SiparisProducts:result})
                console.log(this.state.SiparisProducts)})
                .catch(err=>console.log(err))
            }
            else{
                if(Cookies.get("sepetid")!=null){
                    console.log("sepetid:"+Cookies.get("sepetid"))
                    fetch('http://localhost:50040/api/Sepet/GetAllProductsinSepetforVisitor/'+Cookies.get("sepetid"))
                    .then(data=>data.json())
                    .then(result=>{this.setState({SiparisProducts:result})
                    console.log(this.state.SiparisProducts)})
                    .catch(err=>console.log(err))
                }
                else{
                    console.log("SEPET BOŞŞ"); 
                }
                

            }
    }

    UrunKaldir(sepetID,sepettekiUrunID){
        console.log(sepetID+"  "+sepettekiUrunID);
        fetch(`http://localhost:50040/api/Sepet/DeleteProductinSepet?sepetid=${sepetID}&uruninsepetid=${sepettekiUrunID}`,{
            method:"DELETE"
        })
        .then(function(){
               let count= Cookies.get("ProductCount");
               count=count-1;
               Cookies.set("ProductCount",count);  
               console.log(count);
               if(count!=0){
                window.location = '/Siparis';
               }else{
                Cookies.remove("sepetid")
                //window.location = '/';
               }  
        })
        .catch(err=>console.log(err));            
    }
    
    SiparisTamamla(){
        if(Cookies.get("Login")==null &&Cookies.get("token")==null){
           return (window.location="/Login")
        }
        else{
            fetch(`http://localhost:50040/api/Sepet/SiparisTamamla?kullaniciId=${Cookies.set("kullaniciID")}`,{
                method:"Put",
                headers:{
                    Authorization:"bearer "+Cookies.get("token"),
                    Accept:"application/json"
                }
            })
            .then((result)=>{
                if(result.ok){
                    console.log("siparis tamamlandı"+result.status)
                    Cookies.remove("ProductCount");
                    Cookies.remove("sepetid");
                 }
                 else{
                     console.log("kullanici yetkili değil..");
                 }
            })
            .catch((err)=>{console.log("error:"+ err)}); 
        }

    }
    
    render(){
        let ToplamSiparisTutari=0
        let Urunler=this.state.SiparisProducts.map((sepet,ind)=>{
            {ToplamSiparisTutari+=sepet.toplamFiyat}
            return( 
            <div>
             <div class="cart_container">
                <div class="cart_items">
                    <ul class="cart_list">
                        <li class="cart_item clearfix">
                            <div class="cart_item_image"><img src={cartt} alt=""/></div>
                            <div class="cart_item_info d-flex flex-md-row flex-column justify-content-between">
                                <div class="cart_item_name cart_info_col">
                                    <div class="cart_item_title">Ürün</div>
                                    <div class="cart_item_text">{sepet.ad}</div>
                                </div>
                                <div class="cart_item_quantity cart_info_col">
                                    <div class="cart_item_title">Adet</div>
                                    <div class="cart_item_text">{sepet.adet}</div>
                                </div>
                                <div class="cart_item_price cart_info_col">
                                    <div class="cart_item_title">Birim Fiyatı</div>
                                    <div class="cart_item_text">{sepet.fiyat}</div>
                                </div>
                                <div class="cart_item_total cart_info_col">
                                    <div class="cart_item_title">Toplam Fiyatı</div>
                                    <div class="cart_item_text">{sepet.toplamFiyat}</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    < a className="btn btn-danger" onClick={()=>this.UrunKaldir(sepet.sepetID,sepet.sepettekiUrunID)}>Ürünü Kaldır</a>
                </div>
            </div>

            </div>
            )
         })
        return(
            <div class="cart_section">
                <div class="container">
                    <div class="row">
                    <div class="col-lg-10 offset-lg-1">
                        {Urunler}
                    </div>
                </div>
                <div class="order_total">
                <div class="order_total_content text-md-right">
                    <div class="order_total_title">Toplam Tutar:</div>
                    <div class="order_total_amount">{ToplamSiparisTutari} ₺</div>
                </div>
            </div>
            <div class="cart_buttons">
                <button type="button" class="button cart_button_checkout" onClick={this.SiparisTamamla}>Siparişi Tamamla</button>						    
                </div>
            </div>
            
            </div>
        )
        
    }
}

export default Siparis;