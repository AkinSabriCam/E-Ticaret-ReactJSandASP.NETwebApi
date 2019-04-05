import React from 'react'
import { Modal } from 'mdbreact';

export class Kullanicilar extends React.Component{

    constructor(props){
        super(props);
        this.state={
            users:[],
            siparismodal:false,
            products:[]
        }
        this.Close=this.Close.bind(this);
        this.Siparisler=this.Siparisler.bind(this);
    }
   componentDidMount(){
       fetch("http://localhost:50040/api/Users/GetAllUsers")
       .then(data=>data.json())
       .then(result=>this.setState({users:result}))
       .catch(err=>alert(err));
   }

   Siparisler(id){
        this.setState({siparismodal:true},()=>{
            fetch("http://localhost:50040/api/Urunler/GetSellerProductsByUserId/"+id)
            .then(data=>data.json())
            .then(result=>this.setState({products:result}))
            .catch(err=>alert(err));
        })
   }
   Close(){
       this.setState({siparismodal:false});
   }
    render(){
        let Users=this.state.users.map((user,ind)=>{
            return(
                <tr>
                <td>{user.ad}</td>
                <td>{user.soyad}</td>
                <td>{user.kullaniciAdi}</td>
                <td>{user.kayitTarihi}</td>
                <td><a className="btn btn-warning" onClick={()=>this.Siparisler(user.kullaniciID)}>Siparisler</a></td>
                </tr>
            )
        })
        let Products=this.state.products.map((urun,ind)=>{
            return(
                <tr>
                    <td>{urun.ad}</td>
                    <td>{urun.adet}</td>
                    <td>{urun.fiyat}₺</td>
                    <td>{urun.altkategori}</td>
                    <td>{urun.eklenmeTarihi}</td>
                </tr>
            )
        });
        if(this.state.siparismodal){
        return(    <Modal isOpen="true">
                <table className="table table-hover">
                    <tr>
                        <th>Ürün Adı</th>
                        <th>Ürün Adeti</th>
                        <th>Ürün Fiyatı</th>
                        <th>Ürün Kategorisi</th>
                        <th>Ürün Eklenme Tarihi</th>
                    </tr>
                    {Products}
                </table>
                <button type="button" onClick={this.Close}>Sayfayı Kapat</button>
            </Modal>
        )}
        return(
            <table className="table table-hover">
            <tr>
                <th>Ad</th>
                <th>Soyad</th>
                <th>Kullanıcı Adı</th>
                <th>Kayıt Tarihi</th>
                <th></th>
            </tr>
                {Users}
            </table>
        )
    }


}