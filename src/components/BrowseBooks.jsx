import { useState, useMemo } from "react"
import { Link, useParams, useLocation } from "react-router-dom"

import { useSelector } from "react-redux"
import BackButton from "./BackButton"
import BookList from "./BookList"
import SearchBtn from "./SearchBtn"

export default function BrowseBooks() {
  const { category } = useParams()
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const searchTermParam = queryParams.get("search") || ""

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
        <SearchBtn searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </section>
      <BookList filteredBooks={filteredBooks} />
    </div>
  )
}
