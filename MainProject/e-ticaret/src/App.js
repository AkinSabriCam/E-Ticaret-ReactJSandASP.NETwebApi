import React, { Component } from 'react';
import './App.css';
import './js/Custom.js';
import {Route,BrowserRouter as Router} from 'react-router-dom';
import {HomePage} from './HomePage';
import {NavbarPage} from './NavbarPage';
import { ProductDetail } from './ProductDetail';
import {Login} from './Login';
import {Register} from './Register';

class App extends Component {
  render() {
    
    return (
     <Router>
      <div>
     <NavbarPage></NavbarPage>
     <Route  exact path="/" component={HomePage}/>

     <Route  exact path="/ProductDetail/" component={ProductDetail}/>
     <Route  path="/Login" component={Login}/>
     <Route  path="/Register" component={Register}/>
     </div>
     </Router>
     
    );
  }
}
export default App;
