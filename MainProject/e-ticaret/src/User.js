import React, { Component } from "react";
import {Favourite} from "./Favourite";
import {Link,Redirect} from 'react-router-dom';


export class User extends Component{
    render(){
        return(
              <nav class="main_nav" style={{marginTop:-1}} >
              <div class="">
                <div class="row ">
                  <div class="col">
                    <div class="main_nav_content d-flex flex-row">
                      <div class="cat_menu_container">
                        <div class="cat_menu_title d-flex flex-row align-items-center justify-content-start ">
                          <div class="cat_burger"><span></span><span></span><span></span></div>
                          <div class="cat_menu_text">Özgür Çakıcı</div>
                        </div>

                        <ul class="cat_menu">
                        
                          <li><a href="#" > <Link to={{pathname:"/User/Siparis"}}> Siparişlerim </Link>  <i class="fas fa-chevron-right ml-auto"></i></a></li>
                          <li><a href="#">  <Link to={{pathname:"/User/PersonalDetail"}}> Üyelik Bilgilerim </Link><i class="fas fa-chevron-right"></i></a></li>
                          <li><a href="#">  <Link to={{pathname:"/User/Favourite"}}> Favorilerim </Link><i class="fas fa-chevron-right"></i></a></li>
                        </ul>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
        )
    }
}
export default User;