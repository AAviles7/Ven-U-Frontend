import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Navbar from './components/Navbar'; 
import About from './components/About';
import EventContainer from './containers/EventContainer';
import Purchase from './containers/PurchaseContainer';
import PortfolioContainer from './containers/PortfolioContainer';
import LoginContainer from './containers/LoginContainer';
import LoginForm from './components/LoginForm';
import NewAccForm from './components/NewAccForm';
import EventForm from './components/EventForm';
import { Container } from 'semantic-ui-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css';

class App extends Component {

  state = {
    view: '/'
  }


  render(){
    return(
      <Container>
        <Router>
          <div className="app">
            <Navbar />
            <Route exact path="/about" component={About} />
            <Route exact path="/events" component={EventContainer} />
            <Route exact path="/purchase" component={Purchase} />
            <Route exact path="/portfolio" component={PortfolioContainer} />
            <Route exact path="/login" component={LoginContainer} />
          </div>
        </Router>
          <br></br>
          <EventContainer />
          {/* <NewAccForm /> */}
          {/* <LoginForm /> */}
          {/* <EventForm /> */}
      </Container>
    )
  }
}

export default App;
