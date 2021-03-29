import React, { Component } from 'react';
import TopNav from './components/TopNav'
import LoginForm from './components/LoginForm'
import NewAccForm from './components/NewAccForm'
import { Container } from 'semantic-ui-react'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

  state = {
    view: '/'
  }

  render(){
    return(
      <Container>
        <TopNav />
        <br></br>
        {/* <NewAccForm /> */}
        <LoginForm />
      </Container>
    )
  }
}

export default App;
