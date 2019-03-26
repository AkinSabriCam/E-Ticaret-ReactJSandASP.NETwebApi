import React, { Component } from "react";
import "./styles/cart_responsive.css";
import "./styles/cart_styles.css";
import Cookies from 'js-cookie';


export class PersonalDetail extends React.Component{
  constructor(props){
    super(props);
    this.state={
      name:"",
      lastname:"",
      email:"",
      username:"",
      password:""
    }
  }
  componentDidMount(){
    fetch("http://localhost:50040/api/Users/GetUserById/")
      .then(response => response.json())
      .then((jsonData) => {
          // jsonData is parsed json object received from url
          console.log(jsonData)
      })
      .catch((error) => {
      // handle your errors here
      console.error(error)
        })
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
                                  <div class="home" ></div>
                            <div class="container" style={{marginRight:150}}>
                        <div class="col-md-9 personal-info">
                        </div>
                        <form class="form-horizontal" role="form">
                          <div class="form-group">
                            <label class="col-lg-8 control-label">First name:</label>
                            <div class="col-lg-8">
                              <input class="form-control" type="text" value="Jane"/>
                            </div>
                          </div>
                          <div class="form-group">
                            <label class="col-lg-8 control-label">Last name:</label>
                            <div class="col-lg-8">
                              <input class="form-control" type="text" value="Bishop"/>
                            </div>
                          </div>
                          <div class="form-group">
                            <label class="col-lg-8 control-label">Email:</label>
                            <div class="col-lg-8">
                              <input class="form-control" type="text" value="janesemail@gmail.com"/>
                            </div>
                          </div>
                          <div class="form-group">
                            <label class="col-lg-8 control-label">İl</label>
                            <div class="col-lg-8">
                              <div class="ui-select">
                                <select id="user_time_zone" class="form-control">
                                  <option value="Manisa">Manisa</option>
                                  <option value="Izmir">İzmir</option>
                                  <option value="Istanbul">Istanbul</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div class="form-group">
                            <label class="col-lg-8 control-label">İlçe</label>
                            <div class="col-lg-8">
                              <div class="ui-select">
                                <select id="user_time_zone" class="form-control">
                                  <option value="Manisa">Turgutlu</option>
                                  <option value="Izmir">Çeşme</option>
                                  <option value="Istanbul">Bağcılar</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div class="form-group">
                            <label class="col-md-8 control-label">Username:</label>
                            <div class="col-md-8">
                              <input class="form-control" type="text" value="janeuser"/>
                            </div>
                          </div>
                          <div class="form-group">
                            <label class="col-md-8 control-label">Password:</label>
                            <div class="col-md-8">
                              <input class="form-control" type="password" value="11111122333"/>
                            </div>
                          </div>
                          <div class="form-group">
                            <label class="col-md-8 control-label">Confirm password:</label>
                            <div class="col-md-8">
                              <input class="form-control" type="password" value="11111122333"/>
                            </div>
                          </div>
                          <div class="form-group">
                            <label class="col-md-8 control-label"></label>
                            <div class="col-md-8">
                              <input type="button" class="btn btn-primary" value="Save Changes"/>
                              <span></span>
                              <input type="reset" class="btn btn-default" value="Cancel"/>
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
