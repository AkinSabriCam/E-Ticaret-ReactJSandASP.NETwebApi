import React, { Component } from "react";
import cartt from './img/shopping_cart.jpg';
import "./styles/cart_responsive.css";
import "./styles/cart_styles.css";
import Cookies from 'js-cookie';
import{Redirect} from 'react-router';

export class Siparis extends Component{
    constructor(props){
        super(props);
        this.state={
            SiparisProducts:[]
        }
    }

    componentDidMount(){
            if(Cookies.get("Login")=="true"){
                console.log("loginnnnnn")  
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
                    
                    return(<Redirect to="/Homepage"></Redirect>)
                }
                

            }
    }

    render(){
        let Urunler=this.state.SiparisProducts.map((sepet,ind)=>{
            return(
                <div class="cart_container">
                <div class="cart_title"></div>
                <div class="cart_items">
                    <ul class="cart_list">
                        <li class="cart_item clearfix">
                            <div class="cart_item_image"><img src={cartt} alt=""/></div>
                            <div class="cart_item_info d-flex flex-md-row flex-column justify-content-between">
                                <div class="cart_item_name cart_info_col">
                                    <div class="cart_item_title">Name</div>
                                    <div class="cart_item_text">{sepet.ad}</div>
                                </div>
                                <div class="cart_item_color cart_info_col">
                                    <div class="cart_item_title">Color</div>
                                    <div class="cart_item_text"><span style={{backgroundColor:999999}}></span>Silver</div>
                                </div>
                                <div class="cart_item_quantity cart_info_col">
                                    <div class="cart_item_title">Quantity</div>
                                    <div class="cart_item_text">{sepet.adet}</div>
                                </div>
                                <div class="cart_item_price cart_info_col">
                                    <div class="cart_item_title">Price</div>
                                    <div class="cart_item_text">{sepet.fiyat}</div>
                                </div>
                                <div class="cart_item_total cart_info_col">
                                    <div class="cart_item_title">Total</div>
                                    <div class="cart_item_text">{sepet.toplamFiyat}</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="order_total">
                <div class="order_total_content text-md-right">
                    <div class="order_total_title">Order Total:</div>
                    <div class="order_total_amount">$2000</div>
                </div>
                </div>

                <div class="cart_buttons">
                <button type="button" class="button cart_button_checkout">Buy</button>						    
                </div>
                <br></br>
            <br></br>
            
            <br></br>
            <br></br>
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
            </div>
            </div>
        )
    }

}
export default Siparis;