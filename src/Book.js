import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Thumbnail from './Thumbnail'

class Book extends Component {

  static propTypes = {
    book: PropTypes.object.isRequired,
  }

  handleChange = (selectedOption) => {
    this.props.callbackParent(this.props.book, selectedOption.target.value);
  }

  render() {
    const { book } = this.props
    return (
      <div className="book">
        <div className="book-top">
          <Thumbnail book={book} />
          <div className="book-shelf-changer">
            <select onChange={this.handleChange} value={this.props.shelf} >
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.author}</div>

      </div>
    )
  }
}

export default Book