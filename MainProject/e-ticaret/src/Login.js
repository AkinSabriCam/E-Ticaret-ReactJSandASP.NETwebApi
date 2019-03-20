import React, { Component } from "react";
import './css/site.css';
import {Modal,Button} from 'react-bootstrap';

export class Login extends Component {
  constructor(props, context) {
    super(props, context);
    this.state={
      Category:[],
      show: true
    }
    
    this.LoginClose = this.LoginClose.bind(this);
    this.Login=this.Login.bind(this);
  }

componentDidMount(){
  sessionStorage.setItem("User","true");
  // kullanıcı giriş yaptığında bu bilgiye dair bir session tutulmaktadır.
}

  LoginClose() {
    this.setState({show: false });
  }


  Login(){


}
  render(){
    return (
        
        <div className='menu'>
          <Modal show={this.state.show} onHide={this.LoginClose}>
            <Modal.Header closeButton>
              <Modal.Title> Sign In </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div className="form-group">
            <label htmlFor="formGroupExampleInput" placeholder="kullaniciAdi">Username</label>
            <input 
            type="text"
            className="form-control"
            id="formGroupExampleInput"/>
            <label htmlFor="formGroupExampleInput" placeholder="******">Password</label>
            <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"/>
            </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.LoginClose}> Close </Button>
              <Button variant="primary" onClick={this.Login}> Sign In </Button>
            </Modal.Footer>
          </Modal>
        </div>
      )
    }
  }
  export default Login;
