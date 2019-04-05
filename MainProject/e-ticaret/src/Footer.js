import React, { Component } from 'react'
import './css/Footer.css';
import {Redirect,Link} from 'react-router-dom';
import logo from './img/logo.png';

export class Footer extends Component {
  render() {
    return (
      <div>
        <footer id="myFooter">
            <div class="container">
                <div class="row">
                    <div id="logoFooter">
                    <Link onClick={window.location.reload} to="/">
                        <img src={logo}></img>
                    </Link>
                    </div>
                    <div class="col-sm-2">
                        <h5>Location</h5>
                        <ul>
                            <li><a>İstiklal Mahallesi, Piyaleoğlu Cd. D:137, 45410 Turgutlu/Manisa</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-2">
                        <h5>About us</h5>
                        <ul>
                            <li><a>Open source E-Commerce web page created by GroupBy.</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-2">
                        <h5>Contact</h5>
                        <ul>
                            <li><a>+38 068 005 3570</a></li>  
                            <li><a>info@groupby.com</a></li>         
                        </ul>
                    </div>
                    <div class="col-sm-3">
                        <div class="social-networks">
                            <a href="https://www.twitter.com/" target="_blank" class="twitter"><i class="fab fa-twitter"></i></a>
                            <a href="https://www.facebook.com/" target="_blank" class="facebook"><i class="fab fa-facebook-f"></i></a>
                            <a href="https://www.instagram.com/" target="_blank" class="instagram"><i class="fab fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/" target="_blank" class="linkedin"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                        <form action="/Contact">
                            <button type="submit" class="btn btn-default">Contact us</button>
                        </form>
                    </div>
                </div>
            </div>
            <div class="footer-copyright">
                <p>© 2019 Copyright GroupBy </p>
            </div>
        </footer>
      </div>
    )
  }
}
export default Footer;
