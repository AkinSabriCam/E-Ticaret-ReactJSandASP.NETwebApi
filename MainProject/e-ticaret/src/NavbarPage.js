import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem,MDBBtn,MDBInput} from "mdbreact";
import {Route,BrowserRouter as Router} from 'react-router-dom';
import './css/site.css';
import {Login} from './Login'
import {Modal,Button} from 'react-bootstrap';
import {Redirect,Link} from 'react-router-dom';
import Cookies from 'js-cookie';
import $ from 'jquery';


export class NavbarPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state={
      isOpen:false,
      Category:[],
      show: false,
      UrunCount:0,
      login:false,
      text: ''

    }
    this.LoginPage=this.LoginPage.bind(this);
    this. getText=this.getText.bind(this);
  }
  componentDidMount(){
    fetch("http://localhost:50040/api/Kategoriler/GetAllCategory",{
      method:"GET",
      headers:{
        Accept:"application/json"
      }
    })
    .then(data=>data.json())
    .then(result=>{this.setState({Category:result},function(err){if(!err){console.log(this.state.Category)}});})
      .catch(error=>console.log("error"));
      
    
      console.log(sessionStorage.getItem("SepettekiUrun"));    
    }
  toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
  } 

  LoginPage(){
   this.setState({login:true});
  }
  
  getText = () => {
    var val = document.getElementById("searchInput").value;
    this.setState({text:val});
  }


render(){
  
    let Category=this.state.Category.map((kat,ind)=>{

      return(
        <MDBNavItem>
        <MDBDropdown>
          <MDBDropdownToggle nav caret>
            <span className="mr-2">{kat.KategoriAdi}</span>
          </MDBDropdownToggle>
          <MDBDropdownMenu>
          {
              kat.AltKategoriler.map((altkat,ind)=>{
   

                  return(
                     
                      <Link to={{pathname:"/ProductsByCategory", state:{subCatId:altkat.altkategoriId}}}>

                      <MDBDropdownItem>{altkat.altkategori}</MDBDropdownItem>
                  </Link>
                  )
                })
          }
          </MDBDropdownMenu>   
        </MDBDropdown>
      </MDBNavItem>
      )
    })


  return (
      <div className='menu'>
      <MDBNavbar right>
      <MDBNavbarNav right className="searchbar">
      <MDBNavItem>
              <MDBFormInline waves >
                <div className="md-form my-0">
                  <input id="searchInput" onInput={this.getText} className="form-control mr-sm-2" type="text"  style={{width:500}} placeholder="Bu sitede ara..." aria-label="Search" />
                </div>
                
               <Link to={{pathname:"/SearchProducts", state:{searchText: this.state.text}}}> 
                    <Button rounded outline color="warning">Search</Button>   
               </Link>

              </MDBFormInline>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbar></MDBNavbar> 
          <MDBNavbar></MDBNavbar> 
          <MDBNavbar></MDBNavbar> 
          <MDBNavbar></MDBNavbar> 
          <MDBNavbar></MDBNavbar> 
          <MDBNavbar></MDBNavbar> 

          <MDBNavbar>           
           <Link to="/Login"><MDBBtn rounded outline color="warning" onClick={this.LoginPage}> Sign In </MDBBtn></Link>
          
           <MDBNavbar></MDBNavbar> 
           <Link to="/Register" >
           <MDBBtn rounded outline color="warning"> Sign Up </MDBBtn>
           </Link>
           </MDBNavbar>
           </MDBNavbar>
           <MDBNavbar>
           <MDBNavbarNav right>

           <Link to="/Siparis" className="btn btn-dark">
                Sepetim <span className="badge badge-light">{Cookies.get("ProductCount")}</span>
                <span className="sr-only">unread messages</span>
            </Link>
         
           </MDBNavbarNav>
           </MDBNavbar>

      <MDBNavbar color="indigo" dark expand="md">
      <MDBNavbarBrand>
          <Link to="/"><strong className="white-text btnAnasayfa">ANASAYFA</strong></Link>
        </MDBNavbarBrand>
        <MDBNavbarBrand>
          <strong className="white-text">KATEGORİLER</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler  onClick={this.toggleCollapse}/>
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav  center>
          {Category}
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>

      </div>
    )
  }
}

export default NavbarPage;
