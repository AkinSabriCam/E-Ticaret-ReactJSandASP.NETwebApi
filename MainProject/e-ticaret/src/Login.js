import React, { Component } from "react";
import './css/site.css';
import {Modal,Button} from 'react-bootstrap';
import Cookies from 'js-cookie';
import {Redirect,Switch,Route}  from 'react-router';
import { HomePage } from "./HomePage";


export  class Login extends Component {

  constructor(props, context) {
    super(props, context);
    this.state={
      Category:[],
      show: true,
      redirect:false
    }
    
    this.LoginClose = this.LoginClose.bind(this);
    this.Login=this.Login.bind(this);
  }

componentDidMount(){
  
  // kullanıcı giriş yaptığında bu bilgiye dair bir session tutulmaktadır.
}

  LoginClose() {
    this.setState({show: false });
  }


  Login(){
    let UserName=document.getElementById("username").value;
    let Password=document.getElementById("password").value;
    
    fetch("http://localhost:50040/token",{
       method:"post",
       headers:{
        "content-type":"application/x-www-form-urlencoded"
       },
      body:`UserName=${UserName}&Password=${Password}&grant_type=password`
    }).then(data=>data.json())
    .then(result=>{
        
      Cookies.set("token",result.access_token);
      console.log(result.access_token);
      Cookies.set("Login","true");
      this.setState({redirect:true});
      
    })
    .catch(err=>console.log(err));

    // Kullanicinin Id sini almak için bir request yolluyorum
    fetch(`http://localhost:50040/api/Users/GetUserId?username=${UserName}&password=${Password}`)
    .then(data=>data.json())
    .then(result=>{Cookies.set("kullaniciID",result.kullaniciID)
      
      console.log(Cookies.get("kullaniciID"))
      if(Cookies.get("sepetid")!=null){
        fetch(`http://localhost:50040/api/Sepet/PutSepettoUser?sepetid=${Cookies.get("sepetid")}&kullaniciId=${Cookies.get("kullaniciID")}`,{
          method:"PUT"
        })
      .then(console.log("sepetler match lendi"))
      .catch(err=>console.log(err));
      }
      else{
        fetch('http://localhost:50040/api/Sepet/GetProductCountinSepet/'+Cookies.get("kullaniciID"))
        .then(data=>data.json())
        .then(result=>{Cookies.set("ProductCount",result.value)
        console.log(result.value);
        })
      .catch(err=>console.log(err));
      
      }
    })
    .catch(err=>console.log(err));

  }
  render(){
    if(this.state.redirect){
      return <Redirect to="/"/>
    }  
    return (
        <div className='menu'>
          <Modal show={this.state.show} onHide={this.LoginClose}>
            <Modal.Header closeButton>
              <Modal.Title> Sign In </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div className="form-group">
            <label htmlFor="formGroupExampleInput" placeholder="Username">Username</label>
            <input 
            type="text"
            className="form-control"
            id="username"/>
            <label htmlFor="formGroupExampleInput" placeholder="******">Password</label>
            <input
            type="text"
            className="form-control"
            id="password"/>
            </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.LoginClose}> Close </Button>
              <Button variant="primary" onClick={this.Login}> Sign In </Button>
            </Modal.Footer>
          </Modal>
        </div>
      )
      
    }
  }
  export default Login;
