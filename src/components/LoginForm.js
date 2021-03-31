import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react';

class LoginForm extends React.Component {
  state = {
    username: "",
    password: "",
  };

  setUsername = (username) => {
    this.setState({ username, error: '' });
  };

  setPassword = (password) => {
    this.setState({ password, error: '' });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    let newUser = {
      username: this.state.username,
      password: this.state.password,
    };

    let reqObj = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user: newUser }),
    };

    fetch("http://127.0.0.1:4000/login", reqObj)
      .then((res) => {
        const jsonPromise = res.json();

        if (res.ok) {
          return jsonPromise;
        }

        return jsonPromise.then((error) => {
          return Promise.reject(error);
        });
      })
      .then((user) => {
        this.props.login(user);
        this.props.history.replace("/events");
      })
      .catch(({ error }) => {
        this.setState({
          error,
        });
      });
  };

  render() {
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
        <div>{this.state.error}</div>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    );
  }

  //   <Segment placeholder>
  //   <Grid columns={2} relaxed='very' stackable>
  //     <Grid.Column>
  //       <Form onSubmit={this.handleSubmit}>
  //         <Form.Input
  //           icon='user'
  //           iconPosition='left'
  //           label='Username'
  //           placeholder='Enter a Username'
  //           value={this.state.username}
  //           onChange={(e) => this.setUsername(e.target.value)}
  //         />
  //         <Form.Input
  //           icon='lock'
  //           iconPosition='left'
  //           label='Password'
  //           type='password'
  //           placeholder="Enter a Password"
  //           value={this.state.password}
  //           onChange={(e) => this.setPassword(e.target.value)}
  //         />

  //         <Button content='Login' primary />
  //       </Form>
  //     </Grid.Column>

  //     <Grid.Column verticalAlign='middle'>
  //       <Button content='Sign up' icon='signup' size='big' />
  //     </Grid.Column>
  //   </Grid>

  //   <Divider vertical>Or</Divider>
  // </Segment>
}

export default LoginForm;
