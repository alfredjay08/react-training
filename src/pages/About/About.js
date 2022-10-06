import React from "react";
import { Header } from "../../components";

class About extends React.Component {
  render() {
    if (!this.props.loggedIn) window.location.href = "/login";

    return (
      <div>
        <Header />
        <div className="page">
          About: We are the champion - {this.props.user}
        </div>
      </div>
    );
  }
}

export default About;
