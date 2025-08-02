import { Link } from "react-router-dom"

function Book({ book }) {
  return (
    <div
      key={book.id}
      className=" min-w-1/4 w-76  bg-gray-300 text-gray-800 p-3 rounded cursor-pointer hover:shadow-lg transition hover:scale-110"
    >
      <img
        className="w-full h-72 rounded mb-2"
        src={book.image}
        alt={book.title}
      />
      <h2 className="font-semibold text-lg">{book.title}</h2>
      <p className="text-gray-600">Author: {book.author}</p>
      <p className="text-gray-600">Rating: {book.rating}</p>
      <Link className="text-blue-500 mt-2" to={`/book/${book.id}`}>
        View details
      </Link>
    </div>
  )
}

export default Book
