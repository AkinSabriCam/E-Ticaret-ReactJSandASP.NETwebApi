import React from 'react'
import './css/site.css'
import $ from 'jquery';
import {Link} from 'react-router-dom';
import Cookies from 'js-cookie';
import {Redirect} from 'react-router';

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
          Product:{},
          isOpen:false,
          home:false
      }
      setTimeout(() => {
        this.setState({isOpen:true});  
        const userId = Cookies.get("kullaniciID");           
        fetch("http://localhost:50040/api/Urunler/SuggestProductToUser/1"/*+userId*/).then(data=>data.json())
        .then(result=>this.setState({Product:result}))
        .catch(error=>console.log("error"));
        // this.setState({oneri:true});
    },10000);
   }


   CloseModal = () => {
    this.setState({isOpen:false,home:true});
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
            <div class="row">
            {Cards}

            
                <div class="modal-dialog modal-side modal-bottom-right modal-notify modal-danger" role="document">

                    <div class="modal-content">

                    <div class="modal-header">
                    <p class="heading">Bu ürün ilginizi çekebilir:
                        <strong>{this.state.Product.ad}</strong>
                    </p>

                    <button type="button" class="close" onClick={this.CloseModal}  aria-label="Close">
                        <span aria-hidden="true" class="white-text">&times;</span>
                    </button>
                    </div>

                    <div class="modal-body">
                        <div class="row">
                            <div class="col-3">
                            <p></p>
                            <p class="text-center">
                                <img src="https://via.placeholder.com/600" alt="" />
                            </p>
                            </div>

                            <div class="col-9">
                                
                                <p>
                                    {this.state.Product.marka}
                                </p>
                                <p>
                                    <strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Vestibulum lobortis diam non ultricies malesuada. 
                                        Morbi lobortis hendrerit sem eu imperdiet. 
                                        Cras consectetur velit non ornare ultrices. Cras facilisis quis sapien et porta. 
                                       </strong>
                                </p>
                                <p>
                                    <h4><strong>{this.state.Product.fiyat} ₺</strong></h4>
                                </p>

                            </div>
                        </div>
                    </div>

                    <div class="modal-footer flex-center">
                    <Link to={{pathname:"/ProductDetail",state:{productId:this.state.Product.urunID}}}>
                        <a class="btn btn-danger">Ürüne Git
                            <i class="far fa-gem ml-1 white-text"></i>
                        </a>
                    </Link>
                    <a type="button" class="btn btn-outline-danger waves-effect" onClick={this.CloseModal}>Kapat</a>
                    </div>
                </div>

                </div>
          </div>
          )
      }
  }