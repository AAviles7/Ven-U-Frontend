import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class LoginForm extends React.Component {
  
  state = {
    username: "",
    password: ""
  }

  setUsername = (username) => {
    this.setState({username})
  }

  setPassword = (password) => {
    this.setState({password})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // alert(`Submitting Username ${username}`);
    // alert(`Submitting Password ${password}`);

    let newUser = {
      username: this.state.username,
      password: this.state.password
    };

    let reqObj ={
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify( {user: newUser} )
    }

    fetch("http://127.0.0.1:4000/login", reqObj) 
    .then(res => res.json())
    .then(user => {this.props.updatedUser(user)})
    
  };

  render () {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="username"
            placeholder="Enter a Username"
            value={this.state.username}
            onChange={(e) => this.setUsername(e.target.value)}
          />
        </Form.Group>
  
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter a Password"
            value={this.state.password}
            onChange={(e) => this.setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }  
};

export default LoginForm;
