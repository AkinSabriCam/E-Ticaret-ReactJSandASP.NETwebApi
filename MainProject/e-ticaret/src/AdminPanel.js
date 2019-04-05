import React from 'react'
import './js/Custom.js'
import {AdminDashboard} from './AdminDashboard'
import {AdminNavbar } from './AdminNavbar';
import {AdminUrunler} from  './AdminUrunler';
import{Kullanicilar}  from './Kullanicilar';
import {AdminKategoriPage} from './AdminKategoriPage';
import  {DuyuruPage}  from './DuyuruPage';

export class AdminPanel extends React.Component{
  constructor(props)
  {   super(props);
    this.state={
       durum:true,
      UrunlerPage:false,
      KullanicilarPage:false,
      kategoripage:false,
      DuyuruPage:false,
    }
    this.Urunler=this.Urunler.bind(this);
    this.KullaniciPage=this.KullaniciPage.bind(this);
    this.IstatistikPage=this.IstatistikPage.bind(this);
    this.KategoriPage=this.KategoriPage.bind(this);
    this.Duyuru=this.Duyuru.bind(this);
  }

  Urunler(){
    this.setState({KullaniciPage:false,UrunlerPage:true,durum:false});
  }
  KullaniciPage(){
      this.setState({KullaniciPage:true,UrunlerPage:false,durum:false});
  }
  IstatistikPage(){
    this.setState({durum:true,KullaniciPage:false,UrunlerPage:false});
  }
  KategoriPage(){
      this.setState({kategoripage:true,durum:false,KullaniciPage:false,UrunlerPage:false})
  }
  Duyuru(){
    this.setState({DuyuruPage:true,KategoriPage:false,durum:false,KullaniciPage:false,UrunlerPage:false});
  }
    render(){
      let icerik;
      if(this.state.DuyuruPage){
        icerik=<DuyuruPage></DuyuruPage>
      }
      if(this.state.kategoripage){
        icerik=<AdminKategoriPage></AdminKategoriPage>
      }
       if(this.state.durum){
        icerik=<AdminDashboard></AdminDashboard>
       }
       if(this.state.UrunlerPage){
         icerik=<AdminUrunler></AdminUrunler>
       }
       if(this.state.KullaniciPage){
        icerik=<Kullanicilar></Kullanicilar>
      }
        return(
        <div>
          <AdminNavbar></AdminNavbar>
        <div id="page-top">
  
   
<div id="wrapper">


<ul class="sidebar navbar-nav">
  <li class="nav-item active">
    <a class="nav-link" href="#" onClick={this.IstatistikPage}>
      <i class="fas fa-fw fa-chart-area"></i>
      <span>İSTATİSTİKLER</span>
    </a>
  </li>
  <li class="nav-item dropdown">
    <a class="nav-link" href="#" onClick={this.KullaniciPage}>
      <i class="fas fa-fw fa-users"></i>
      <span>KULLANICILAR</span>
    </a>
    
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#" onClick={this.Urunler}>
    <i class="fas fa-fw fa-"></i>
      <span>ÜRÜNLER</span></a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#" onClick={this.KategoriPage}>
      <i class="fas fa-fw fa-table"></i>
      <span>Kategoriler</span></a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#" onClick={this.Duyuru}>
      <i class="fas fa-fw fa-table"></i>
      <span>Duyuru Yap</span></a>
  </li>
</ul>

    <div id="content-wrapper">
      {icerik}
      </div>
    <footer class="sticky-footer">
    <div class="container my-auto">
      <div class="copyright text-center my-auto">
        <span>Copyright © Your Website 2019</span>
      </div>
    </div>
  </footer>

</div>

<a class="scroll-to-top rounded" href="#page-top">
<i class="fas fa-angle-up"></i>
</a>

<div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog" role="document">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
      <button class="close" type="button" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">×</span>
      </button>
    </div>
    <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
    <div class="modal-footer">
      <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
      <a class="btn btn-primary" href="login.html">Logout</a>
    </div>
  </div>
</div>
</div>


    </div>
    </div>
   
        )
    }

}