import React from 'react'

function Thumbnail(props) {
  const book = props.book;
  if (typeof book.imageLinks === "undefined") {
    return <div className="book-cover"
      style={{ width: 128, height: 193 }}>
    </div>;
  }
  return <div className="book-cover"
      style={{ width: 128, height: 193,
        backgroundImage: `url(${book.imageLinks['smallThumbnail']})` }}>
    </div>;
}

export default Thumbnail
