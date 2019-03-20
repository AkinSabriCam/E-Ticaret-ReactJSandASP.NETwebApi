import React, { Component } from "react";
import './css/site.css';
import {Modal,Button} from 'react-bootstrap';

export class Register extends Component {
  constructor(props, context) {
    super(props, context);
    this.state={
      Category:[],
      show: true
    }
   
    this.RegisterClose = this.RegisterClose.bind(this);
  }
  RegisterClose() {
    this.setState({ show: false });
  }
 
  toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
  } 
  toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
  }
  render(){
    return (
        <div className='menu'>
          <Modal show={this.state.show} onHide={this.RegisterClose}>
            <Modal.Header closeButton>
              <Modal.Title> Sign Up </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div className="form-group">
            <label htmlFor="formGroupExampleInput">Name</label>
            <input 
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Jhon"/>
            <label htmlFor="formGroupExampleInput">Surname</label>
            <input 
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Snow"/>
            <label htmlFor="formGroupExampleInput">Username</label>
            <input 
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="JSnow"/>
            <label htmlFor="formGroupExampleInput">Password</label>
            <input 
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="************"/>
            <label htmlFor="formGroupExampleInput">E-mail</label>
            <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="example@example.com"/>
            </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.RegisterClose}> Close </Button>
              <Button variant="primary" onClick={this.RegisterClose}> Sign Up </Button>
            </Modal.Footer>
          </Modal>
        </div>
        
      )
    }
}
export default Register;
