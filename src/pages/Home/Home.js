import React from "react";
import { Header } from "../../components";

class Home extends React.Component {
  render() {
    if (!this.props.loggedIn) window.location.href = "/login";

    return (
      <div>
        <Header />
        <div className="page">Home: Hello {this.props.user}!</div>
      </div>
    );
  }
}

export default Home;
