import React, { Component } from "react";
import cartt from './img/shopping_cart.jpg';
import './css/site.css';
import Cookies from 'js-cookie';
import {Link,Redirect} from 'react-router-dom'
import './css/cart_styles.css'

export class Favourite extends React.Component{

    constructor(props){
        super(props);
        this.state={
            UserFavourites:[]
        }
    }
    componentDidMount(){
        /*if(Cookies.get("Login")=="true"){
            console.log("login")  
            // kullanıcı login olmuştur*/
            fetch('http://localhost:50040/api/Favori/GetAllFavouritesForUser/1007'/*+Cookies.get("kullaniciID")*/)
            .then(data=>data.json())
            .then(result=>{this.setState({UserFavourites:result})
            console.log(this.state.UserFavourites)})
            .catch(err=>console.log(err))
        /*}*/
    }
    FavoriKaldir(favoriID){
        console.log(favoriID);
        fetch(`http://localhost:50040/api/Favori/DeleteProductInFavori?id=${favoriID}`,{
            method:"DELETE"
        })
        .then(function(){
                window.location = '/User/Favourite';
        })
        .catch(err=>console.log(err));            
    }
    render(){
        let Favoriler=this.state.UserFavourites.map((favori,ind)=>{
            if(favori.ad.length>19){
                favori.ad = favori.ad.substring(0, 16) + "...";
            }
        return(
             <div class="cart_container">
                <div class="cart_items">
                    <ul class="cart_list">
                        <li class="cart_item clearfix">
                            <div class="cart_item_image" title="Ürünü ayrıntılı incelemek için tıklayınız.."><Link to={{pathname:"/ProductDetail",state:{productId:favori.urunID}}}><img src={cartt} alt=""/></Link></div>
                            <div class="cart_item_info d-flex flex-md-row flex-column justify-content-between">
                                <div class="cart_item_name cart_item_name">
                                    <div class="cart_item_title">Ürün</div>
                                    <div class="cart_item_text"><Link to={{pathname:"/ProductDetail",state:{productId:favori.urunID}}}>{favori.ad}</Link></div>
                                </div>
                                <div class="cart_item_quantity cart_item">
                                    <div class="cart_item_title">Marka</div>
                                    <div class="cart_item_text">{favori.marka}</div>
                                </div>
                                <div class="cart_item_price cart_item">
                                    <div class="cart_item_title">Birim Fiyatı</div>
                                    <div class="cart_item_text">{favori.fiyat}</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <a style={{marginLeft:750}}className="btn btn-primary" onClick={()=>this.FavoriKaldir(favori.favoriID)}>Favorilerimden Çıkar</a>
            </div>
        )
    })
    return(
        <div>
            <div class="home" style={{height:50}}>
            <div class="home_overlay"></div>
		        <div class="home_content d-flex flex-column align-items-center justify-content-center">
			      <h4 class="home_title">Favorilerim</h4></div>
	          </div>
        <div class="cart_section">
            <div class="container">
                <div class="row">
                <div class="col-lg-10 offset-lg-1">
                    {Favoriler}
                </div>
            </div>
        </div>
        </div>
        </div>
    )
    }
}
export default Favourite;