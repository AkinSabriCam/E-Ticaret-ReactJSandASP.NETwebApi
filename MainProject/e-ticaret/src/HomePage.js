import React from 'react'
import './css/site.css'
import $ from 'jquery';
import urun from './img/product01.jpg';
import asus from './img/asus.jpg';
import {Link,Redirect} from 'react-router-dom'
import {ProductDetail} from './ProductDetail'


export class HomePage extends React.Component{
    
    constructor(props){
      super(props);
        this.state={
          Products:[],
          Detay:false,
          ProductDetail:0
          
        }
   }
  
  componentDidMount(){
    fetch("http://localhost:50040/api/Urunler/GetAllProducts").then(data=>data.json())
    .then(result=>{this.setState({Products:result})

    if(sessionStorage.getItem("Oturum")==null){
          $.ajax({
          type:"PUT",
          url:"http://localhost:50040/api/ZiyaretLog/PutLogClick",
           suceess:function(){
            console.log("ok");
          },
          error:function(err,status,xhr){
             console.log("Ziyaretçi loglama işleminde problem var !!" + err.status);
        }
       })
      //Her app.js render edildiğinde burası 1 kez çalışacak.
      sessionStorage.setItem("Oturum","true")
      }
      else{
        console.log("session çalışmıyor");
        console.log(sessionStorage.getItem("Oturum"));
      
      }
     })
      
      .catch(error=>console.log("error"));
    
    
  }
  Detay(id){
    this.setState({Detay:true,ProductDetail:id});
  
  }
  render(){


        let Cards=this.state.Products.map((urun,ind)=>{

          return(
            <div class="col-lg-3 col-md-6 mb-4">
              
            <div class="card h-100">
            <Link to={{pathname:"/ProductDetail",state:{productId:urun.urunID}}}><img class="card-img-top" src={asus} alt=""/></Link>

              <div class="card-body">
                <h4 class="card-title">
                  <a href="#">{urun.ad}</a>
                </h4>
                <h5>{urun.fiyat}</h5>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>

              </div>
             
            </div>
          </div>
          
            )

        })    

          return(
            <div class="row">
            {Cards}
          </div>
          )
      }
  }