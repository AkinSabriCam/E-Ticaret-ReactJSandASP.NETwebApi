import React, { Component } from "react";
import './css/site.css';
import {Modal,Button, Dropdown} from 'react-bootstrap';

  
export class Register extends Component {
  constructor(props, context) {
    super(props, context);
    this.state={
      City:[],
      Location:[],
      show: true,
    }
   
    this.RegisterClose = this.RegisterClose.bind(this);
    this.KayitEkle=this.KayitEkle.bind(this);
  }

  componentDidMount(){

    fetch("http://localhost:50040/api/Iletisim/GetAllProvince").then(data=>data.json())
      .then(result=>{this.setState({City:result})})
      .catch(error=>console.log("error"));
  }


  KayitEkle(){
    
      let name=document.getElementById("name").value;
      let lastname=document.getElementById("lastname").value;
      let email=document.getElementById("email").value;
      let username=document.getElementById("username").value;
      let password=document.getElementById("password").value;
      let il=document.getElementById("il");
      let ilce=document.getElementById("ilce");
      let User={
                ad: name,
                soyad: lastname,
                email:email,
                kullaniciAdi:username,
                sifre:password,
                ilID:1,
                ilceID:1
      }

    fetch("http://localhost:50040/api/Users/PostUser", {
            method: 'POST',
            body: JSON.stringify(User),
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            }
          }).then(data=>data.json)
          .then(result=>{console.log("ok")})
          .catch(err=>console.log("err"))
          }
  
          RegisterClose() {
            this.setState({ show: false });
          }
          toggleCollapse = () => {
          this.setState({ isOpen: !this.state.isOpen });
          } 
  render(){
     
      let city=this.state.City.map((cy,ind)=>{
        {console.log(cy)}
        return(
          <div>
            <Dropdown.Menu>
            <Dropdown.Item>{cy}</Dropdown.Item>
            </Dropdown.Menu>
        </div>
      )
  })
    
     console.log(this.state.Location);
    return (
        <div className='menu'>
        <form onSubmit={this.KayitEkle}>
          <Modal show={this.state.show} onHide={this.RegisterClose}>
          <Modal.Header closeButton>
          <Modal.Title center > Sign Up </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="form-group">
            
                <label htmlFor="formGroupExampleInput">Name</label>
                <input 
                type="name"
                name="name"
                id="name"
                className="form-control"
                placeholder="Jon"/>

                <label htmlFor="formGroupExampleInput">Last Name</label>
                <input 
                type="lastname"
                name="lastname"
                id="lastname"
                className="form-control"
                placeholder="Snow"/>

                <label htmlFor="formGroupExampleInput">E-mail</label>
                <input
                type="email"
                name="email"
                id="email"
                className="form-control"
                placeholder="example@example.com"/>

                <label htmlFor="formGroupExampleInput">Username</label>
                <input 
                type="username"
                name="username"
                id="username"
                className="form-control"
                placeholder="JSnow"/>
                
                <label htmlFor="formGroupExampleInput">Password</label>
                <input 
                type="password"
                name="password"
                id="password"
                className="form-control"
                placeholder="************"/>

                <label htmlFor="formGroupExampleInput">Il</label>
                <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">Dropdown Button</Dropdown.Toggle>
                  {city}
                </Dropdown>
                  
                <label htmlFor="formGroupExampleInput">Ilce</label>
                
                
            </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.RegisterClose}> Close </Button>
              <input type="submit" onClick={this.KayitEkle} className="btn btn-lg btn-success"/>
            </Modal.Footer>
          </Modal>
          </form>
          
        </div>
    )
    }
  }
  
export default Register;
/*{
  kat.AltKategori.map((altkat,ind)=>{
     return(
       <MDBDropdownItem>{altkat.altKategori1}</MDBDropdownItem>
     )
 })
}*/