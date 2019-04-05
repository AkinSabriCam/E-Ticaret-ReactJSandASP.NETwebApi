import React from 'react'
import {Bar, Pie} from 'react-chartjs-2';
import {AdminDashboard} from './AdminDashboard';
export class FiveBestSellerProductsPage extends React.Component{

    constructor(props){
        super(props);
        this.state={
            Products:[],
            istatistik:false
        }
        this.Close=this.Close.bind(this);
    }
    componentDidMount(){
        fetch("http://localhost:50040/api/Urunler/GetFiveBestSellerProduts")
        .then(data=>data.json())
        .then(result=>this.setState({Products:result}))
        .catch(err=>alert(err));
    }
    Close(){
        this.setState({istatistik:true});
    }
    render(){
        if(this.state.istatistik){
            return ( <AdminDashboard></AdminDashboard>)
        }
        const data={
            labels:this.state.Products.map((urun,ind)=>{return(urun.ad)}),
            datasets:[{
            label: "En Çok Satın Alınan 5 Ürün",
            backgroundColor:['#FF6384',
            '#36A2EB',
            '#FFCE56',"black","yellow"],
            borderColor: 'rgb(255, 99, 132)',
            data:this.state.Products.map((urun,ind)=>{return(urun.adet)}),
            }]
        }
        return(
            <div style={{margin:"auto" ,height:"1000px" ,width:"1000px"}}>
             <Pie
                    data={data}
                  />
            <button type="button" className="btn btn-danger" onClick={this.Close}>İstatistik Sayfasına Git</button>
            </div>
        )

    }


}