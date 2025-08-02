import { IoSearch } from "react-icons/io5"

function SearchBtn({ searchTerm, setSearchTerm }) {
  return (
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
  )
}

export default SearchBtn
