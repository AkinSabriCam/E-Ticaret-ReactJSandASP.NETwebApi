import React, { Component } from "react";
import "./styles/cart_responsive.css";
import "./styles/cart_styles.css";
import Cookies from 'js-cookie';
import "./css/site.css";


export class PersonalDetail extends React.Component{
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

        fetch("http://localhost:50040/api/Iletisim/GetAllCity")
        .then(data=>data.json())
        .then(result=>{
            this.setState({Iller:result.Iller});
            this.setState({Ilceler:result.Ilceler});
        })
        .catch(err=>{console.log(err)});
    } 

    render(){
        return(
          <div>
            <div class="home" style={{height:50}}>
            <div class="home_overlay"></div>
		        <div class="home_content d-flex flex-column align-items-center justify-content-center">
			      <h4 class="home_title">Üyelik Bilgilerim</h4></div>
	          </div>
            <div class="cart_section" style={{marginTop:-100}}>
              <div class="row">
              <div class="col-lg-10 offset-lg-1">
                  <div class="cart_container">
                      <div class="cart_items">
                          <ul class="cart_list">
                              <li class="cart_item clearfix">
                                  <div class="cart_item_info d-flex flex-md-row flex-column justify-content-between">

            <div class="container" style={{marginRight:150}}>
            <form class="form-horizontal" role="form">
            <div class="row">
            <div class="col-md-7 ">
            <div class="panel panel-default">
              <div class="panel-heading"></div>
              <div class="panel-body">
                <div class="box box-info">
                        <div class="box-body">
                                <div class="col-md-4">
                                <div  align="center"> <img alt="User Pic" src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg" id="profile-image1" class="img-circle img-responsive"/> </div>
                                <br></br>
                                </div>
                                <div class="col-md-8">
                                <h4>{this.state.User.ad} {this.state.User.soyad}</h4>
                                </div>
                                <div class="clearfix"></div>
                                <hr style={{margin:10}}/>
                           
                      </div>
                        <ul >
                          <li><strong>Kullanıcı Adı: </strong><a>{this.state.User.kullaniciAdi}</a></li>
                          <li><strong>Şifre:</strong><a>{this.state.User.sifre}</a></li>
                          <li><strong>E-Mail:</strong><a>{this.state.User.email}</a></li>
                          <li><strong>İl:  </strong><a> {this.state.User.ilAdi}</a></li>
                          <li><strong>İlçe:</strong><a> {this.state.User.ilceAdi}</a></li>
                          <li><strong>Açık Adres:</strong><a> {this.state.User.acikAdres}</a></li>
                        </ul>
                    </div>  
                </div> 
                </div>
            </div>     
           </div>
          </form>
         </div>
         </div>
                    </li>
                    </ul>
                    </div>
                    </div>
                    </div>
                  </div>
                  </div>
        </div>
                                  


        )
    }
}
