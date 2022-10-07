import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AsyncComponent } from "./components";

const About = AsyncComponent(() => import("./pages/About"));
const Home = AsyncComponent(() => import("./pages/Home"));
const Login = AsyncComponent(() => import("./pages/Login"));

const App = () => {
  const [user, setUser] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const onUserChanged = (e) => setUser(e.target.value);

  const login = () => setLoggedIn(true);

  const logout = () => {
    setUser(null);
    setLoggedIn(false);
  };

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
              changed={onUserChanged}
              clicked={login}
              user={user}
              authed={true}
            />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
