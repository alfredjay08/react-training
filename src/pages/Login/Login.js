import React from "react";
import { Header } from "../../components";
import { Button } from "../../components/Button/StyledComponents";

const Login = ({ loggedIn, user, changed, clicked }) => {
  return (
    <div>
      {loggedIn && <Header />}

      {!loggedIn && <div className="page">Login Form</div>}

      {!loggedIn && <input type="text" value={user} onChange={changed} />}

      {!loggedIn && <Button onClick={clicked}>Login Now!</Button>}
    </div>
  );
};

export default Login;
