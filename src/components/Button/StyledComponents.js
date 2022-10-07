import React from "react";
import styled from "styled-components";

export const Button = styled.button`
  box-sizing: border-box;
  padding: 0.4rem 8rem;
  cursor: pointer;
  background: crimson;
  color: #fff;
  border: none;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.2);

  &:hover {
    background: #fff;
    color: #000;
  }
`;
