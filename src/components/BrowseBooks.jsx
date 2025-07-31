// // BrowseBooks.jsx
import { useState, useMemo } from "react"
import { Link, useParams, useLocation } from "react-router-dom"
// import { Books } from "../utils/MockData"
import { IoSearch } from "react-icons/io5"
import { useSelector } from "react-redux"
import BackButton from "./BackButton"

export default function BrowseBooks() {
  const { category } = useParams()
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const searchTermParam = queryParams.get("search") || ""
  console.log(location)
  console.log(queryParams)
  console.log(searchTermParam)

  const [searchTerm, setSearchTerm] = useState(searchTermParam)

  const Books = useSelector((store) => store.cart.items)

  const filteredBooks = useMemo(() => {
    let booksToFilter = Books

    if (category) {
      booksToFilter = booksToFilter.filter((b) => b.category === category)
    }

    if (searchTerm.trim() !== "") {
      booksToFilter = booksToFilter.filter((b) =>
        b.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    return booksToFilter
  }, [category, searchTerm])

  return (
    <div className="py-4 px-8 text-gray-300">
      <section className="flex justify-between">
        <BackButton />
        <div className="flex w-1/3 items-center border rounded p-2  text-lg ">
          <IoSearch className="text-gray-300 mr-2" />
          <input
            type="text"
            placeholder="Search books ..."
            className="outline-none w-full placeholder:text-gray-300"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </section>
      <div className="flex flex-wrap gap-6 justify-center my-10">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div
              key={book.id}
              className=" min-w-1/4 w-76 bg-gray-300 text-gray-800 p-3 rounded cursor-pointer hover:shadow-lg transition"
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
          ))
        ) : (
          <p>No books found.</p>
        )}
      </div>
    </div>
  )
}
