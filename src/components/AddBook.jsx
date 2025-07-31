import { useState } from "react"
import { useDispatch } from "react-redux"
import { addItem } from "../utils/cartSlice"
import { useNavigate } from "react-router-dom"
import BackButton from "./BackButton"

const categories = [
  "Fiction",
  "Classic",
  "Science Fiction",
  "Fantasy",
  "Romance",
]

export default function AddBook() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [form, setForm] = useState({
    title: "",
    author: "",
    publisher: "",
    image: "",
    description: "",
    rating: "",
    category: categories[0],
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (
      !form.title ||
      !form.author ||
      !form.publisher ||
      !form.image ||
      !form.description ||
      !form.rating ||
      !form.category
    ) {
      alert("Please fill required fields")
      return
    }
    const ratingNum = parseFloat(form.rating)

    if (isNaN(ratingNum) || ratingNum < 0 || ratingNum > 5) {
      alert("Rating must be between 0 and 5")
      return
    }
    dispatch(addItem({ ...form, rating: ratingNum }))
    navigate("/browse")
  }

  return (
    <div className="p-8 text-gray-300 rounded shadow">
      <BackButton />
      <h1 className="text-3xl font-semibold mb-4 mt-6">Add a New Book</h1>
      <form onSubmit={handleSubmit} className="space-y-4 text-xl">
        <div>
          <label className="block mb-1 ">Title</label>
          <input
            className="w-full border p-2 rounded"
            name="title"
            value={form.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block mb-1">Author</label>
          <input
            className="w-full border p-2 rounded"
            name="author"
            value={form.author}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block mb-1">Publisher</label>
          <input
            className="w-full border p-2 rounded"
            name="publisher"
            value={form.publisher}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block mb-1">Image Link</label>
          <textarea
            className="w-full border p-2 rounded"
            name="image"
            value={form.image}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block mb-1">Description</label>
          <textarea
            className="w-full border p-2 rounded"
            name="description"
            value={form.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block mb-1">Rating (0-5)</label>
          <input
            className="w-full border p-2 rounded"
            type="number"
            min="0"
            max="5"
            step="0.1"
            name="rating"
            value={form.rating}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block mb-1">Category</label>
          <select
            className="w-full border p-2 rounded "
            name="category"
            value={form.category}
            onChange={handleChange}
          >
            {categories.map((cat) => (
              <option
                className="text-gray-800 bg-gray-300"
                key={cat}
                value={cat}
              >
                {cat}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Add Book
        </button>
      </form>
    </div>
  )
}
