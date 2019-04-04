import React, { Component } from 'react'
import $ from 'jquery';	
import Cookies from 'js-cookie';

export class SuggestProductModal extends Component {

    constructor(){
		super();
		this.state={
            Product:{},
            isOpen:false
        }
        setInterval(function (){ 
            this.setState({isOpen:true});  
        },60000);
    }
 
    modal = () => {
        this.setState({isOpen:false});
    }
    
    ShowModal = () => {            
        const userId = Cookies.get("kullaniciID");           
        fetch("http://localhost:50040/api/Urunler/SuggestProductToUser/1"/*+userId*/).then(data=>data.json())
        .then(result=>this.setState({Products:result}))
        .catch(error=>console.log("error"));
    }

    render() {
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
                                <img src="https://via.placeholder.com/150" alt="" />
                            </p>
                            </div>

                            <div class="col-9">
                                
                                <p>
                                    {this.state.Product.marka}
                                </p>
                                <p>
                                    <strong>{this.state.Product.adet}</strong>
                                </p>
                                <p>
                                    <h4><strong>{this.state.Product.fiyat} ₺</strong></h4>
                                </p>

                            </div>
                        </div>
                    </div>

                    <div class="modal-footer flex-center">
                    <a href="https://mdbootstrap.com/products/jquery-ui-kit/" class="btn btn-danger">Ürüne Git
                        <i class="far fa-gem ml-1 white-text"></i>
                    </a>
                    <a type="button" class="btn btn-outline-danger waves-effect" data-dismiss={this.modal} >Kapat</a>
                    </div>
                </div>

                </div>
        </div>
        )
    }
}
export default SuggestProductModal;