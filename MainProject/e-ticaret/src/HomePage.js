import React from 'react'
import './css/site.css'
import $ from 'jquery';
import {Link} from 'react-router-dom';
import Cookies from 'js-cookie';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import {Modal} from 'react-modal'
import {Redirect} from 'react-router';
import {Modal,Button} from 'react-bootstrap';

export class HomePage extends React.Component{
    constructor(props){
      super(props);
        this.state={
          Products:[],
          Detay:false,
          ProductDetail:0,
          duyuru:false,
          Duyuru:{},
          Product:{},
          isOpen:false,
          home:false
        }
   
        /*setTimeout(()=>{
          fetch("http://localhost:50040/api/Duyuru/Get")
          .then(data=>data.json())
          .then(result=>{
             this.setState({duyuru:true,Duyuru:result})
          })
          .catch(err=>console.log(err));
       },6000);*/
  
      setTimeout(() => {
        /*$(function(){
          $("#modal").show();  
        })  */
        this.setState({isOpen:true})
        const userId = Cookies.get("kullaniciID");           
        fetch("http://localhost:50040/api/Urunler/SuggestProductToUser/1"/*+userId*/).then(data=>data.json())
        .then(result=>this.setState({Product:result}))
        .catch(error=>console.log("error"));
        // this.setState({oneri:true});
    },60000);

   }


   CloseModal = () => {
    this.setState({isOpen:false,home:true});
    $(function(){
      $("#modal").hide();  
    })
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
      let Duyurular;
        if(this.state.duyuru){
            
          if(this.state.Duyuru!=null){
              return(
                  <Modal isOpen={this.state.duyuru}>
                    <Card style={{ width: '18rem' }}>
                  <Card.Body>
                 <Card.Title>Duyuru</Card.Title>
                 <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                 <Card.Text>
                  {this.state.Duyuru.icerik}
                 </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
                </Card>;
                  </Modal>
                )  
              
            }
        }

    if(this.state.home)
      return <HomePage></HomePage>
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
            <div>
                <Modal show={this.state.isOpen} onHide={this.CloseModal}>
                <Modal.Header closeButton>
                  <p><strong>{this.state.Product.altkategori}</strong>  kategorisinde ilginizi çekebilecek bir ürün bulduk:</p> 
                
                </Modal.Header>
              <Modal.Body>

                  <div class="row">
                      <div class="col-3">
                      <p></p>
                      <p class="text-center">
                          <img src="https://via.placeholder.com/600" alt="" />
                      </p>
                      </div>

                      <div class="col-9">
                          
                           <p>
                              <h4><strong>{this.state.Product.ad} 
                                </strong></h4>  
                          </p>
                          <p>
                              {this.state.Product.marka}
                          </p>
                         
                          <p>
                              <h6><strong>{this.state.Product.fiyat} ₺</strong></h6>
                          </p>

                      </div>
                  </div>
            
              </Modal.Body>
                  <Modal.Footer>
                  <Link to={{pathname:"/ProductDetail",state:{productId:this.state.Product.urunID}}}>
                  <a style={{color:"white", textDecoration:"none"}} class="btn btn-danger">Ürüne Git
                      <i class="far fa-gem ml-1 white-text"></i>
                  </a>
                 </Link>
                  <a type="button" class="btn btn-outline-danger waves-effect" onClick={this.CloseModal}>Kapat</a>
              </Modal.Footer>
              </Modal>

         
            <div class="row">
            {Duyurular}
            {Cards}
                
          </div>
          </div>
          )
      }
  }