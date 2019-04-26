import React, { Component } from 'react';
import './nomatch.css';

class Nomatch extends Component {
  render() {
    return (
      <div className="navbar">
        <h2 className="title">Google Book Search</h2>
        <input type="text" placeholder="Search for a book..." value=""></input>
        No match
      </div>
    );
  }
}

export default Nomatch;