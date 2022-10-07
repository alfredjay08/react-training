import React from "react";
import { Header } from "../../components";

const About = ({ loggedIn, user }) => {
  if (!loggedIn) window.location.href = "/login";

  return (
    <div>
      <Header />
      <div className="page">About: We are the champion - {user}</div>
    </div>
  );
};

export default About;
