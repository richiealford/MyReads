import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import { Link } from 'react-router-dom'

class Search extends Component {

  state = {
    books : []
  }

  onSearchChanged = (searchTerm) => {
    BooksAPI.search(searchTerm)
      .then((books) => {
        if (Array.isArray(books)) {
          this.setState(() => ({
            books: books
          }))
        }
        else {
          this.setState(() => ({
            books: []
          }))
        }
      })
  }


  getBookShelf = (id) => {
    var index = this.props.bookShelf.findIndex(function(b) {
        return b.id === id;
    });
    if (index > -1) {
      return this.props.bookShelf[index].shelf;
    }
    else {
      return 'none';
    }
  }


  render() {
    const { onBookChanged } = this.props
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' >
            <button className="close-search">Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author"
              onChange={(event) => this.onSearchChanged(event.target.value)} />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.books.map((book) => (
              <Book book={book} shelf={this.getBookShelf(book.id)} key={book.id} callbackParent={onBookChanged} />
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default Search
