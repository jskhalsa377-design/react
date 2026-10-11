import { Link, useRouteError, isRouteErrorResponse } from 'react-router-dom'

export default function NotFound() {
    const error = useRouteError()
    const is404 = isRouteErrorResponse(error) && error.status === 404

    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-6xl font-bold text-orange-700">{is404 ? '404' : 'Oops'}</h1>
            <p className="mt-4 text-xl text-gray-700">
                {is404 ? "We couldn't find that page." : 'Something went wrong.'}
            </p>
            <Link
                to="/"
                className="mt-6 text-white bg-orange-700 hover:bg-orange-800 font-medium rounded-lg px-6 py-3"
            >
                Back to home
            </Link>
        </div>
    )
}