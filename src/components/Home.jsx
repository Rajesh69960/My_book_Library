import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import BookList from "./BookList"
import Book from "./Book"
export default function Home() {
  const categories = [
    "Dystopian",
    "Classic",
    "Historical",
    "Fantasy",
    "Romance",
  ]
  const Books = useSelector((store) => store.cart.items)
  console.log(Books)

  const popularBooks = Books.slice(0, 5)
  return (
    <div className="py-4 px-8 text-gray-300 flex flex-col gap-6">
      <header className="mb-6">
        <h1 className="text-4xl font-bold underline mb-4">
          Welcome To My Online Library
        </h1>

        <section className="my-6 flex justify-between items-center text-gray-300">
          <p className="text-xl font-semibold underline">Book By Categories</p>
          <ul className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <li key={cat}>
                <Link
                  to={`/browse/${cat}`}
                  className="px-3 py-1 rounded bg-gray-300 text-gray-800 hover:bg-gray-400 transition"
                >
                  {cat}
                </Link>
              </li>
            ))}
          </ul>
        </section>
        <div className="flex flex-wrap gap-6 justify-center my-10">
          {Books.length > 0 ? (
            Books.map((book) => <Book key={book.id} book={book} />)
          ) : (
            <p>No books found.</p>
          )}
        </div>
      </header>
      {/* Popular Books */}
      <section>
        <h2 className="text-3xl font-semibold mb-4">Popular Books:</h2>
        <ul className="space-y-2">
          {popularBooks.map((book) => (
            <li
              key={book.id}
              className="flex justify-between items-center text-gray-800 text-xl bg-gray-300 px-4 py-2 rounded hover:text-blue-500"
            >
              <span>{book.title}</span>
              <a
                href={`/book/${book.id}`}
                className="text-blue-500 font-semibold hover:underline"
              >
                View Details
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
