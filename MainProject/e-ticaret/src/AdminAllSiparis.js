import React from 'react'


export class AdminAllSiparis extends React.Component{

    constructor(props){
        super(props);
     this.state={
         Products:[]
       }
    }
    componentDidMount(){
        fetch("http://localhost:50040/api/Urunler/GetAllSellerProducts")
        .then(data=>data.json())
        .then(result=>this.setState({Products:result}))
        .catch(err=>alert(err));
    }
    render()
    {   let Urunler=this.state.Products.map((urun,ind)=>{
          return(
            <tr>
                <td>{urun.ad}</td>
                <td>{urun.adet}</td>
                <td>{urun.fiyat}</td>
                <td>{urun.marka}</td>
                <td>{urun.altkategori}</td>
                <td>{urun.kullaniciAdi}</td>
                
            </tr>
          )
    })
        return(
            <table className="table table-hover">
            <tr>
                <th>Ürün Adı</th>
                <th>Ürün Adeti</th>
                <th>Ürün Fiyatı</th>
                <th>Ürün Markası</th>
                <th>Ürün Kategorisi</th>
                <th>Satın Alan Kullanıcı</th>
            </tr>
               {Urunler}
            </table>
        )
    }
}