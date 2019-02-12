import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'
import { Link } from 'react-router-dom'

class BookShelf extends Component {

  static propTypes = {
    books: PropTypes.arrayOf(PropTypes.object).isRequired,
    onBookChanged: PropTypes.func
  }

  state = {
    shelfViews : [
      {'id':1, 'title':'Currently Reading', 'filterTerm':'currentlyReading'},
      {'id':2, 'title':'Want To Read', 'filterTerm':'wantToRead'},
      {'id':3, 'title':'Read', 'filterTerm':'read'}
    ]
  }

  render() {
    const { books, onBookChanged } = this.props
    return (
      <div>
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
              {this.state.shelfViews.map((shelfView) => (
                <div key={shelfView.id} className="bookshelf">
                <h2 className="bookshelf-title">{shelfView.title}</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {books.filter((b) => {
                      return b.shelf === shelfView.filterTerm
                    }).map((book) => (
                      <Book book={book} key={book.id} shelf={book.shelf}
                      callbackParent={onBookChanged} />
                    ))}
                  </ol>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="open-search">
          <Link to='/search' >
            <button />
          </Link>
        </div>
      </div>
    )
  }
}

export default BookShelf
