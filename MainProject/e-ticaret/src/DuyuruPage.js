import React from 'react'

export class DuyuruPage extends React.Component{

    constructor(props){
        super(props);
        this.DuyuruEkle=this.DuyuruEkle.bind(this);
    }
    DuyuruEkle(){
        let Duyuru={
            icerik:document.getElementById("duyurubaslik").value+document.getElementById("duyuru").value
        }
        fetch("http://localhost:50040/api/Duyuru/Post",{
            method:"POST",
            body:JSON.stringify(Duyuru),
            headers:{
                "Content-type":"application/json"
            }
        })
        .then(result=>{
            if(result.ok){
                alert("Duyuru işlemi gerçekleştirilmiştir");
            }else{
                alert("Duyuru işlemi başarısız olmuştur");
            }
        })
        .catch(err=>console.log(err));
    }
    render(){
        return(
            <form onSubmit={this.DuyuruEkle}>
                <div className="form-group"> 
                <label>Duyuru Başlığı</label>
                <input type="text" className="form-control" id="duyurubaslik"/> 
                </div>
                
                <div className="form-group"> 
                <label>Duyuru İçeriği</label>
                <textarea className="form-control" id="duyuru"></textarea> 
                </div> 
                <div className="form-groups">
                <button type="button" className="btn btn-dark" onClick={this.DuyuruEkle}>Duyuru Ekle</button>
                </div>
            </form>
        )
    }

}