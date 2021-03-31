import React, { Component } from 'react';
// import {
//   BrowserRouter as Router,
//   Route
// } from 'react-router-dom';
import TopNav from './components/TopNav'; 
import About from './components/About';
import EventContainer from './containers/EventContainer';
import ArtistContainer from './containers/ArtistContainer';
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
        {/* <Router>
          <div className="app">
            <Navbar />
            <Route exact path="/about" component={About} />
            <Route path="/events" component={EventContainer} />
            <Route path="/purchase" component={Purchase} />
            <Route path="/portfolio" component={PortfolioContainer} />
            <Route path="/login" component={LoginContainer} />
          </div>
        </Router> */}
          <TopNav />
          <br></br>
          <EventContainer />
          {/* <ArtistContainer /> */}
          {/* <NewAccForm /> */}
          {/* <LoginForm /> */}
          {/* <EventForm /> */}
      </Container>
    )
  }
}

export default App;
