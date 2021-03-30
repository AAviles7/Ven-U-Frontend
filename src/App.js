import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  // Redirect
} from "react-router-dom";
import TopNav from "./components/TopNav";
import About from "./components/About";
import EventContainer from "./containers/EventContainer";
import Purchase from "./containers/PurchaseContainer";
import ProfileContainer from "./containers/ProfileContainer";
import LoginForm from "./components/LoginForm";
// import NewAccForm from './components/NewAccForm';
// import EventForm from './components/EventForm';
import { Container } from "semantic-ui-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "semantic-ui-css/semantic.min.css";

class App extends Component {
  state = {
    view: "/",
    user: null,
  };

  updatedUser = (user) => {
    this.setState({ user });
  };

  render() {
    return (
      <Container>
        <Router>
          <div className="app">
            <TopNav />
            <Switch>
              {/* <Route exact path="/" render={() => <Redirect to="/profile"/>}/> */}
              <Route exact path="/about" component={About} />
              <Route exact path="/events" component={EventContainer} />
              <Route exact path="/purchase" component={Purchase} />
              <Route exact path="/profile" component={ProfileContainer} />
              <Route exact path="/login">
                <LoginForm updatedUser={this.updatedUser} />
              </Route>
              {/* <Route component={NotFound}/> */}
            </Switch>
          </div>
        </Router>
        <br></br>
        {/* <EventContainer /> */}
        {/* <EventForm /> */}
        {/* <NewAccForm /> */}
      </Container>
    );
  }
}

export default App;
