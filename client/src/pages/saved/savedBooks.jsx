import React, { Component } from 'react';
import API from '../../utils/API';
import './savedBooks.css';
import BookList from '../../components/booklist/books';

class SavedBooks extends Component {
    state = {
        booksArray: []
    }

    updateArray = () => {
        this.loadBooks();
    }

    componentDidMount = () => {
        this.loadBooks();
    }

    loadBooks = () => {
        API.getAllBooks()
        .then(res => {
            this.setState({
                booksArray: res.data
            })
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
    }

    render() {
        return (
            <div>
                {this.state.booksArray.length > 0 ?
                    this.state.booksArray.map((book, index) => {
                        //console.log(image);
                        return (
                            <BookList key={index} bookData={book} buttonSwitch="saved" update={this.updateArray}/>
                        );
                    }) :
                    <div className="container noBooks">
                        No Saved Books Yet! 
                    </div>
                }
            </div>

        );
    }
}

export default SavedBooks;