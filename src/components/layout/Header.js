import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={headerStles}>
      <h1>Todolist</h1>
    </header>
  );
}
const headerStles = {
  background: "black",
  color: "white",
  padding: "10px",
  textAlign: "center"
};
//const linkStyle = {};
export default Header;
