import { Link } from "react-router-dom"
import { useRouteError } from "react-router-dom"

export default function NotFound() {
  const { status, statusText, data } = useRouteError()

  return (
    <div className="p-8 text-center text-gray-200">
      <h1 className="text-3xl mb-4">
        {status} - {statusText}
        <p>{data}</p>
      </h1>
      <Link to="/" className="text-blue-400 text-2xl underline hover:underline">
        Back to Home
      </Link>
    </div>
  )
}
