import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react';

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
    .then(login => {
      this.props.updatedUser(login)
      this.props.history.replace('/events');
    })
    
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
