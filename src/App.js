import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AsyncComponent } from "./components";
// import { About, Home } from "./pages";

const About = AsyncComponent(() => import("./pages/About"));
const Home = AsyncComponent(() => import("./pages/Home"));
const Login = AsyncComponent(() => import("./pages/Login"));

class App extends Component {
  state = {
    user: "",
    loggedIn: false,
  };

  setUser = (e) => {
    const user = e.target.value;

    this.setState({
      user,
    });
  };

  login = () => {
    this.setState({
      loggedIn: true,
    });
  };

  logout = () => {
    this.setState({
      loggedIn: false,
      user: null,
    });
  };

  render() {
    const { user, loggedIn } = this.state;

    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <Home loggedIn={loggedIn} user={user} authed={true} />
            )}
          />
          <Route
            exact
            user={user}
            path="/about"
            render={(props) => (
              <About loggedIn={loggedIn} user={user} authed={true} />
            )}
          />
          <Route
            exact
            user={user}
            path="/login"
            render={(props) => (
              <Login
                loggedIn={loggedIn}
                changed={this.setUser}
                clicked={this.login}
                user={user}
                authed={true}
              />
            )}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
