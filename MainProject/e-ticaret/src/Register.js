import React, { Component } from "react";
import './css/site.css';
import {Modal,Button, Dropdown, DropdownButton} from 'react-bootstrap';
import { Redirect } from 'react-router-dom'


export class Register extends Component {
  constructor(props, context) {
    super(props, context);
    this.state={
      City:[],
      Loc:[],
      show: true,
      selectedOption:false,
    }
    this.RegisterClose = this.RegisterClose.bind(this);
    this.KayitEkle=this.KayitEkle.bind(this);
    this.radioChangeGirl = this.radioChangeGirl.bind(this);
    this.radioChangeBoy = this.radioChangeBoy.bind(this);  
  }
  componentDidMount(){
    fetch("http://localhost:50040/api/Iletisim/GetAllCity").then(data=>data.json())
      .then(result=>{this.setState({City:result})})
      .catch(error=>console.log("error"));
      
      fetch("http://localhost:50040/api/Iletisim/GetAllLocation").then(data=>data.json())
      .then(result=>{this.setState({Loc:result})})
      .catch(error=>console.log("error"));
  }
  
  KayitEkle(){
      let name=document.getElementById("name").value;
      let lastname=document.getElementById("lastname").value;
      let email=document.getElementById("email").value;
      let username=document.getElementById("username").value;
      let password=document.getElementById("password").value;
      let il=document.getElementById("il").value;
      let ilce=document.getElementById("ilce").value;
      let acikAdres=document.getElementById("acikAdres").value;
      var tempDate = new Date();
      var date = tempDate.getFullYear() + '-' + (tempDate.getMonth()+1) + '-' + tempDate.getDate() +' '+ tempDate.getHours()+':'+ tempDate.getMinutes()+':'+ tempDate.getSeconds();
      const currDate=date;      
      let User={
                ad: name,
                soyad: lastname,
                email: email,
                kullaniciAdi: username,
                sifre: password,
                il: il,
                ilce: ilce,
                acikAdres: acikAdres,
                cinsiyet:this.state.selectedOption,
                rolId: 2,
                kayitTarihi: currDate
      }

    fetch("http://localhost:50040/api/Users/PostUser", {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              },
            body: JSON.stringify(User)
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
          radioChangeGirl() {
          this.setState({selectedOption:false});
          }
          radioChangeBoy() {
           this.setState({selectedOption:true});
          }
          
  render(){
    //daha sonra düzenlenecek
  /* let sehirler=this.state.City.map((seh,ind)=>{
       return(
        <option>{seh.il1}</option>
        
       )
       <div class="col-lg-15">
                        <div class="ui-select">
                          <select id="il" class="form-control">
                            {sehirler}
                          </select>
                        </div>
                  </div>
     })

     let ilceler=this.state.Loc.map((ilc,ind)=>{
       console.log(ilc.ilce1);
       return(
        <option>{ilc.ilce1}</option>
       )
       <div class="col-lg-15">
                        <div class="ui-select">
                          <select id="ilce" class="form-control">
                            {ilceler}
                          </select>
                        </div>
                  </div>
       
     })*/

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

                <label htmlFor="formGroupExampleInput">İl</label>
                <input 
                type="il"
                name="il"
                id="il"
                className="form-control"
                placeholder="Manisa"/>

                <label htmlFor="formGroupExampleInput">İlçe</label>
                <input 
                type="ilce"
                name="ilce"
                id="ilce"
                className="form-control"
                placeholder="Turgutlu"/>
                

                <label htmlFor="formGroupExampleInput">Açık Adres</label>
                <input 
                type="acikAdres"
                name="acikAdres"
                id="acikAdres"
                className="form-control"
                placeholder="İstiklal Mahallesi Piyaleoğlu Caddesi No:147"/>

                <label htmlFor="formGroupExampleInput">Cinsiyet</label>
                <br></br>
                  <input type="radio"
                  value="0"
                  checked={this.state.selectedOption === false}
                  onChange={this.radioChangeGirl} />Kız

                  <input type="radio" 
                  value="1"
                  checked={this.state.selectedOption === true}
                  onChange={this.radioChangeBoy}/>Erkek
        
            </div>
            </Modal.Body>
            <Modal.Footer>
              
              <Button variant="secondary" onClick={this.RegisterClose}> Close </Button>
              <Redirect to="/">
              <input type="submit" onClick={this.KayitEkle} className="btn btn-lg btn-success"/>
              </Redirect>
            </Modal.Footer>
          </Modal>
          </form>
          
        </div>
    )
    }
  }
  
export default Register;