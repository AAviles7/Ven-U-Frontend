import React, { Component } from 'react';
import TopNav from './components/TopNav'
import LoginForm from './components/LoginForm'
import NewAccForm from './components/NewAccForm'
import EventForm from './components/EventForm'
import { Container } from 'semantic-ui-react'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  state = {
    view: '/'
  }

  About = () => {
    return (
      <div>
        <h1> This is some bullshit! </h1> 
      </div>
    )
  } 



  render(){
    return(
      <Container>
        <TopNav />
        <br></br>
        <NewAccForm />
        {/* <LoginForm /> */}
        {/* <EventForm /> */}
      </Container>
    )
  }
}

export default App;
