import React from "react";
import { Header } from "../../components";

class Login extends React.Component {
  render() {
    return (
      <div>
        {this.props.loggedIn && <Header />}

        {!this.props.loggedIn && <div className="page">Login Form</div>}

        {!this.props.loggedIn && (
          <input
            type="text"
            value={this.props.user}
            onChange={this.props.changed}
          />
        )}

        {!this.props.loggedIn && (
          <button onClick={this.props.clicked}>Login Now!</button>
        )}
      </div>
    );
  }
}

export default Login;
