import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import TopNav from "./components/TopNav";
// import SignupForm from './components/SignupForm';
import LoginForm from "./components/LoginForm";
import About from "./components/About";
import EventContainer from "./containers/EventContainer";
import TicketContainer from "./containers/TicketContainer";
import ProfileContainer from "./containers/ProfileContainer";
import ArtistContainer from "./containers/ArtistContainer";
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
              <Route exact path="/">
                {this.state.user ? (
                  <Redirect to="/events" />
                ) : (
                  <Redirect to="/login" />
                )}
              </Route>

              <Route
                exact
                path="/login"
                render={(routeProps) => (
                  <LoginForm updatedUser={this.updatedUser} {...routeProps} />
                )}
              />

              {/* <Route exact path="/login"/>
                {
                  localStorage.getItem('auth_key') ? <ProfileContainer updatedUser={this.updatedUser} /> : <Redirect to="/events" />
                }
              </Route> */}

              <Route exact path="/about" component={About} />
              <Route exact path="/events" component={EventContainer} />
              <Route exact path="/tickets" component={TicketContainer} />
              <Route exact path="/profiles" component={ProfileContainer} />
              <Route exact path="/hostevents" component={ArtistContainer} />
            </Switch>
          </div> 
        </Router>
      </Container>
    );
  }
}

export default App;
