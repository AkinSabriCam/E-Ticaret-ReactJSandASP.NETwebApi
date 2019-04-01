import React, { Component } from 'react';
import './ContactStyle/contact_styles.css';
import './ContactStyle/contact_responsive.css';
import phone from './img/contact_1.png';
import email from './img/contact_2.png';
import address from './img/contact_3.png';

export class Contact extends Component {
  render() {
    return (
        <div>
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
                                        <input type="text" id="contact_form_email" className="contact_form_email input_field" placeholder="Your email" required="required" data-error="Email is required."/>
							        </div>
							        <div className="contact_form_text">
								        <textarea id="contact_form_message" className="text_field contact_form_message" name="message" rows="4" placeholder="Message" required="required" data-error="Please, write us a message."></textarea>
							        </div>
							        <div className="contact_form_button">
								        <button type="submit" className="button contact_submit_button">Send Message</button>
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