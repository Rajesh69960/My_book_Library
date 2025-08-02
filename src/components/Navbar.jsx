import { useState } from "react"
import { Link } from "react-router-dom"

function Navbar() {
  const [isActive, setIsActive] = useState(false)

  const links = ["Home", "Browse Book", "Add book"]
  return (
    <nav className="bg-blue-900 p-3">
      <div className="container mx-auto flex justify-end gap-4 text-xl ">
        {links.map((link) => {
          return (
            <Link
              key={link}
              onClick={() => setIsActive(link)}
              to={`${
                link == "Home"
                  ? "/"
                  : link == "Browse Book"
                  ? "/browse"
                  : "/add"
              }`}
              className={`text-white hover:scale-110 px-3 py-2 rounded ${
                link === isActive ? "bg-blue-700" : null
              }`}
            >
              {link}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}

export default Navbar
