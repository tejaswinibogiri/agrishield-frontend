import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

function NotFound() {
  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center px-6">
      <div className="text-center max-w-lg">

        {/* 404 */}
        <div className="mb-6">
          <h1 className="text-8xl font-extrabold text-green-600">
            404
          </h1>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-800 mb-3">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-lg mb-8">
          Sorry, the page you're looking for doesn't exist or may have
          been moved.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">

          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700 transition"
          >
            <Home size={20} />
            Back to Dashboard
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-gray-300 bg-white text-gray-700 font-semibold hover:bg-gray-100 transition"
          >
            <ArrowLeft size={20} />
            Go Back
          </button>

        </div>

        {/* AgriShield branding */}
        <div className="mt-10">
          <p className="text-green-700 font-semibold text-lg">
            🌱 AgriShield
          </p>
          <p className="text-gray-500 text-sm mt-1">
            Smart Farming • Better Crops • Healthier Farms
          </p>
        </div>

      </div>
    </div>
  );
}

export default NotFound;