import React, { Component } from 'react';
//import { Link } from "react-router-dom";
import './detail.css';
import BookList from '../../components/booklist/books';

class Detail extends Component {

  render() {
    return (
      <div>
        <button className="bookButton" onClick={this.props.history.goBack}>
        <i className="fas fa-arrow-left"></i>  Go Back
        </button>
        <BookList key="1" bookData={this.props.location.state.book} buttonSwitch="saved" />
      </div>
    );
  }
}

export default Detail;