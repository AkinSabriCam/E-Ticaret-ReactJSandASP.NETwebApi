import React, { Component } from 'react';
import './App.css';
import './js/Custom.js';
import Cookies from 'js-cookie';
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
import {Redirect} from 'react-router'
import {KullaniciGuncelle} from './KullaniciGuncelle';
import {Siparislerim} from './Siparislerim';
import {ProductsByCategory} from './ProductsByCategory';
import {SearchProducts} from './SearchProducts';
import { PersonalDetail } from './PersonalDetail';
import Contact from './Contact';
import Footer from './Footer';
import SuggestProductModal from './SuggestProductModal';



export class App extends Component {
   constructor(props){
      super(props);
      this.state={
        Admin:false
      }
   }
 
  render() {

    let usercomponent;
    if(Cookies.get("Login")=="true"){
      usercomponent=<User></User>
    }
    
    return (
     <CookiesProvider>
        <Router>
          <div>
                <NavbarPage></NavbarPage>
                {usercomponent}
                <Route exact path="/" component={HomePage}/>
                <Route path="/ProductDetail/" component={ProductDetail}/>
                <Route path="/Login" component={Login}/>
                <Route path="/Register" component={Register}/>
               
                <Route path="/Siparis" component={Siparis}/>
                <Route path="/KullaniciGuncelle" component={KullaniciGuncelle}/>

                <Route path="/Favourite" component={Favourite}/>
                <Route path="/Siparislerim" component={Siparislerim}/>
                            
                <Route path="/ProductsByCategory" component={ProductsByCategory}/>
                <Route path="/PersonalDetail" component={PersonalDetail}/>
                <Route path="/SearchProducts" component={SearchProducts}/> 
                <Route path="/Contact" component={Contact}/>
                <Route path="/SuggestProductModal" component={SuggestProductModal}/>
  
                <Footer></Footer>
            
          </div>
        </Router>
      </CookiesProvider>
    );
  }
}
export default App;
