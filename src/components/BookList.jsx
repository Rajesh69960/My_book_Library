import React from "react"

import Book from "./Book"

function BookList({ filteredBooks }) {
  return (
    <div className="flex flex-wrap gap-6 justify-center my-10">
      {filteredBooks.length > 0 ? (
        filteredBooks.map((book) => <Book key={book.id} book={book} />)
      ) : (
        <p>No books found.</p>
      )}
    </div>
  )
}

export default BookList
