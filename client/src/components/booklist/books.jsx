import React, { Component } from 'react';
import { Link } from "react-router-dom";
import API from '../../utils/API';
import './books.css';

class Books extends Component {

    handleSaveClick = () => {
        this.props.saveBook();
        API.saveBook(this.props.bookData)
            .then(res => {
            })
            .catch(err => console.log(err));
    }

    handleDeleteClick = (title) => {
        API.deleteBook(title)
            .then(res => {
                this.props.update();
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div id="bookDiv">
                <div id="bookTitleDiv">
                    <h5>{this.props.bookData.title}</h5>
                    <div id="buttonsDiv">
                        <Link to={{ pathname: '/books/:id', state: { book: this.props.bookData } }}>
                            <button className="bookButtons" id="viewButton">View</button>
                        </Link>
                        {this.props.buttonSwitch === "search" ?
                            <button className="bookButtons" id="saveButton" onClick={() => this.handleSaveClick(this.props)}>Save</button>
                            :
                            <button className="bookButtons" id="deleteButton" onClick={() => this.handleDeleteClick(this.props.bookData.title)}>Delete</button>
                        }
                    </div>
                </div>

                <div className="view">
                    <div className="bookInfo">
                        <p>{this.props.bookData.author}</p>
                        <a href={this.props.bookData.link} target="blank">
                            View on Google Books
                        </a>
                    </div>
                    <div className="test">
                        <div className="image">
                            <img src={this.props.bookData.image} alt="bookImage" width="200px" height="200px" />
                        </div>
                        <p>{this.props.bookData.description}</p>
                    </div>
                </div>

            </div>
        );
    }
}

export default Books;