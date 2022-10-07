import React from "react";
import { Header } from "../../components";

const Home = ({ loggedIn, user }) => {
  if (!loggedIn) window.location.href = "/login";

  return (
    <div>
      <Header />
      <div className="page">Home: Hello {user}!</div>
    </div>
  );
};

export default Home;
