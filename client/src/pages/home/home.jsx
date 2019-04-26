import React, { Component } from 'react';
import './home.css';
import BookList from '../../components/booklist/books';
import API from '../../utils/API';

class Home extends Component {
    state = {
        booksArray: [],
        searchName: "",
        saved: false
    }

    savedBookMessage = () => {
        this.setState({
            saved: true
        })
        setTimeout(() => {
            this.setState({
                saved: false
            })
        }, 2000);
    }

    handleSearchInput = (event) => {
        console.log("input changed. " + event.target.value);
        this.setState({
            searchName: event.target.value
        })
    }

    handleSearchSubmit = () => {
        let title = this.state.searchName.trim();
        API.searchBooks(title)
            .then(res => {
                //console.log(res.data);
                this.populateBooksArray(res.data.items);
            })
            .catch(err => console.log(err));
        console.log("submit book title");
    }

    populateBooksArray = (bookData) => {
        let bookArray = [];
        let promise = new Promise((resolve) => {
            do {
                let newBook = {
                    title: "",
                    author: [],
                    description: "",
                    link: "",
                    image: ""
                }
                console.log(bookData);
                if(bookData[0].volumeInfo.title === undefined || bookData[0].volumeInfo.authors === undefined ||  bookData[0].volumeInfo.previewLink === undefined ||  bookData[0].volumeInfo.description === undefined || bookData[0].volumeInfo.imageLinks === undefined){
                    console.log("missing field");
                    bookData = bookData.slice(1);
                    continue;
                } else {
                    newBook.title = bookData[0].volumeInfo.title;
                    newBook.author = bookData[0].volumeInfo.authors;
                    newBook.description = bookData[0].volumeInfo.description;
                    newBook.link = bookData[0].volumeInfo.previewLink;
                    newBook.image = bookData[0].volumeInfo.imageLinks.thumbnail;
                }                   
                console.log(newBook);
                bookArray.push(newBook);
                bookData = bookData.slice(1);
            }while(bookData.length > 0);
            if (bookData.length === 0) {
                resolve(bookArray);
              }
        });
        promise.then((booksArray) => {
            this.setState({
                booksArray: booksArray
            })
            console.log("in promise. All books done!");
        })
        .catch((err) => {
            console.log("err: " + err);
        });
    }

    render() {
        return (
            <div>
                <div id="home" className="container">
                    <input id="searchinput" type="text" placeholder="Search for a book..." onInput={this.handleSearchInput}></input>
                    <button className="btn btn-primary" onClick={this.handleSearchSubmit}>Search</button>
                </div>
                {this.state.saved ? 
                    <div id="saveMessage">Saved Book to your list!</div>
                : 
                    <div id="test"></div>
                }
                {this.state.booksArray.length > 0 ?
                    this.state.booksArray.map((book, index) => {
                        //console.log(image);
                        return (
                            <BookList key={index} bookData={book} buttonSwitch="search" saveBook={this.savedBookMessage}/>
                        );
                    }) :
                    <div className="container noBooks">
                        Search results will be displayed here...
                    </div>
                }

            </div>

        );
    }
}

export default Home;