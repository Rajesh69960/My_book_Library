import { useNavigate } from "react-router-dom"
import { FaArrowLeftLong } from "react-icons/fa6"

export default function BackButton() {
  const navigate = useNavigate()

  return (
    <button
      onClick={() => navigate(-1)}
      className="text-white flex items-center text-xl gap-2 px-2 py-1 m-2 border shadow-lghover:text-blue-400"
    >
      <span>
        <FaArrowLeftLong />
      </span>
      Back
    </button>
  )
}
