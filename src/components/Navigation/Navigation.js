import React from "react";
import { NavLink } from "react-router-dom";

export default () => (
  <nav>
    <NavLink exact to="/">
      Home
    </NavLink>
    <NavLink exact to="/about">
      About
    </NavLink>
  </nav>
);
