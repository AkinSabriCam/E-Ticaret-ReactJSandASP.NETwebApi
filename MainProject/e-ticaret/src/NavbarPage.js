import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem,MDBBtn,MDBInput} from "mdbreact";
import {Route,BrowserRouter as Router} from 'react-router-dom';
import './css/site.css';
import {Modal,Button} from 'react-bootstrap';
import {Redirect,Link} from 'react-router-dom';
import Cookies from 'js-cookie';


export class NavbarPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state={
      isOpen:false,
      Category:[],
      show: false,
      UrunCount:0
    }
  }
  componentDidMount(){
    console.log("asdasda"+Cookies.get("ProductCount"))
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
                     
                      <Link to={{pathname:"/ProductsByCategory", state:{subCatId:altkat.altKategoriID}}}>
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
                  <input className="form-control mr-sm-2" type="text"  style={{width:500}} placeholder="Bu sitede ara..." aria-label="Search" />
                </div>
                <MDBBtn rounded outline color="warning">Search</MDBBtn> 
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
           <MDBBtn rounded outline color="warning"> Sign In </MDBBtn>
           <MDBNavbar></MDBNavbar> 
           <MDBBtn rounded outline color="warning"> Sign Up </MDBBtn>
           </MDBNavbar>
           </MDBNavbar>
           <MDBNavbar>
           <MDBNavbarNav right>

           <Link to="/Siparis" className="btn btn-dark">
            Sepetim <span class="badge badge-light">{Cookies.get("ProductCount")}</span>
            <span class="sr-only">unread messages</span>
            </Link>
         
           </MDBNavbarNav>
           </MDBNavbar>
      <MDBNavbar color="indigo" dark expand="md">
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
