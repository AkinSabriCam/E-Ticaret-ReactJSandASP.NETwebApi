import React from 'react'
import Cookies from 'js-cookie';

export  class KullaniciGuncelle  extends React.Component{
  constructor(props){
      super(props);
      this.state={
            User:{},
            Iller:[],
            Ilceler:[],
      }
      this.Guncelle=this.Guncelle.bind(this);
    }
    componentDidMount(){
        fetch("http://localhost:50040/api/Users/GetUserById/1007")
        .then(data=>data.json())
        .then(result=>{
            this.setState({User:result});
        })
        
        .catch(err=>{console.log(err)});

        // Il ve ilceleri almak için bir fetch daha kullanıyorum
        fetch("http://localhost:50040/api/Iletisim/GetAllCity")
        .then(data=>data.json())
        .then(result=>{
            this.setState({Iller:result.Iller});
            this.setState({Ilceler:result.Ilceler});

        })
        
        .catch(err=>{console.log(err)});
    }
    Guncelle(){
        let ad=document.getElementById("ad").value;
        let soyad=document.getElementById("soyad").value;
        let email=document.getElementById("e-mail").value;
        let username=document.getElementById("kullaniciad").value;
        let sifre=document.getElementById("sifre").value;
        let cinsiyet=document.getElementById("cinsiyet").value;
        let ilid=document.getElementById("il").value;
        let il=document.getElementById("il").options[document.getElementById("il").selectedIndex].text;
        let ilceid=document.getElementById("ilce").value;
        let ilce=document.getElementById("ilce").options[document.getElementById("ilce").selectedIndex].text;
        let adres=document.getElementById("adres").value;
        let kullaniciId=this.state.User.kullaniciID;
        let rolID=this.state.User.rolID;
        let kayitTarihi=this.state.User.kayitTarihi;    

        let User={
            kullaniciID:kullaniciId,
            ad:ad,
            soyad:soyad,
            cinsiyet:cinsiyet,
            ilID:ilid,
            ilAdi:il,
            ilceID:ilceid,
            ilceAdi:ilce,
            acikAdres:adres,
            kullaniciAdi:username,
            sifre:sifre,
            email:email,
            rolID:rolID,
            kayitTarihi:kayitTarihi,

        }

        fetch("http://localhost:50040/api/Users/PutUser",{
            method:"PUT",
            body:JSON.stringify(User),
            headers:{
                Authorization: "bearer" +Cookies.get("token"),
                "Content-Type":"application/json"
            }
        })
        .then(()=>{console.log("User güncelleme işlemi başarılı olmuştur..")})
        .catch(err=>console.log(err));
    
    }
    
    render(){
        let iller=this.state.Iller.map((il,indeks)=>{
            console.log(this.state.Iller);
            return(  
                <option key={indeks} value={il.ilID}>{il.il1}</option>
            )
         })
             return(
        <div>
                  <div class="home" style={{height:50}}>
		          <div class="home_overlay"></div>
		          <div class="home_content d-flex flex-column align-items-center justify-content-center">
			      <h4 class="home_title">Bilgilerimi Düzenle</h4></div>
	              </div>
                    
            <div class="cart_section" style={{marginTop:-100}}>
              <div class="row">
              <div class="col-lg-10 offset-lg-1">
                  <div class="cart_container">
                      <div class="cart_items">
                          <ul class="cart_list">
                              <li class="cart_item clearfix">
                                  <div class="cart_item_info d-flex flex-md-row flex-column justify-content-between">
                                  <div class="home" ></div>
                            <div class="container" style={{marginRight:150}}>
            <div className="container">
            <form class="form-horizontal" role="form" onSubmit={this.Guncelle}>
            <div className="form-group">
            <label><b>Kullanıcı Adı</b></label>
            <input type="text" className="form-control" id="kullaniciad" value={this.state.User.kullaniciAdi}
            onChange={(e) => {let user=this.state.User; user.kullaniciAdi=e.target.value;this.setState({User: user})}}  />
            </div>
           
            <div className="form-group">
            <label><b>Şifre</b></label>
            <input type="text" className="form-control" id="sifre" value={this.state.User.sifre}
            onChange={(e) => {let user=this.state.User; user.sifre=e.target.value;this.setState({User: user})}}/>
            </div>
            
            <div className="form-group">
            <label><b>E-mail</b></label>
            <input type="text" className="form-control" id="e-mail" value={this.state.User.email}
            onChange={(e) => {let user=this.state.User; user.email=e.target.value;this.setState({User: user})}}/>
            </div>
           <div className="form-group">
            <label><b>Ad </b></label>
            <input type="text" id="ad" className="form-control" value={this.state.User.ad}
            onChange={(e) => {let user=this.state.User; user.ad=e.target.value;this.setState({User: user})}}/>
           </div>
           <div className="form-group">
            <label><b>Soyad </b></label>
            <input type="text" id="soyad" className="form-control" value={this.state.User.soyad}
            onChange={(e) => {let user=this.state.User; user.soyad=e.target.value;this.setState({User: user})}}/>
           </div>
           <div className="form-group">
           <label><b>Cinsiyet</b></label>
           <select id="cinsiyet" className="form-control">
               <option value="true">Erkek</option>
               <option value="false">Kız</option>
           </select>
           </div>
           <div className="form-group">
           <label><b>İl</b></label>
           <select id="il" className="form-control illist">
                {iller}
           </select>
           </div>
           <div className="form-group">
           <label><b>İlçe</b></label>
           <select id="ilce" className="form-control ilcelist">
           </select>
           </div>
           <div className="form-group">
           <label><b>Adres</b></label>
           <input type="textarea" id="adres" className="form-control" value={this.state.User.acikAdres}
           onChange={(e) => {let user=this.state.User; user.acikAdres=e.target.value;this.setState({User: user})}}/>
           </div>
           
           <div className="form-group">
                <button  type="button" className="btn btn-primary" onClick={this.Guncelle}>Güncelle</button>
           </div>
           </form>
           </div>
                    </div>
                    </div>
                    </li>
                    </ul>
                    </div>
                    </div>
                    </div>
                  </div>
                  </div>
    </div>
        )
    }
}
export default KullaniciGuncelle;