import React, { Component } from 'react';
import './App.css';
import './js/Custom.js';
import {Cookies} from 'js-cookie';
import { CookiesProvider } from 'react-cookie';
import {Route,BrowserRouter as Router} from 'react-router-dom';
import {HomePage} from './HomePage';
import {NavbarPage} from './NavbarPage';
import {ProductDetail} from './ProductDetail';
import Login from './Login';
import {Register} from './Register';
import {User} from './User';
import {Siparis} from './Siparis';
import {AdminNavbar} from './AdminNavbar';
import {AdminPanel} from './AdminPanel';
import {AdminDashboard} from './AdminDashboard';
import {Favourite} from './Favourite';


import {KullaniciGuncelle} from './KullaniciGuncelle';
import {Siparislerim} from './Siparislerim';

import {ProductsByCategory} from './ProductsByCategory';

import {SearchProducts} from './SearchProducts';

import { PersonalDetail } from './PersonalDetail';
import Contact from './Contact';
import Footer from './Footer';



class App extends Component {
   constructor(props){
      super(props);
      this.state={
        Admin:false
      }
   }
  
  render() {
    return (
      <CookiesProvider>
        <Router>
          <div>
                <NavbarPage></NavbarPage>
                <AdminPanel></AdminPanel> 

                <Route exact path="/" component={HomePage}/>
                <Route exact path="/ProductDetail/" component={ProductDetail}/>
                <Route path="/Login" component={Login}/>
                <Route path="/Register" component={Register}/>
                <Route path="/User" component={User}/>
                
                <Route path="/Siparis" component={Siparis}/>
                <Route path="/KullaniciGuncelle" component={KullaniciGuncelle}/>

                <Route path="/User/Favourite" component={Favourite}/>
                <Route path="/User/Siparislerim" component={Siparislerim}/>
              
                
                <Route path="/ProductsByCategory" component={ProductsByCategory}/>
                <Route path="/User/PersonalDetail" component={PersonalDetail}/>
                <Route path="/SearchProducts" component={SearchProducts}/> 
                <Route path="/Contact" component={Contact}/>

                <Footer></Footer>
            
          </div>
        </Router>
      </CookiesProvider>
    );
  }
}
export default App;
