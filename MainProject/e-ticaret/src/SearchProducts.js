
import React from 'react';
import './ShopStyle/shop_styles.css';
import './ShopStyle/shop_responsive.css';
import './ShopStyle/plugins/jquery-ui.css';
import {Link,Redirect} from 'react-router-dom';
import $ from 'jquery';	

const styleSpan = {
	fontSize: '14px',
	fontWeight: 500,
    textAlign: 'center',
	visibility:'hidden',
	color: '#0e8ce4',
	marginLeft:180,
};
const styleButton = {
    fontSize: '14px',
    fontWeight: 500,
    textAlign: 'center',
    color: 'rgba(0,0,0,0.5)',
    visibility:'hidden',	
    marginLeft:10,
};

export class SearchProducts extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            Products:[],
            ProductDetail:0,
        }
     this.prod=this.prod.bind(this);
    }
    
    componentDidMount(){
        this.fetchInvoice();		
    }

    componentWillUnmount() {
        this.ignoreLastFetch = true;
    }

    fetchInvoice = () => {
        const {searchText} = this.props.location.state;
        if(searchText != null){
            console.log(searchText);
        }else{
            console.log("parametre hatalı");
        }
            
        fetch("http://localhost:50040/api/Urunler/GetProductsBySearch?search="+searchText).then(data=>data.json())
        .then(result=>this.setState({Products:result})) 
        .catch(error=>console.log("error"));
    }

    componentDidUpdate (prevProps) {
        let oldId = prevProps.location.state;
        let newId = this.props.location.state;
        if (newId !== oldId)
            this.fetchInvoice();
    }

    prod(id){
        this.setState({ProductDetail:id});
    }

    OrderByBestSeller = () => {
        const {searchText} = this.props.location.state;
        if(searchText!=null){
            console.log(searchText);
        }else{
            console.log("parametre hatalı");
        }

        fetch("http://localhost:50040/api/Urunler/GetProductsByBestSellersInSearch?search="+searchText).then(data=>data.json())
        .then(result=>this.setState({Products:result}))
        .catch(error=>console.log("error"));

        $(function () {
            $("#spanOrder").text("En Çok Satanlar")
        });	
        document.getElementById("clear").style.visibility = "hidden";
        document.getElementById("filterItem").style.visibility = "hidden";
        document.getElementById("filtrele").disabled = false;
        $(function () {
            $("#filterItem").text("");
        });			
    }

    OrderByNameASC = () => {
        const {searchText} = this.props.location.state;
        if(searchText!=null){
            console.log(searchText);
        }else{
            console.log("parametre hatalı");
        }

        fetch("http://localhost:50040/api/Urunler/GetProductsByNameASCInSearch?search="+searchText).then(data=>data.json())
        .then(result=>this.setState({Products:result}))
        .catch(error=>console.log("error"));

        $(function () {
            $("#spanOrder").text("Ad A->Z")
        });
        document.getElementById("clear").style.visibility = "hidden";
        document.getElementById("filterItem").style.visibility = "hidden";
        document.getElementById("filtrele").disabled = false;
        $(function () {
            $("#filterItem").text("");
        });				
    }
    OrderByNameDESC = () => {
        const {searchText} = this.props.location.state;
        if(searchText!=null){
            console.log(searchText);
        }else{
            console.log("parametre hatalı");
        }

        fetch("http://localhost:50040/api/Urunler/GetProductsByNameDESCInSearch?search="+searchText).then(data=>data.json())
    .then(result=>this.setState({Products:result}))
        .catch(error=>console.log("error"));

        $(function () {
            $("#spanOrder").text("Ad Z->A")
        });	
        document.getElementById("clear").style.visibility = "hidden";
        document.getElementById("filterItem").style.visibility = "hidden";
        document.getElementById("filtrele").disabled = false;
        $(function () {
            $("#filterItem").text("");
        });			
    }
    OrderByPriceASC = () => {
        const {searchText} = this.props.location.state;
        if(searchText!=null){
            console.log(searchText);
        }else{
            console.log("parametre hatalı");
        }

        fetch("http://localhost:50040/api/Urunler/GetProductsByPriceASCInSearch?search="+searchText).then(data=>data.json())
    .then(result=>this.setState({Products:result}))
        .catch(error=>console.log("error"));

        $(function () {
            $("#spanOrder").text("Fiyat Artan")
        });
        document.getElementById("clear").style.visibility = "hidden";
        document.getElementById("filterItem").style.visibility = "hidden";
        document.getElementById("filtrele").disabled = false;
        $(function () {
            $("#filterItem").text("");
        });				
    }
    
    OrderByPriceDESC = () => {
        const {searchText} = this.props.location.state;
        if(searchText!=null){
            console.log(searchText);
        }else{
            console.log("parametre hatalı");
        }

        fetch("http://localhost:50040/api/Urunler/GetProductsByPriceDESCInSearch?search="+searchText).then(data=>data.json())
        .then(result=>this.setState({Products:result}))
        .catch(error=>console.log("error"));

        $(function () {
            $("#spanOrder").text("Fiyat Azalan")
        });			
        document.getElementById("clear").style.visibility = "hidden";
        document.getElementById("filterItem").style.visibility = "hidden";
        document.getElementById("filtrele").disabled = false;
        $(function () {
            $("#filterItem").text("");
        });
    }

    getFilterByPrice = () => {
        const {searchText} = this.props.location.state;
        var valMin = document.getElementById("min").value;
        var valMax = document.getElementById("max").value;

        fetch("http://localhost:50040/api/Urunler/GetFilterByPriceInSearch?search="+searchText+"&min="+valMin+"&max="+valMax).then(data=>data.json())
        .then(result=>this.setState({Products:result}))
        .catch(error=>console.log("error"));

        document.getElementById("clear").style.visibility = "visible";
        document.getElementById("filterItem").style.visibility = "visible";
        document.getElementById("filtrele").disabled = true;
        $(function () {
            let val = $("#filterItem").text();

            if(val!="")
               val+="?search=";
            $("#filterItem").text(val+"Fiyat: "+valMin+"-"+valMax);
        });
    }

    getFilterByBrand = (a) => {
        const {searchText} = this.props.location.state;
        let markaAd = a;
            
        if(searchText!=null){
            console.log(searchText);
        }else{
            console.log("parametre hatalı");
        }
    
        fetch("http://localhost:50040/api/Urunler/GetFilterByBrandInSearch?search="+searchText+"&marka="+markaAd).then(data=>data.json())
        .then(result=>this.setState({Products:result}))
        .catch(error=>console.log("error"));	
        
        document.getElementById("clear").style.visibility = "visible";
        document.getElementById("filterItem").style.visibility = "visible";
        $(function () {
            let val = $("#filterItem").text();

            val = "";

            $("#filterItem").text(val+"Marka: "+markaAd);
        });
    }

    filterClear = () => {
        const {searchText} = this.props.location.state;
        if(searchText != null){
            console.log(searchText);
        }else{
            console.log("parametre hatalı");
        }
        
        fetch("http://localhost:50040/api/Urunler/GetProductsBySearch?search="+searchText).then(data=>data.json())
        .then(result=>this.setState({Products:result}))
        .catch(error=>console.log("error"));

        document.getElementById("clear").style.visibility = "hidden";
        document.getElementById("filterItem").style.visibility = "hidden";
        document.getElementById("filtrele").disabled = false;
        $(function () {
            $("#filterItem").text("");
        });
    }

    render() {
        let Urunler = this.state.Products.map((urun,ind) => {
            return (					
                <div className="product_item is_new">
                    <div className="product_border"></div>
                    <div className="product_image d-flex flex-column align-items-center justify-content-center">
                        <Link to={{pathname:"/ProductDetail",state:{productId:urun.urunID}}}>
                            <img src="https://via.placeholder.com/150" alt="" />
                        </Link>
                    </div>
                    <div className="product_content">
                        <div className="product_price">{urun.fiyat} ₺</div>
                        <div className="product_name"><div><a href="#" tabindex="0">{urun.ad}</a></div></div>
                    </div>
                    <div className="product_fav"><i className="fas fa-heart"></i></div>
                    <ul className="product_marks">
                        <li className="product_mark product_discount">-25%</li>
                        <li className="product_mark product_new">new</li>
                    </ul>
                </div>
			)
        })

        let Marka = this.state.Products.map((urun,ind) => {
            return(
                urun.marka
            )
        })
        let uniqueBrands = [...new Set(Marka)];
        let Markalar = uniqueBrands.map((marka,ind) => {						
            return(
                <li><button type="button" id={marka} onClick={this.getFilterByBrand.bind(this, marka)} className="btn btn-link">{marka}</button></li>
            )
        })		

        const {searchText} = this.props.location.state;
        return(
            <div>
                <div className="home">
                    <div className="home_overlay"></div>
                    <div className="home_content d-flex flex-column align-items-center justify-content-center">
                        <h2 className="home_title">"{searchText}" Arama Sonuçları</h2>
                    </div>
                </div>

                <div className="container">
                    <div className="shop">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3">
                                    <div className="shop_sidebar">
                                        <div className="sidebar_section filter_by_section">
                                                <div className="sidebar_title">Filter By</div>
                                                <div className="sidebar_subtitle brands_subtitle">Brands</div>
                                                <ul className="brands_list">
                                                    {Markalar}
                                                </ul>
                                        </div>
                                        <div className="sidebar_section">
                        
                                            <div className="sidebar_subtitle">Price</div>
                                            <input id="min" className="form-control form-control-sm" style={{width:80, display:"inline", marginRight:10, marginTop:10}} type="number" min="1" max="999999" placeholder="min"/>
                                            <label> - </label>
                                            <input id="max" className="form-control form-control-sm" style={{width:80, display:"inline", marginLeft:10, marginTop:10}} type="number" min="1" max="999999" placeholder="max"/>
                                            <label style={{marginLeft:10}}> ₺ </label>
                                            <button id="filtrele" type="button" onClick={this.getFilterByPrice} style={{display:"block", marginTop:15}} className="btn btn-outline-info">Filtrele</button>
                                        </div>
                                    </div>

                                </div>

                                <div className="col-lg-9">
                                    <div className="shop_content">
                                        <div className="shop_bar clearfix">
                                            <div className="shop_product_count"><span>{this.state.Products.length}</span> products found</div>                                                                                
                                            
                                            <span id="filterItem" style={styleSpan}></span>
                                            <button id="clear" type="button" className="btn btn-link" onClick={this.filterClear} style={styleButton}>Filtreleri Temizle</button>

                                            <div className="shop_sorting">
                                                <span>Sort by:</span>
                                                <ul>
                                                    <li>
                                                        <span id="spanOrder" className="sorting_text">---<i className="fas fa-chevron-down"></i></span>
                                                        <ul>
                                                            <li className="shop_sorting_button" data-isotope-option='{ "sortBy": "original-order" }' onClick={this.OrderByBestSeller}>En Çok Satanlar</li>
                                                            <li className="shop_sorting_button" data-isotope-option='{ "sortBy": "name" }' onClick={this.OrderByNameASC}>Ad A->Z</li>
                                                            <li className="shop_sorting_button"data-isotope-option='{ "sortBy": "price" }' onClick={this.OrderByNameDESC}>Ad Z->A</li>
                                                            <li className="shop_sorting_button"data-isotope-option='{ "sortBy": "price" }' onClick={this.OrderByPriceASC}>Fiyat Artan </li>
                                                            <li className="shop_sorting_button"data-isotope-option='{ "sortBy": "price" }' onClick={this.OrderByPriceDESC}>Fiyat Azalan</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product_grid">
                                            <div className="product_grid_border"></div>
                                                {Urunler}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
    }
}
export default SearchProducts;