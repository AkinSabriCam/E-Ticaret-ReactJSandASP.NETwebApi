import React from 'react'
import './css/site.css'
import $ from 'jquery';
import {Link} from 'react-router-dom';
import Cookies from 'js-cookie';

/*function importAll(r) {
  return r.keys().map(r);
}
importAll(require.context('./images', true, /.*\.png$/));*/

export class HomePage extends React.Component{
    
    constructor(props){
      super(props);
        this.state={
          Products:[],
          Detay:false,
          ProductDetail:0,
      }
   }
 
  componentDidMount(){
   /* Cookies.remove("kullaniciID");
    Cookies.remove("ProductCount");
    Cookies.remove("Login");
    Cookies.remove("token");
    Cookies.remove("sepetid");*/

    fetch("http://localhost:50040/api/Urunler/GetAllProducts").then(data=>data.json())
    .then(result=>{this.setState({Products:result})
    this.setState({imageUrl:this.state.Products.imagePath})
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
   //Cookies.remove("Login");
        let Cards=this.state.Products.map((urun,ind)=>{
          return(
            <div class="col-lg-3 col-md-6 mb-4">                                
            <div class="card h-100">
            <Link to={{pathname:"/ProductDetail",state:{productId:urun.urunID}}}><img width="auto" src={urun.imagePath}/></Link>
              <div class="card-body ">                                                                    
                <h4 class="card-title">
                  <a><Link to={{pathname:"/ProductDetail",state:{productId:urun.urunID}}}>{urun.ad}</Link></a>
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