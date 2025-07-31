import { useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

function Navbar() {
  const [isActive, setIsActive] = useState(false)
  const cartItems = useSelector((store) => store.cart.items)
  return (
    <nav className="bg-blue-900 p-3">
      <div className="container mx-auto flex justify-end gap-4 text-xl ">
        <Link
          onClick={() => setIsActive(!isActive)}
          to="/"
          className="text-white hover:bg-blue-800 px-3 py-2 rounded"
        >
          Home
        </Link>
        <Link
          onClick={() => setIsActive(!isActive)}
          to="/browse"
          className="text-white hover:bg-blue-800 px-3 py-2 rounded"
        >
          Browse Book
        </Link>
        <Link
          onClick={() => setIsActive(!isActive)}
          to="/add"
          className="text-white hover:bg-blue-800 px-3 py-2 rounded"
        >
          Add Book
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
