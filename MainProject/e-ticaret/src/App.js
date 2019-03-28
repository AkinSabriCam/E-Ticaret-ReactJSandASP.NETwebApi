import React, { Component } from 'react';
import './App.css';
import './js/Custom.js';
import { CookiesProvider } from 'react-cookie';
import {Route,BrowserRouter as Router} from 'react-router-dom';
import {HomePage} from './HomePage';
import {NavbarPage} from './NavbarPage';
import { ProductDetail } from './ProductDetail';
import Login from './Login';
import {Register} from './Register';
import {User} from './User';
import {Siparis} from './Siparis';
import {Favourite} from './Favourite'
import {ProductsByCategory} from './ProductsByCategory';
import {SearchProducts} from './SearchProducts';

class App extends Component {
  render() {
    
    return (
      <CookiesProvider>
     <Router>
      <div>
     <NavbarPage></NavbarPage>

     <Route exact path="/" component={HomePage}/>
     <Route exact path="/ProductDetail/" component={ProductDetail}/>
     <Route path="/Login" component={Login}/>
     <Route path="/Register" component={Register}/>
     <Route path="/User" component={User}/>
     <Route path="/Favourite" component={Favourite}/>
     <Route path="/Siparis"   component={Siparis}/>
     <Route path="/SearchProducts"   component={SearchProducts}/> 
     <Route path="/ProductsByCategory" component={ProductsByCategory}/>

     </div>
     </Router>
     </CookiesProvider>
    );
  }
}
export default App;
