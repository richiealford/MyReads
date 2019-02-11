import React from 'react'
import update from 'immutability-helper';
import * as BooksAPI from './BooksAPI'
import BookShelf from './BookShelf'
import Search from './Search'
import './App.css'
import { Route } from 'react-router-dom'


class BooksApp extends React.Component {

  state = {
    books: [],
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books : books
        }))
      })
  }

  onBookChanged = (book, shelf) => {
    var data = this.state.books;
    var bookIndex = data.findIndex(function(b) {
        return b.id === book.id;
    });
    if (bookIndex > -1) {
      BooksAPI.update(book, shelf)
        .then(() => {
          var updatedBook = update(data[bookIndex], {shelf: {$set: shelf}});
          var newData = update(data, {
              $splice: [[bookIndex, 1, updatedBook]]
          });
          this.setState({books: newData});
        })
    }
    else {
      BooksAPI.update(book, shelf)
        .then(() => {
          var updatedBook = update(book, {shelf: {$set: shelf}});
          var newData = data.concat(updatedBook);
          this.setState({books: newData});
        })
    }
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <BookShelf books={this.state.books}
            onBookChanged={this.onBookChanged} />
        )} />

        <Route path='/search' render={() => (
          <Search onBookChanged={this.onBookChanged} bookShelf={this.state.books} />
        )} />
      </div>
    )
  }
}

export default BooksApp
