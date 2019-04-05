import React from 'react'
import {Bar} from 'react-chartjs-2';
import{AdminDashboard} from './AdminDashboard'

export class KullaniciKayitLogPage extends React.Component{

    constructor(props){
        super(props);
        this.state={
            KayitLog:{},
            modal:true,
            Admindashboard:false
        }
        this.Close=this.Close.bind(this);
    }
    componentDidMount(){
         
       fetch("http://localhost:50040/api/KullaniciLog/GetLogKullanici")
        .then(data=>data.json())
        .then(result=>{this.setState({KayitLog:result})})
        .catch(err=>alert(err));
    }

    Close(){
        this.setState({modal:false,Admindashboard:true},()=>{
            console.log(this.state.Admindashboard);
        });
    }

    render(){
        const data={
            labels:["Günlük Kayıt","Haftalık Kayıt", "Toplam Kayıt"],
            datasets:[{
            label: "Site Tıklanma Sayıları",
            backgroundColor: '#0575e6',
            borderColor: 'rgb(255, 99, 132)',
            data: [this.state.KayitLog.gunlukKayit,this.state.KayitLog.haftalikKayit,this.state.KayitLog.toplamKayit],
            }]
        }
        if(this.state.Admindashboard){
            return(<AdminDashboard></AdminDashboard>)
        }
        return(
            <div  style={{height:"500px",width:"800px",textAlign:"center",margin:"auto"}}>
                < Bar  
                    data={data}
                  />
            <button type="button" className="btn btn-danger" onClick={this.Close}>İstatistik Sayfasına Git</button>
            </div>

        )


    }


}