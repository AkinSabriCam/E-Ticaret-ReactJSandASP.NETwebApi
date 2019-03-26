import React, { Component } from 'react';
import './App.css';
import './js/Custom.js';
import { CookiesProvider } from 'react-cookie';
import {Route,BrowserRouter as Router} from 'react-router-dom';
import {HomePage} from './HomePage';
import {NavbarPage} from './NavbarPage';
import {ProductDetail} from './ProductDetail';
import Login from './Login';
import {Register} from './Register';
import {User} from './User';
import {Siparis} from './Siparis';
import {Favourite} from './Favourite'
import {ProductsByCategory} from './ProductsByCategory';
import { PersonalDetail } from './PersonalDetail';

class App extends Component {
  render() {
    
    return (
      <CookiesProvider>
     <Router>
      <div>
     <NavbarPage></NavbarPage>

     <Route  exact path="/" component={HomePage}/>
     <Route  exact path="/ProductDetail/" component={ProductDetail}/>
     <Route  path="/Login" component={Login}/>
     <Route  path="/Register" component={Register}/>
     <Route  path="/User" component={User}/>
     <Route  path="/User/Favourite" component={Favourite}/>
     <Route  path="/User/Siparis"   component={Siparis}/>
     <Route exact path="/" component={HomePage}/>
     <Route path="/ProductsByCategory" component={ProductsByCategory}/>
     <Route  path="/User/PersonalDetail"   component={PersonalDetail}/>
     </div>
     </Router>
     </CookiesProvider>
    );
  }
}
export default App;
