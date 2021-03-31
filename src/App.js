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
import Logout from "./components/Logout";
import EventContainer from "./containers/EventContainer";
import TicketContainer from "./containers/TicketContainer";
// import ProfileContainer from "./containers/ProfileContainer";
import ArtistContainer from "./containers/ArtistContainer";
import { Container } from "semantic-ui-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "semantic-ui-css/semantic.min.css";

class App extends Component {
  constructor(props) {
    super(props);

    const storedUser = localStorage.getItem("user");
    const user = storedUser ? JSON.parse(storedUser) : null;

    this.state = {
      view: "/",
      user,
    };
  }

  login = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    this.setState({ user });
  };

  logout = () => {
    localStorage.removeItem("user");
    this.setState({ user: null });
  };

  render() {
    return (
      <Container>
        <Router>
          <div className="app">
            <TopNav />
            <Switch>
              <Route
                exact
                path="/login"
                render={(routeProps) => (
                  <LoginForm login={this.login} {...routeProps} />
                )}
              />
              {!this.state.user && (
                <Route path="/">
                  <Redirect to="/login" />
                </Route>
              )}
              {this.state.user && (
                <Route exact path="/">
                  <Redirect to="/events" />
                </Route>
              )}

              <Route exact path="/about" component={About} />
              <Route
                exact
                path="/events"
                render={(routeProps) => (
                  <EventContainer user={this.state.user} {...routeProps} />
                )}
              />
              <Route
                exact
                path="/tickets"
                render={(routeProps) => (
                  <TicketContainer user={this.state.user} {...routeProps} />
                )}
              />
              {/* <Route exact path="/profiles" component={ProfileContainer} /> */}
              <Route
                exact
                path="/hostevents"
                render={(routeProps) => (
                  <ArtistContainer user={this.state.user} {...routeProps} />
                )}
              />
              <Route
                exact
                path="/logout"
                render={(routeProps) => (
                  <Logout logout={this.logout} {...routeProps} />
                )}
              />
            </Switch>
          </div>
        </Router>
      </Container>
    );
  }
}

export default App;
