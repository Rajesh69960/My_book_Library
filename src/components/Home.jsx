// import { useState, useMemo } from "react"
// import { Link, useParams } from "react-router-dom"
//
// import { IoSearch } from "react-icons/io5"

// const categories = [
//   "Fiction",
//   "Classic",
//   "Science Fiction",
//   "Fantasy",
//   "Romance",
// ]

// export default function Home() {
//   const { category } = useParams()
//   const [searchTerm, setSearchTerm] = useState("")

//   const filteredByCategory = useMemo(() => {
//     if (category) {
//       return Books.filter((b) => b.category === category)
//     }
//     return []
//   }, [category])

//   const filteredBooks = useMemo(() => {
//     // Start with all books
//     let booksToFilter = Books

//     // If category exists, filter books by category
//     if (category) {
//       booksToFilter = booksToFilter.filter((b) => b.category === category)
//     }

//     // Then filter by search term
//     if (searchTerm.trim() !== "") {
//       return booksToFilter.filter((book) =>
//         book.title.toLowerCase().includes(searchTerm.toLowerCase())
//       )
//     }

//     return booksToFilter
//   }, [category, searchTerm])

//   // Popular books (you can customize this list)

//   return (
//     <div className="py-4 px-8 text-gray-300">
//       <header className="flex justify-between items-center mb-6">
//         <h1 className="text-3xl font-bold underline ">
//           Welcome To My Online Library
//         </h1>

//         <div className="flex items-center border rounded p-2 text-lg">
//           <IoSearch className="text-gray-300 mr-2" />
//           <input
//             type="text"
//             placeholder="Search books ..."
//             className="outline-none w-full placeholder:text-gray-300"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </div>
//       </header>

//       <section className="mb-6 flex justify-between items-center text-gray-300">
//         <p className="text-xl font-semibold ">Book By Categories</p>
//         <ul className="flex flex-wrap gap-3">
//           {categories.map((cat) => (
//             <li key={cat}>
//               <Link
//                 to={`/browse/${cat}`}
//                 className="px-3 py-1 rounded bg-gray-300 text-gray-800 hover:bg-gray-400 transition"
//               >
//                 {cat}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </section>

//       <div className="flex flex-wrap gap-6 justify-center mb-10">
//         {filteredBooks.length > 0
//           ? filteredBooks.map((book) => (
//               <div
//                 key={book.id}
//                 className="w-1/4 bg-gray-300 text-gray-800 p-3 rounded cursor-pointer hover:shadow-lg transition"
//               >
//                 <Link to={`/book/${book.id}`}>
//                   <img
//                     className="w-full h-72 rounded mb-2"
//                     src={book.image}
//                     alt={book.title}
//                   />
//                   <h2 className="font-semibold text-lg">{book.title}</h2>
//                   <p className="text-gray-600">Author: {book.author}</p>
//                   <p className="text-gray-600">Rating: {book.rating}</p>
//                 </Link>
//               </div>
//             ))
//           : null}
//       </div>

//       <section>
//         <h2 className="text-2xl font-semibold mb-4">Popular Books</h2>
//         <ul className="space-y-2">
//
//         </ul>
//       </section>
//     </div>
//   )
// }

// Home.jsx

import { Link } from "react-router-dom"
import { Books } from "../utils/MockData"

const categories = [
  "Fiction",
  "Classic",
  "Science Fiction",
  "Fantasy",
  "Romance",
]

export default function Home() {
  const popularBooks = Books.slice(0, 5)
  return (
    <div className="py-4 px-8 text-gray-300 flex flex-col gap-6">
      <header className="mb-6">
        <h1 className="text-4xl font-bold underline mb-4">
          Welcome To My Online Library
        </h1>
        {/* Categories */}
        <section className="my-6 flex justify-between items-center text-gray-300">
          <p className="text-xl font-semibold">Book By Categories</p>
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
