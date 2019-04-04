import React, { Component } from 'react';
import Cookies from 'js-cookie';
import './ContactStyle/contact_styles.css';
import './ContactStyle/contact_responsive.css';
import phone from './img/contact_1.png';
import email from './img/contact_2.png';
import address from './img/contact_3.png';
import { Alert } from 'reactstrap';
import $ from 'jquery';


export class Contact extends Component {
	constructor(){
		super();
		this.state={
				response:true,
				alert:"",
				isOpen:false
		}
	}
	SendMail = (e) => {
		e.preventDefault();
		let name = document.getElementById("contact_form_name").value;
		let lastname = document.getElementById("contact_form_lastname").value;
		let eMail = document.getElementById("contact_form_email").value;
		let message = document.getElementById("contact_form_message").value;

		if(/*Cookies.get("Login")*/"false"=="true"){
			//kullanici login olmuştur.
			let username = Cookies.get("kullaniciAdi");
			let userMail = {
				kullaniciAdi: username,
				ad: name,
				soyad: lastname,
				email: eMail,
				mesaj: message
			}

			fetch("http://localhost:50040/api/Mail/SendMailAsUser", {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              },
            body: JSON.stringify(userMail)
          }).then(data=>data.json)
          .then(result=>{this.setState({response:true}); console.log("response: "+result);})
					.catch(err=>console.log("err"))
		}
		else{
				let visitorMail = {
					ad: name,
					soyad: lastname,
					email: eMail,
					mesaj: message
				}

				fetch("http://localhost:50040/api/Mail/SendMailAsVisitor", {
					method: 'POST',
					headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json',
						},
					body: JSON.stringify(visitorMail)
				}).then(data=>data.json)
				.then(result=>{this.setState({response:true}); console.log("response: "+result);})
				.catch(err=>console.log("err"))
			}

			document.getElementById("contact_form_name").value = "";
			document.getElementById("contact_form_lastname").value = "";
			document.getElementById("contact_form_email").value = "";
			document.getElementById("contact_form_message").value = "";
			this.ShowAlert();
		}
		onDismiss = () => {
			this.setState({isOpen: false });
		}
		ShowAlert = () => {
			if(this.state.response == true){
				setTimeout(function () {
					this.setState({isOpen:true});
					this.setState({alert:"Mesajınız başarılı bir şekilde gönderilmiştir!"});
				}.bind(this),1000)
			}
			else {
				setTimeout(function () {			
					this.setState({isOpen:true});
					this.setState({alert:"Mesajınız gönderilirken bir hata oluştu! Lütfen tekrar gönderiniz!"});
				}.bind(this),2000)
			}
			window.setTimeout(function() {
				$(".alert").fadeTo(500, 0).slideUp(500, function(){
						$(this).remove(); 
				});
		}, 4000);
		}

  render() {
    return (
        <div>
					<Alert className="alert" color="success" isOpen={this.state.isOpen} toggle={this.onDismiss}>
							{this.state.alert}
      	 </Alert>
				   <div className="contact_info">
		        <div className="container">
			        <div className="row">
				        <div className="col-lg-10 offset-lg-1">
					        <div className="contact_info_container d-flex flex-lg-row flex-column justify-content-between align-items-between">

						        <div className="contact_info_item d-flex flex-row align-items-center justify-content-start">
							        <div className="contact_info_image"><img src={phone} alt=""/></div>
							        <div className="contact_info_content">
								        <div className="contact_info_title">Phone</div>
								        <div className="contact_info_text">+38 068 005 3570</div>
							        </div>
						        </div>

						        <div className="contact_info_item d-flex flex-row align-items-center justify-content-start">
							        <div className="contact_info_image"><img src={email} alt=""/></div>
							        <div className="contact_info_content">
								        <div className="contact_info_title">Email</div>
								        <div className="contact_info_text">info@groupby.com</div>
							        </div>
						        </div>

						        <div className="contact_info_item d-flex flex-row align-items-center justify-content-start">
							        <div className="contact_info_image"><img src={address} alt=""/></div>
							        <div className="contact_info_content">
								        <div className="contact_info_title">Address</div>
								        <div className="contact_info_text">İstiklal Mahallesi, Piyaleoğlu Cd. D:137, 45410 Turgutlu/Manisa</div>
							        </div>
						        </div>
					        </div>
				        </div>
			        </div>
		        </div>
	        </div>
            
            <div className="contact_form">
		        <div className="container">
			        <div className="row">
				        <div className="col-lg-10 offset-lg-1">
					        <div className="contact_form_container">
						        <div className="contact_form_title">Get in Touch</div>

						        <form action="#" id="contact_form"> 
							        <div className="contact_form_inputs d-flex flex-md-row flex-column justify-content-between align-items-between">
																<input type="text" id="contact_form_name" className="contact_form_name input_field" placeholder="Your name" required="required" data-error="Name is required."/>
																<input type="text" id="contact_form_lastname" className="contact_form_lastname input_field" placeholder="Your lastname" required="required" data-error="Lastname is required."/>
																<input type="text" id="contact_form_email" className="contact_form_email input_field" placeholder="Your email" required="required" data-error="Email is required."/>
							        </div>
							        <div className="contact_form_text">
								        <textarea id="contact_form_message" className="text_field contact_form_message" name="message" rows="4" placeholder="Message" required="required" data-error="Please, write us a message."></textarea>
							        </div>
							        <div className="contact_form_button">
								        <button type="submit" className="button contact_submit_button" onClick={this.SendMail.bind(this)}>Send Message</button>
							        </div>
						        </form>
					        </div>
				        </div>
			        </div>
		        </div>
		        <div className="panel"></div>
	        </div>
        </div>
    )
  }
}
export default Contact;