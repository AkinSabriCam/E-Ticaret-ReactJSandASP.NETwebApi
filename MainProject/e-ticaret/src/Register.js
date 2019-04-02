import React, { Component } from "react";
import './css/site.css';
import {Modal,Button, Dropdown, DropdownButton} from 'react-bootstrap';
import { Redirect } from 'react-router-dom'


export class Register extends Component {
  constructor(props, context) {
    super(props, context);
    this.state={
      show: true,
      Iller:[],
      Ilceler:[],
    }
    this.RegisterClose = this.RegisterClose.bind(this);
    this.KayitEkle=this.KayitEkle.bind(this);
  }
  componentDidMount(){
        // Il ve ilceleri almak için bir fetch daha kullanıyorum
        fetch("http://localhost:50040/api/Iletisim/GetAllCity")
        .then(data=>data.json())
        .then(result=>{
            this.setState({Iller:result.Iller});
            this.setState({Ilceler:result.Ilceler});
        })
        .catch(err=>{console.log(err)});
  }
  
  KayitEkle(){
      let name=document.getElementById("name").value;
      let lastname=document.getElementById("lastname").value;
      let email=document.getElementById("email").value;
      let username=document.getElementById("username").value;
      let password=document.getElementById("password").value;
      let cinsiyet=document.getElementById("cinsiyet").value;
      let ilid=document.getElementById("il").value;
      let il=document.getElementById("il").options[document.getElementById("il").selectedIndex].text;
      let ilceid=document.getElementById("ilce").value;
      let ilce=document.getElementById("ilce").options[document.getElementById("ilce").selectedIndex].text;
      let acikAdres=document.getElementById("acikAdres").value;
      var tempDate = new Date();
      var date = tempDate.getFullYear() + '-' + (tempDate.getMonth()+1) + '-' + tempDate.getDate() +' '+ tempDate.getHours()+':'+ tempDate.getMinutes()+':'+ tempDate.getSeconds();
      const currDate=date;      
      let NewUser={
                ad: name,
                soyad: lastname,
                email: email,
                kullaniciAdi: username,
                sifre: password,
                cinsiyet:cinsiyet,
                ilid: ilid,
                ilAdi:il,
                ilceid:ilceid,
                ilceAdi: ilce,
                acikAdres: acikAdres,
                rolId: 2,
                kayitTarihi: currDate
      }
    fetch("http://localhost:50040/api/Users/PostUser", {
            method: 'POST',
            body: JSON.stringify(NewUser),
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
    let iller=this.state.Iller.map((il,indeks)=>{
      return(  
          <option value={il.ilID}>{il.il1}</option>
      )
    })
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

                <label htmlFor="formGroupExampleInput">Cinsiyet</label>
                <select id="cinsiyet" className="form-control">
                  <option value="true">Erkek</option>
                  <option value="false">Kız</option>
                </select>

                <div className="form-group">
                <label htmlFor="formGroupExampleInput">İl</label>
                <select id="il" className="form-control illist">
                      {iller}
                </select>

                </div>
                <div className="form-group">
                <label htmlFor="formGroupExampleInput">İlçe</label>
                <select id="ilce" className="form-control ilcelist">
                </select>
                </div>

                <label htmlFor="formGroupExampleInput">Açık Adres</label>
                <input 
                type="acikAdres"
                name="acikAdres"
                id="acikAdres"
                className="form-control"
                placeholder="İstiklal Mahallesi Piyaleoğlu Caddesi No:147"/>
        
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