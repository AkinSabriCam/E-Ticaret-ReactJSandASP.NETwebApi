
    import React from 'react';
    import './ShopStyle/shop_styles.css';
		import './ShopStyle/shop_responsive.css';
		import './ShopStyle/plugins/jquery-ui.css';
		import {Link,Redirect} from 'react-router-dom';
		import $ from 'jquery';	
		import {Checkbox} from 'react-mdl';			
						
    export class ProductsByCategory extends React.Component {

			constructor(props) {
				super(props);
				this.state={
					Products:[],
					Shop:false,
					ProductDetail:0,
				}
			 this.prod=this.prod.bind(this);
			}

	   	componentDidMount(){
				const {subCatId} = this.props.location.state;
				if(subCatId != null){
					console.log(subCatId);
				}else{
					console.log("parametre hatalı");
				}
				
				fetch("http://localhost:50040/api/Urunler/GetProductsByCategory/"+subCatId).then(data=>data.json())
    		.then(result=>this.setState({Products:result}))
				.catch(error=>console.log("error"));			
			}

			prod(id){
				this.setState({Shop:true, ProductDetail:id});
			}

			OrderByBestSeller = () => {
				const {subCatId} = this.props.location.state;
				if(subCatId!=null){
					console.log(subCatId);
				}else{
					console.log("parametre hatalı");
				}

				fetch("http://localhost:50040/api/Urunler/GetProductsOrderByBestSellers/"+subCatId).then(data=>data.json())
    		.then(result=>this.setState({Products:result}))
				.catch(error=>console.log("error"));
	
				$(function () {
						$("#spanOrder").text("En Çok Satanlar")
				});				
			}

			OrderByNameASC = () => {
				const {subCatId} = this.props.location.state;
				if(subCatId!=null){
					console.log(subCatId);
				}else{
					console.log("parametre hatalı");
				}

				fetch("http://localhost:50040/api/Urunler/GetProductsByNameASC/"+subCatId).then(data=>data.json())
    		.then(result=>this.setState({Products:result}))
				.catch(error=>console.log("error"));
	
				$(function () {
						$("#spanOrder").text("Ad A->Z")
				});				
			}
			OrderByNameDESC = () => {
				const {subCatId} = this.props.location.state;
				if(subCatId!=null){
					console.log(subCatId);
				}else{
					console.log("parametre hatalı");
				}

				fetch("http://localhost:50040/api/Urunler/GetProductsByNameDESC/"+subCatId).then(data=>data.json())
    		.then(result=>this.setState({Products:result}))
				.catch(error=>console.log("error"));
	
				$(function () {
						$("#spanOrder").text("Ad Z->A")
				});				
			}
			OrderByPriceASC = () => {
				const {subCatId} = this.props.location.state;
				if(subCatId!=null){
					console.log(subCatId);
				}else{
					console.log("parametre hatalı");
				}

				fetch("http://localhost:50040/api/Urunler/GetProductsByPriceASC/"+subCatId).then(data=>data.json())
    		.then(result=>this.setState({Products:result}))
				.catch(error=>console.log("error"));
	
				$(function () {
						$("#spanOrder").text("Fiyat Artan")
				});				
			}
			
			OrderByPriceDESC = () => {
				const {subCatId} = this.props.location.state;
				if(subCatId!=null){
					console.log(subCatId);
				}else{
					console.log("parametre hatalı");
				}

				fetch("http://localhost:50040/api/Urunler/GetProductsByPriceDESC/"+subCatId).then(data=>data.json())
    		.then(result=>this.setState({Products:result}))
				.catch(error=>console.log("error"));
	
				$(function () {
						$("#spanOrder").text("Fiyat Azalan")
				});				
			}

			getFilterCB1 = () => {
					var cb1 = document.getElementById("cb1").checked;
					if(cb1 == true){
							const {subCatId} = this.props.location.state;
							if(subCatId!=null){
							console.log(subCatId);
							}else{
								console.log("parametre hatalı");
							}

							fetch("http://localhost:50040/api/Urunler/GetFilterUnder500/"+subCatId).then(data=>data.json())
							.then(result=>this.setState({Products:result}))
							.catch(error=>console.log("error"));
					}				
			}
			getFilterCB2 = () => {
				var cb2 = document.getElementById("cb2").checked;
				if(cb2 == true){
						const {subCatId} = this.props.location.state;
						if(subCatId!=null){
							console.log(subCatId);
						}else{
							console.log("parametre hatalı");
						}

						fetch("http://localhost:50040/api/Urunler/GetFilterBetween500And1500/"+subCatId).then(data=>data.json())
						.then(result=>this.setState({Products:result}))
						.catch(error=>console.log("error"));
				}				
			}
			getFilterCB3 = () => {
				var cb3 = document.getElementById("cb3").checked;
				if(cb3 == true){
						const {subCatId} = this.props.location.state;
						if(subCatId!=null){
							console.log(subCatId);
						}else{
							console.log("parametre hatalı");
						}

						fetch("http://localhost:50040/api/Urunler/GetFilterBetween1500And2500/"+subCatId).then(data=>data.json())
						.then(result=>this.setState({Products:result}))
						.catch(error=>console.log("error"));
				}				
			}
			getFilterCB4 = () => {
				var cb4 = document.getElementById("cb4").checked;
				if(cb4 == true){
						const {subCatId} = this.props.location.state;
						if(subCatId!=null){
							console.log(subCatId);
						}else{
							console.log("parametre hatalı");
						}

						fetch("http://localhost:50040/api/Urunler/GetFilterBetween2500And4000/"+subCatId).then(data=>data.json())
						.then(result=>this.setState({Products:result}))
						.catch(error=>console.log("error"));
				}				
			}
			getFilterCB5 = () => {
					var cb5 = document.getElementById("cb5").checked;
					if(cb5 == true){
							const {subCatId} = this.props.location.state;
							if(subCatId!=null){
								console.log(subCatId);
							}else{
								console.log("parametre hatalı");
							}

							fetch("http://localhost:50040/api/Urunler/GetFilterOver4000/"+subCatId).then(data=>data.json())
							.then(result=>this.setState({Products:result}))
							.catch(error=>console.log("error"));
					}				
			}

      render() {

				
				const {subCatId} = this.props.location.state;
				$(function() {		
					$(".btn").click(function(){
						let markaAd = $(this).text();
						if(subCatId!=null){
							console.log(subCatId);
						}else{
							console.log("parametre hatalı");
						}
		
						fetch("http://localhost:50040/api/Urunler/GetFilterByBrand?id="+subCatId+"&marka="+markaAd).then(data=>data.json())
						.then(result=>this.setState({Products:result}))
						.catch(error=>console.log("error"));
						window.location.reload();
					});					
				});
				
        
					let Urunler = this.state.Products.map((urun,ind) => {
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

					let altKategoriler = this.state.Products.map((urun,ind) => {
						return(
								urun.altkategori
						)
					})
					let uniqueAltKategori = [...new Set(altKategoriler)];
					let altKategori = uniqueAltKategori.map((altkat,ind) => {
							return(
								<h2 className="home_title">{altkat}</h2>
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
								<li><button type="button" id={marka} className="btn btn-link">{marka}</button></li>
							)
					})		

					return(
							<div>
										<div className="home">
											<div className="home_overlay"></div>
											<div className="home_content d-flex flex-column align-items-center justify-content-center">
													{altKategori}
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
										<form action="#">
											<ul>
												<li><input id="cb1" type="checkbox" onclick={this.getFilterCB1} value="<500" className="mr-sm-2" style={{width:25}}/>500 ₺ Altı</li>
												<li><input id="cb2" type="checkbox" onclick={this.getFilterCB2} value="500 AND 1500" className="mr-sm-2" style={{width:25}}/>500 - 1500 ₺ Arası</li>
												<li><input id="cb3" type="checkbox" onclick={this.getFilterCB3} value="1500 AND 2500" className="mr-sm-2" style={{width:25}}/>1500 - 2500 ₺ Arası</li>
												<li><input id="cb4" type="checkbox" onclick={this.getFilterCB4} value="2500 AND 4000" className="mr-sm-2" style={{width:25}}/>2500 - 4000 ₺ Arası</li>
												<li><input id="cb5" type="checkbox" onclick={this.getFilterCB5} value=">4000" className="mr-sm-2" style={{width:25}}/>4000 ₺ Üstü</li>
											</ul>
									</form>
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
    
