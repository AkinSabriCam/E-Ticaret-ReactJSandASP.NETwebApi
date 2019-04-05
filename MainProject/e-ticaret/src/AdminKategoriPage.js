import React from 'react'
import { Modal } from 'mdbreact';



export class AdminKategoriPage extends React.Component{

    constructor(props){
        super(props);
        this.state={
            kategoriler:[],
            yenikategori:false,
            yenialtkategori:false,
            promosyon:false,
            kategoriID:0
        }
        this.YeniAltKategori=this.YeniAltKategori.bind(this);
        this.YeniKategori=this.YeniKategori.bind(this);
        this.YeniKategoriEkle=this.YeniKategoriEkle.bind(this);
        this.YeniAltKategoriEkle=this.YeniAltKategoriEkle.bind(this);
        this.YeniKategoriClose=this.YeniKategoriClose.bind(this);
        this.YeniAltKategoriClose=this.YeniAltKategoriClose.bind(this);
        this.Promosyon=this.Promosyon.bind(this);
        this.PromosyonClose=this.PromosyonClose.bind(this);
        this.PromosyonEkle=this.PromosyonEkle.bind(this);
    }
    componentDidMount(){
       
         fetch("http://localhost:50040/api/Kategoriler/GetAllSingleKategori")
        .then(data=>data.json())
        .then(result=>{this.setState({kategoriler:result})})
        .catch(err=>console.log(err))
    }
    YeniKategori(){
        this.setState({yenikategori:true})
    }
    YeniAltKategori(){
        this.setState({yenikategori:false,yenialtkategori:true});
    }
    YeniKategoriEkle(){
        let kategori={
            kategori1:document.getElementById("kategoriad").value
        }
         
        this.setState({yenikategori:false},()=>{
            fetch("http://localhost:50040/api/Kategoriler/PostCategory",{
                method:"POST",
                body:JSON.stringify(kategori),
                headers:{
                    "Content-type":"application/json"
                }
             })
             .then(result=>{
                if(result.ok){
                    fetch("http://localhost:50040/api/Kategoriler/GetAllSingleKategori")
                    .then(data=>data.json())
                    .then(result=>{this.setState({kategoriler:result},()=>{alert("Kategori Ekleme işlemi tamamlanmıştır.")})})
                    .catch(err=>console.log(err))
                }else{
                    alert("Kategori işlemi gerçekleşmedi !!");
                }
             })
             .catch(err=>{console.log(err)});
        })
    }
    YeniAltKategoriEkle(){
        let AltKategori={
            altkategori:document.getElementById("altkategori").value,
            kategoriID:document.getElementById("kategoriid").value
        }

        fetch("http://localhost:50040/api/Kategoriler/PostAltKategori",{
            method:"post",
            body:JSON.stringify(AltKategori),
            headers:{
                "Content-type":"application/json"
            }
        })
        .then(result=>{
                if(result.ok){
                    this.setState({yenialtkategori:false});
                }else{
                    alert("Alt kategori ekleme işleminde bir problem oluştu");
                }
        })
        .catch(err=>alert(err));
    }
    YeniAltKategoriClose(){
        this.setState({yenialtkategori:false});
    }
    YeniKategoriClose(){
        this.setState({yenikategori:false});
    }
    Promosyon(id){
        this.setState({promosyon:true,kategoriID:id});
    }
    PromosyonEkle(){
        if(document.getElementById("promosyon").value<100 && document.getElementById("promosyon").value>0){
            let Promosyon ={
                promosyonOrani:document.getElementById("promosyon").value,
                kategoriID:this.state.kategoriID
            }
            fetch("http://localhost:50040/api/Urunler/DoPromosyonForCategory",{
                method:"put",
                body:JSON.stringify(Promosyon),
                headers:{
                    "Content-type":"application/json"
                }
            })
            .then(result=>{
                    if(result.ok){
                        this.setState({promosyon:false},()=>{
                            alert("Promosyon işlemi gerçekleştirilmiştir");
                        })
                    }else{
                        alert("Promosyon İşlemi Gerçekleştirilemedi")
                    }
            })
            .catch(err=>alert(err));
        }
        else{
            alert("Lütfen geçerli bir oran giriniz");
        }
    }
    PromosyonClose(){
            this.setState({promosyon:false});
    }
    render(){
        let Kategoriler=this.state.kategoriler.map((kat,ind)=>{
            return(
                <tr>
                    <td>{kat.kategori}</td>
                    <td><button type="button" className="btn btn-danger" onClick={()=>this.Promosyon(kat.kategoriID)}>Promosyon Yap</button></td>
                </tr>
            )
    })
    let SelectKategoriler=this.state.kategoriler.map((kat,ind)=>{
        return(
            <option value={kat.kategoriID}>{kat.kategori}</option>
        )
     })
      if(this.state.promosyon){
          return(
            <Modal isOpen="true">
            <form onSubmit={this.PromosyonEkle}>
                <div className="form-group">
                    <label>Promosyon Oranı:</label>
                    <input type="text" className="form-control" id="promosyon" placeholder="%"></input>
                </div>
                <div className="form-group">
                <button type="button" className="btn btn-dark" onClick={this.PromosyonEkle}>Promosyon Yap</button>
                <button type="button" className="btn btn-dark" onClick={this.PromosyonClose}>Kapat</button>
                </div>
            </form>
        </Modal>
          )
      }
        if(this.state.yenikategori){
           return ( <Modal isOpen="true">
                <form onSubmit={this.YeniKategoriEkle}>
                <div className="form-group">
                <lable>Kategori Adı</lable>
                <input type="text" className="form-control" id="kategoriad" />
                </div>                    
                <div className="form-group">
                <button type="button" className="btn btn-dark" onClick={this.YeniKategoriEkle}>Kategori Ekle</button>
                <button type="button" className="btn btn-dark" onClick={this.YeniKategoriClose}>Kapat</button>
                
                </div>
                </form>
            </Modal>)
        }
        if(this.state.yenialtkategori){
            return ( <Modal isOpen="true">
                 <form onSubmit={this.YeniAltKategoriEkle}>
                 
                 <div className="form-group">
                 <lable>Kategori</lable>
                 <select className="form-control" id="kategoriid">
                  {SelectKategoriler}
                  </select>
                 </div>   
                 
                 <div className="form-group">
                 <lable>Altkategori Adı</lable>
                 <input type="text" className="form-control" id="altkategori" />
                 </div>                    
                 <div className="form-group">
                 <button type="button" className="btn btn-dark" onClick={this.YeniAltKategoriEkle}>Alt Kategori Ekle</button>
                 <button type="button" className="btn btn-dark" onClick={this.YeniAltKategoriClose}>Kapat</button>
                 
                 </div>
                 </form>
             </Modal>)
         }
     
        return( 
            <div>
                < a className="btn btn-success" onClick={this.YeniKategori}>Yeni Kategori Ekle</a>
                
                < a className="btn btn-primary" onClick={this.YeniAltKategori}>Yeni AltKategori Ekle</a>
                <table className="table table-hover">
                    <tr>
                        <th>Kategori Adı</th>
                      <th></th>
                    </tr>
                    {Kategoriler}
            </table>
            </div>
        )
    
    }


}