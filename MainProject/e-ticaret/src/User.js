import React, { Component } from "react";
import {Favourite} from "./Favourite";
import {Link,Redirect} from 'react-router-dom';
import Cookies from 'js-cookie';


export class User extends Component{
  constructor(props){
    super(props);
    this.state={
      User:{}
    }
  }
  componentDidMount(){
    fetch("http://localhost:50040/api/Users/GetUserById/1007")
        .then(data=>data.json())
        .then(result=>{
            this.setState({User:result});
        })
        .catch(err=>{console.log(err)});
      }
    render(){
        return(
              <nav class="main_nav" style={{marginTop:-1}} >
                <div class="row">
                  <div class="col">
                    <div class="main_nav_content d-flex flex-row">
                      <div class="cat_menu_container">
                        <div class="cat_menu_title d-flex flex-row align-items-center justify-content-start ">
                          <div class="cat_burger"><span></span><span></span><span></span></div>
                          <div class="cat_menu_text">{this.state.User.ad} {this.state.User.soyad}</div>
                        </div>

                        <ul class="cat_menu">
                          <li><a> <Link to={{pathname:"/Siparislerim"}}> Siparişlerim </Link>  <i class="fas fa-chevron-right ml-auto"></i></a></li>
                          <li><a>  <Link to={{pathname:"/PersonalDetail"}}> Üyelik Bilgilerim </Link><i class="fas fa-chevron-right"></i></a></li>
                          <li><a>  <Link to={{pathname:"/KullaniciGuncelle"}}> Bilgilerimi Düzenle </Link><i class="fas fa-chevron-right"></i></a></li>
                          <li><a>  <Link to={{pathname:"/Favourite"}}> Favorilerim </Link><i class="fas fa-chevron-right"></i></a></li>
                          <li><a>  <Link to={{pathname:"/"}}> Çıkış Yap </Link><i class="fas fa-chevron-right"></i></a></li>
                        </ul>
                        
                      </div>
                    </div>
                  </div>
                </div>
            </nav>
        )
    }
}
export default User;