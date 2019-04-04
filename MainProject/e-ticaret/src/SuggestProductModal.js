import React, { Component } from 'react'
import $ from 'jquery';	
import Cookies from 'js-cookie';
import {Link,Redirect} from 'react-router-dom';
import {App} from './App.js'

export class SuggestProductModal extends Component {

    constructor(){
		super();
		this.state={
            Product:{},
            isOpen:true,
            home:false
        }
        this.Close=this.Close.bind(this);
    }

    componentDidMount = () => {
        this.setState({isOpen:true});  
        const userId = Cookies.get("kullaniciID");           
        fetch("http://localhost:50040/api/Urunler/SuggestProductToUser/1"/*+userId*/).then(data=>data.json())
        .then(result=>this.setState({Product:result}))
        .catch(error=>console.log("error"));
    }
    

    Close = () => {
        this.setState({isOpen:false,home:true});
    }
    
    render() {
        if(this.state.home)
        {return(<App> </App>)}
        return (
        <div>
                <button type="button" class="btn btn-primary" isOpen={this.state.isOpen} data-toggle="modal" data-target="#modalDiscount">Launch modal</button>

                <div class="modal-dialog modal-side modal-bottom-right modal-notify modal-danger" role="document">

                    <div class="modal-content">

                    <div class="modal-header">
                    <p class="heading">Bu ürün ilginizi çekebilir:
                        <strong>{this.state.Product.ad}</strong>
                    </p>

                    <button type="button" class="close" data-dismiss={this.modal}  aria-label="Close">
                        <span aria-hidden="true" class="white-text">&times;</span>
                    </button>
                    </div>

                    <div class="modal-body">
                        <div class="row">
                            <div class="col-3">
                            <p></p>
                            <p class="text-center">
                                <img src="https://via.placeholder.com/600" alt="" />
                            </p>
                            </div>

                            <div class="col-9">
                                
                                <p>
                                    {this.state.Product.marka}
                                </p>
                                <p>
                                    <strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Vestibulum lobortis diam non ultricies malesuada. 
                                        Morbi lobortis hendrerit sem eu imperdiet. 
                                        Cras consectetur velit non ornare ultrices. Cras facilisis quis sapien et porta. 
                                       </strong>
                                </p>
                                <p>
                                    <h4><strong>{this.state.Product.fiyat} ₺</strong></h4>
                                </p>

                            </div>
                        </div>
                    </div>

                    <div class="modal-footer flex-center">
                    <Link to={{pathname:"/ProductDetail",state:{productId:this.state.Product.urunID}}}>
                        <a class="btn btn-danger">Ürüne Git
                            <i class="far fa-gem ml-1 white-text"></i>
                        </a>
                    </Link>
                    <a type="button" class="btn btn-outline-danger waves-effect" onClick={this.Close}>Kapat</a>
                    </div>
                </div>

                </div>
        </div>
        )
    }
}
export default SuggestProductModal;