import axios from "axios";
let queryURL = "https://www.googleapis.com/books/v1/volumes?q=";

export default {
  // Gets all books
  getAllBooks: function() {
    return axios.get("/api/books");
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },
  searchBooks: function(title) {
    console.log(title);
  return axios.get(queryURL+title);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  }
};
