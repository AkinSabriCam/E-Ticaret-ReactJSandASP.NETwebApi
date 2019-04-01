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
                    <Link to="/">
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
                            <a href="#" class="twitter"><i class="fa fa-twitter"></i></a>
                            <a href="#" class="facebook"><i class="fa fa-facebook"></i></a>
                            <a href="#" class="google"><i class="fa fa-google-plus"></i></a>
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
