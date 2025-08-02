// BookDetails.jsx
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"

import BackButton from "./BackButton"

export default function BookDetails() {
  const Books = useSelector((store) => store.cart.items)
  const { id } = useParams()
  const book = Books.find((b) => b.id === id)

  if (!book) {
    return <div>Book not found</div>
  }

  return (
    <main>
      <BackButton />
      <div className=" mt-10 rounded items-center justify-center gap-10 md:flex">
        <div className="bg-white rounded mb-4 min-w-48 w-1/5 p-2">
          <img src={book.image} alt={book.title} className=" " />
        </div>
        <section className="text-white">
          <h1 className="text-3xl font-bold mb-2">{book.title}</h1>
          <h2 className="text-xl mb-2">Author: {book.author}</h2>
          <p className="mb-2">Publisher: {book.publisher}</p>
          <p className="mb-2">Category: {book.category}</p>
          <p className="mb-4">Description: {book.description}</p>
          <p className="mb-2">Rating: {book.rating}</p>
        </section>
      </div>
    </main>
  )
}
