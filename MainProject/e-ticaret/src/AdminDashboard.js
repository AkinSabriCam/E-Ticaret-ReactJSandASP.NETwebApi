import React from 'react'
import {SiteClickPage} from './SiteClickPage';
import {FiveBestSellerProductsPage} from './FiveBestSellerProductsPage';
import {AdminAllSiparis} from './AdminAllSiparis';
import {KullaniciKayitLogPage} from './KullaniciKayitLogPage';

export class AdminDashboard extends React.Component{
      constructor(props){
        super(props);
        this.state={
          SiteClickPage:false,
          fivebestproduct:false,
          allsiparis:false,
          katiylog:false
        }
        this.SiteClick=this.SiteClick.bind(this);
        this.BestFiveSiparisPage=this.BestFiveSiparisPage.bind(this);
        this.AllSiparisPage=this.AllSiparisPage.bind(this);
        this.KayitLogPage=this.KayitLogPage.bind(this);
      }
  
  
  SiteClick(){
      this.setState({SiteClickPage:true});
  }
  BestFiveSiparisPage(){
    this.setState({fivebestproduct:true});
  }
  AllSiparisPage(){
    this.setState({allsiparis:true});
  }
  KayitLogPage(){
    this.setState({katiylog:true});
  }
   render(){
    if(this.state.SiteClickPage){
      return (<SiteClickPage></SiteClickPage>
      )}
    
    if(this.state.fivebestproduct){
       return (<FiveBestSellerProductsPage></FiveBestSellerProductsPage>
     )}
      
    if(this.state.allsiparis){
      return (<AdminAllSiparis></AdminAllSiparis>
    )}
    if(this.state.katiylog){
      return (<KullaniciKayitLogPage></KullaniciKayitLogPage>)}  
    return(
      <div class="container-fluid">

      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="#">İSTATİSTİK</a>
        </li>
        <li class="breadcrumb-item active">Site Bilgileri</li>
      </ol>
  
     
      <div class="row">
        
        <div class="col-xl-3 col-sm-6 mb-3">
          <div class="card text-white bg-warning o-hidden h-100">
            <div class="card-body">
              <div class="card-body-icon">
                <i class="fas fa-fw fa-list"></i>
              </div>
              <div class="mr-5"><b>Kullanıcı Kayıt Sayısı</b></div>
            </div>
            <a class="card-footer text-white clearfix small z-1" href="#" onClick={this.KayitLogPage}>
              <span class="float-left">Detay</span>
              <span class="float-right">
                <i class="fas fa-angle-right"></i>
              </span>
            </a>
          </div>
        </div>
        <div class="col-xl-3 col-sm-6 mb-3">
          <div class="card text-white bg-success o-hidden h-100">
            <div class="card-body">
              <div class="card-body-icon">
                <i class="fas fa-fw fa-shopping-cart"></i>
              </div>
              <div class="mr-5"><b>Tüm Siparişler</b></div>
            </div>
            <a class="card-footer text-white clearfix small z-1" onClick={this.AllSiparisPage}>
              <span class="float-left">Detay</span>
              <span class="float-right">
                <i class="fas fa-angle-right"></i>
              </span>
            </a>
          </div>
        </div>
        <div class="col-xl-3 col-sm-6 mb-3">
          <div class="card text-white bg-danger o-hidden h-100">
            <div class="card-body">
              <div class="card-body-icon">
                <i class="fas fa-fw fa-life-ring"></i>
              </div>
              <div class="mr-5"><b>En Çok Satın Alınan 5 Ürün</b></div>
            </div>
            <a class="card-footer text-white clearfix small z-1" onClick={this.BestFiveSiparisPage}>
              <span class="float-left">Detay</span>
              <span class="float-right">
                <i class="fas fa-angle-right"></i>
              </span>
            </a>
          </div>
        </div>

        <div class="col-xl-3 col-sm-6 mb-3">
          <div class="card text-white bg-success o-hidden h-100">
            <div class="card-body">
              <div class="card-body-icon">
              <i class="fas fa-chart-bar"></i>
              </div>
              <div class="mr-5">Site Tıklanma Sayıları</div>
            </div>
            <a class="card-footer text-white clearfix small z-1" onClick={this.SiteClick}>
              <span class="float-left">View Details</span>
              <span class="float-right">
                <i class="fas fa-angle-right"></i>
              </span>
            </a>
          </div>
        </div>

      
      </div>
  
    </div>
    )

    }

}
