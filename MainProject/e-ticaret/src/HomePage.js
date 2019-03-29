import React from 'react'
import './css/site.css'
import $ from 'jquery';
import urun from './img/product01.jpg';
import asus from './img/asus.jpg';
import {Link,Redirect} from 'react-router-dom'
import {ProductDetail} from './ProductDetail'
import Cookies from 'js-cookie';


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
    console.log(result); 
    if(Cookies.get("Oturum")==null){
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
      let OneMinutes = new Date(new Date().getTime() + 1 * 60 * 1000);//
            Cookies.set("Oturum","true",{
              path:'',
              expires:OneMinutes 
            },()=>{console.log("OTURUM SÜRESİ DOLDU")});
      // cookie'ye  1 dakikalık tutma süresi veriliyor burada....
      }
      else{
        console.log("cookie dolu");
        console.log(Cookies.get("Oturum"));
      
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
                <h5>{urun.fiyat} ₺</h5>
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