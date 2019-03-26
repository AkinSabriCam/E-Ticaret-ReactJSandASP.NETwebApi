import React, { Component } from "react";
import cartt from './img/shopping_cart.jpg';
import './css/site.css';
export class Favourite extends Component{
    render(){
        return(
            <div>
            <div class="home" style={{height:50}}>
		    
		    <div class="home_overlay"></div>
		    <div class="home_content d-flex flex-column align-items-center justify-content-center">
			<h4 class="home_title">Favorilerim</h4>
		    </div>
	        </div>
            <div class="cart_section" style={{marginTop:-100}} >
                <div class="container">
                    <div class="row">
                    <div class="col-lg-10 offset-lg-1">
                        <div class="cart_container">
                            <div class="cart_title"></div>
                            <div class="cart_items">
                                <ul class="cart_list">
                                    <li class="cart_item clearfix">
                                        <div class="cart_item_image"><img src={cartt} alt=""/></div>
                                        <div class="cart_item_info d-flex flex-md-row flex-column justify-content-between">
                                            <div class="cart_item_name cart_info_col">
                                                <div class="cart_item_title">Name</div>
                                                <div class="cart_item_text">MacBook Air 13</div>
                                            </div>
                                            <div class="cart_item_color cart_info_col">
                                                <div class="cart_item_title">Color</div>
                                                <div class="cart_item_text"><span style={{backgroundColor:999999}}></span>Silver</div>
                                            </div>
                                            <div class="cart_item_quantity cart_info_col">
                                                <div class="cart_item_title">Quantity</div>
                                                <div class="cart_item_text">1</div>
                                            </div>
                                            <div class="cart_item_price cart_info_col">
                                                <div class="cart_item_title">Price</div>
                                                <div class="cart_item_text">$2000</div>
                                            </div>
                                            <div class="cart_item_total cart_info_col">
                                                <div class="cart_item_title">Total</div>
                                                <div class="cart_item_text">$2000</div>
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
                            <button type="button" class="button cart_button_checkout">Remove</button>						    
                            </div>
            
                        </div>
                        <br></br>
                        <br></br>
                        <div class="cart_container">
                            <div class="cart_title"></div>
                            <div class="cart_items">
                                <ul class="cart_list">
                                    <li class="cart_item clearfix">
                                        <div class="cart_item_image"><img src={cartt} alt=""/></div>
                                        <div class="cart_item_info d-flex flex-md-row flex-column justify-content-between">
                                            <div class="cart_item_name cart_info_col">
                                                <div class="cart_item_title">Name</div>
                                                <div class="cart_item_text">MacBook Air 13</div>
                                            </div>
                                            <div class="cart_item_color cart_info_col">
                                                <div class="cart_item_title">Color</div>
                                                <div class="cart_item_text"><span style={{backgroundColor:999999}}></span>Silver</div>
                                            </div>
                                            <div class="cart_item_quantity cart_info_col">
                                                <div class="cart_item_title">Quantity</div>
                                                <div class="cart_item_text">1</div>
                                            </div>
                                            <div class="cart_item_price cart_info_col">
                                                <div class="cart_item_title">Price</div>
                                                <div class="cart_item_text">$2000</div>
                                            </div>
                                            <div class="cart_item_total cart_info_col">
                                                <div class="cart_item_title">Total</div>
                                                <div class="cart_item_text">$2000</div>
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
                            <button type="button" class="button cart_button_checkout">Remove</button>						    
                            </div>
            
                        </div>
                        <br></br>
                        <br></br>
                        <div class="cart_container">
                            <div class="cart_title"></div>
                            <div class="cart_items">
                                <ul class="cart_list">
                                    <li class="cart_item clearfix">
                                        <div class="cart_item_image"><img src={cartt} alt=""/></div>
                                        <div class="cart_item_info d-flex flex-md-row flex-column justify-content-between">
                                            <div class="cart_item_name cart_info_col">
                                                <div class="cart_item_title">Name</div>
                                                <div class="cart_item_text">MacBook Air 13</div>
                                            </div>
                                            <div class="cart_item_color cart_info_col">
                                                <div class="cart_item_title">Color</div>
                                                <div class="cart_item_text"><span style={{backgroundColor:999999}}></span>Silver</div>
                                            </div>
                                            <div class="cart_item_quantity cart_info_col">
                                                <div class="cart_item_title">Quantity</div>
                                                <div class="cart_item_text">1</div>
                                            </div>
                                            <div class="cart_item_price cart_info_col">
                                                <div class="cart_item_title">Price</div>
                                                <div class="cart_item_text">$2000</div>
                                            </div>
                                            <div class="cart_item_total cart_info_col">
                                                <div class="cart_item_title">Total</div>
                                                <div class="cart_item_text">$2000</div>
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
                            <button type="button" class="button cart_button_checkout">Remove</button>						    
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
export default Favourite;