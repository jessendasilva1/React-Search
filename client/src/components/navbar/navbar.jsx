import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className="navbars">
        <div id="navbarinfo">
            <h1 className="title">Google Book Search</h1>
            <h3 className="info">Search for a book and save it for later!</h3>
        </div>
        <div id="linksDiv">
          <Link to={"/"}>
            <div className="links">Search</div>
          </Link>
          <Link to={"/books"}>
            <div className="links">Saved</div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;