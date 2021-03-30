import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const LoginForm = ({}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Submitting Username ${username}`);
    alert(`Submitting Password ${password}`);

    let newUser = {
      username: username,
      password: password
    };

    let reqObj ={
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify( {newUser} )
    }

    fetch("http://127.0.0.1:4000/login", reqObj) 
    .then(res => res.json())
    .then(user => { 
      debugger 
    })

    
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="username"
          placeholder="Enter a Username"
          onChange={(e) => setUsername(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter a Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default LoginForm;
