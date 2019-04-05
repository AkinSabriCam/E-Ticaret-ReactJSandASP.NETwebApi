import React from 'react'
import {Link} from 'react-router-dom'
import {AdminDashboard} from './AdminDashboard'
import {Chart} from 'react-charts';
 import {Bar} from 'react-chartjs-2';
import { Modal } from 'mdbreact';


export class SiteClickPage extends React.Component{

    constructor(props){
        super(props);
        this.state={
            Admindashboard:false,
            LogBilgileri:{},
            modal:true
        }
        this.Close=this.Close.bind(this);
    }
    componentDidMount(){

        fetch("http://localhost:50040/api/ZiyaretLog/GetLog")
        .then(data=>data.json())
        .then(result=>this.setState({LogBilgileri:result}))
        .catch(err=>alert(err));

    }
    Close(){
        this.setState({modal:false,Admindashboard:true},()=>{
            console.log(this.state.Admindashboard);
        });
    }
    render(){
        const data={
            labels:["Günlük Ziyaret","Haftalık Ziyaret", "Toplam Ziyaret"],
            datasets:[{
            label: "Site Tıklanma Sayıları",
            backgroundColor: '#0575e6',
            borderColor: 'rgb(255, 99, 132)',
            data: [this.state.LogBilgileri.gunlukZiyaret,this.state.LogBilgileri.haftalikZiyaret,this.state.LogBilgileri.toplamZiyaret],
            }]
        }
        if(this.state.Admindashboard){
            return (<AdminDashboard></AdminDashboard>)
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