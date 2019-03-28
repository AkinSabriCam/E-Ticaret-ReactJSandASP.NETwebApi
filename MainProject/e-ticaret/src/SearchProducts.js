import React from 'react';
import './ShopStyle/shop_styles.css';
import './ShopStyle/shop_responsive.css';
import './ShopStyle/plugins/jquery-ui.css';
import {Link,Redirect} from 'react-router-dom';
import $ from 'jquery';	

let Urunler = [];

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

    prod(id){
        this.setState({ProductDetail:id});
    }

    render() {
        Urunler = this.state.Products.map((urun,ind) => {
            return (
				<div>				
					<div className="product_grid_border"></div>
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
				</div>
			)
        })
        
        return (
            <div>
                <div className="home">
                    <div className="home_overlay"></div>
                    <div className="home_content d-flex flex-column align-items-center justify-content-center">
                        <h2 className="home_title">{this.state.altKategori}</h2>
                    </div>
                </div>
                <div className="container">
                    <div className="shop">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3">
                                    <div className="shop_sidebar">
                                        <div className="sidebar_section">
                                            <div className="sidebar_title">Categories</div>
                                            <ul className="sidebar_categories">
                                                <li><a href="#">NoteBook</a></li>
                                                <li><a href="#">Laptop</a></li>
                                                <li><a href="#">Masa Üstü</a></li>
                                                <li><a href="#">Gamebook</a></li>
                                                <li><a href="#">2 si 1 Arada</a></li>
                                            </ul>
                                        </div>
                                        <div className="sidebar_section filter_by_section">
                                            <div className="sidebar_title">Filter By</div>
                                            <div className="sidebar_subtitle">Price</div>
                                            <div className="filter_price">
                                                <div id="slider-range" className="slider_range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content">
                                                    <div className="ui-slider-range ui-corner-all ui-widget-header" style={{left:"0%", width:"100%"}}></div>
                                                    <span tabindex="0" className="ui-slider-handle ui-corner-all ui-state-default" style={{left:"0%"}}></span>
                                                    <span tabindex="0" className="ui-slider-handle ui-corner-all ui-state-default" style={{left:"100%"}}></span>
                                                </div>
                                                <p>Range: </p>
                                                <p><input type="text" id="amount" className="amount" readonly style={{border:0, fontWeight:"bold"}} /></p>
                                            </div>
                                        </div>
                                        <div className="sidebar_section">
                                            <div className="sidebar_subtitle color_subtitle">Color</div>
                                            <ul className="colors_list">
                                                <li className="color"><a href="#" style={{background: "#b19c83"}}></a></li>
                                                <li className="color"><a href="#" style={{background: "#000000"}}></a></li>
                                                <li className="color"><a href="#" style={{background: "#999999"}}></a></li>
                                                <li className="color"><a href="#" style={{background: "#0e8ce4"}}></a></li>
                                                <li className="color"><a href="#" style={{background: "#df3b3b"}}></a></li>
                                                <li className="color"><a href="#" style={{background: "#ffffff", border: "solid 1px #e1e1e1"}}></a></li>
                                            </ul>
                                        </div>
                                        <div className="sidebar_section">
                                            <div className="sidebar_subtitle brands_subtitle">Brands</div>
                                            <ul className="brands_list">
                                                    <li className="brand"><a href="#">ASUS</a></li>
                                                    <li className="brand"><a href="#">MSI</a></li>
                                                    <li className="brand"><a href="#">TOSHIBA</a></li>
                                                    <li className="brand"><a href="#">HP</a></li>
                                                    <li className="brand"><a href="#">LENOVO</a></li>
                                                    <li className="brand"><a href="#">APPLE</a></li>                                              
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-9">
                                    <div className="shop_content">
                                        <div className="shop_bar clearfix">
                                            <div className="shop_product_count"><span>{this.state.Products.length}</span> products found</div>
                                            <div className="shop_sorting">
                                                <span>Sort by:</span>
                                                <ul>
                                                    <li>
                                                        <span id="spanOrder" className="sorting_text">---<i className="fas fa-chevron-down"></i></span>
                                                        <ul>
                                                                <li className="shop_sorting_button" data-isotope-option='{ "sortBy": "original-order" }'>En Çok Satanlar</li>
                                                                <li className="shop_sorting_button" data-isotope-option='{ "sortBy": "name" }' onClick={this.OrderByNameASC}>Ad A->Z</li>
                                                                <li className="shop_sorting_button"data-isotope-option='{ "sortBy": "price" }'>Ad Z->A</li>
                                                                <li className="shop_sorting_button"data-isotope-option='{ "sortBy": "price" }'>Fiyat Artan </li>
                                                                <li className="shop_sorting_button"data-isotope-option='{ "sortBy": "price" }'>Fiyat Azalan</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product_grid">
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