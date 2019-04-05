import React, { Component } from "react";
import cartt from './img/shopping_cart.jpg';
import './css/site.css';
import Cookies from 'js-cookie';
import {Link,Redirect} from 'react-router-dom'

export class Siparislerim extends React.Component{
    constructor(props){
        super(props);
        this.state={
            SiparisProducts:[]
        }
    }
    componentDidMount(){
        /*if(Cookies.get("Login")=="true"){
            console.log("login")  
            // kullanıcı login olmuştur*/
            fetch('http://localhost:50040/api/Sepet/GetAllCompletedProductsinSepetforUser/1007'/*+Cookies.get("kullaniciID")*/)
            .then(data=>data.json())
            .then(result=>{this.setState({SiparisProducts:result})
            console.log(this.state.SiparisProducts)})
            .catch(err=>console.log(err))
        /*}*/
    }
    render(){
        let ToplamSiparisTutari=0
        let Siparisler=this.state.SiparisProducts.map((siparislerim,ind)=>{
            {ToplamSiparisTutari+=siparislerim.toplamFiyat}
            let kisaad=siparislerim.ad;
            if(kisaad.length>25){
                kisaad = kisaad.substring(0, 16) + "...";
            }
        return(
             <div class="cart_container">
                <div class="cart_items">
                    <ul class="cart_list">
                        <li class="cart_item clearfix">
                            <div class="cart_item_image" title="Ürünü ayrıntılı incelemek için tıklayınız.."><Link to={{pathname:"/ProductDetail",state:{productId:siparislerim.urunID}}}><img src={siparislerim.imagePath} alt=""/></Link></div>
                            <div class="cart_item_info d-flex flex-md-row flex-column justify-content-between">
                                <div class="cart_item_name cart_info_col">
                                    <div class="cart_item_title">Ürün</div>
                                    <div class="cart_item_text" title={siparislerim.ad} ><Link to={{pathname:"/ProductDetail",state:{productId:siparislerim.urunID}}}>{kisaad}</Link></div>
                                </div>
                                <div class="cart_item_prices cart_info_col">
                                    <div class="cart_item_title">Ürün Adedi</div>
                                    <div class="cart_item_text">{siparislerim.adet}</div>
                                </div>
                                <div class="cart_item_prices cart_info_col">
                                    <div class="cart_item_title">Birim Fiyatı</div>
                                    <div class="cart_item_text">{siparislerim.fiyat}</div>
                                </div>
                                <div class="cart_item_totals cart_info_col">
                                    <div class="cart_item_title">Toplam Fiyatı</div>
                                    <div class="cart_item_text">{siparislerim.toplamFiyat}</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    })
        return(
            <div>
            <div class="home" style={{height:50}}>
            <div class="home_overlay"></div>
		        <div class="home_content d-flex flex-column align-items-center justify-content-center">
			      <h4 class="home_title">Siparişlerim</h4></div>
	          </div>
            <div class="cart_section">
                <div class="container">
                    <div class="row">
                    <div class="col-lg-10 offset-lg-1">
                        {Siparisler}
                    </div>
                </div>
                <div class="order_total">
                <div class="order_total_content text-md-right">
                    <div class="order_total_title">Toplam Tutar:</div>
                    <div class="order_total_amount">{ToplamSiparisTutari} ₺</div>
                </div>
            </div>
            </div>
            </div>
            </div>
        )
    }

}
export default Siparislerim;