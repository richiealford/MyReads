import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Thumbnail from './Thumbnail'

const Book = (props) => {

  const handleChange = (selectedOption) => {
    props.callbackParent(book, selectedOption.target.value);
  }

  const { book, shelf } = props
  return (
    <div className="book">
      <div className="book-top">
        <Thumbnail book={book} />
        <div className="book-shelf-changer">
          <select onChange={handleChange} value={shelf} >
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

Book.propTypes = {
  book: PropTypes.object.isRequired
}

export default Book
