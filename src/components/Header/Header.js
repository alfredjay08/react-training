import React from "react";
import Navigation from "../Navigation";

export default () => [
  <header key="header" style={{ borderBottom: "1px solid #ff0000" }}>
    <h2>Welcome Everyone!</h2>
    <p>I hope you enjoy the view and routing here!</p>
    <a target="_blank" rel="noopener noreferrer" href="https://google.com">
      Google Home Page
    </a>
  </header>,
  <Navigation key="navigation" />,
];
