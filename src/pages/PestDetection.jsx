import { useState } from "react";
import {
  Upload,
  Bug,
  CheckCircle,
  AlertTriangle,
  X,
  Leaf,
} from "lucide-react";

function PestDetection() {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);

  // Handle image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      setImage(URL.createObjectURL(file));
      setResult(null);
    }
  };

  // Demo pest detection
  const detectPest = () => {
    if (!image) return;

    setResult({
      pest: "Aphids",
      confidence: "94%",
      severity: "High",
      crop: "Tomato",
      recommendation:
        "Remove heavily affected leaves and apply an appropriate organic or recommended pest control treatment.",
    });
  };

  // Remove uploaded image
  const removeImage = () => {
    setImage(null);
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-green-50 p-8">

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3">

          <div className="bg-green-700 text-white p-3 rounded-xl">
            <Bug size={28} />
          </div>

          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Pest Detection
            </h1>

            <p className="text-gray-600 mt-1">
              Upload a crop image and let AgriShield AI identify
              potential pests.
            </p>
          </div>

        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-2 gap-6">

        {/* Upload Section */}
        <div className="bg-white rounded-2xl shadow-sm p-6">

          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Upload Crop Image
          </h2>

          <p className="text-gray-500 mb-6">
            Upload a clear image of the affected crop or leaf.
          </p>

          {/* No Image */}
          {!image ? (
            <label className="border-2 border-dashed border-green-300 rounded-2xl h-80 flex flex-col items-center justify-center cursor-pointer hover:bg-green-50 transition">

              <div className="bg-green-100 p-4 rounded-full mb-4">
                <Upload
                  className="text-green-700"
                  size={32}
                />
              </div>

              <p className="font-semibold text-gray-800">
                Click to upload an image
              </p>

              <p className="text-sm text-gray-500 mt-2">
                PNG, JPG or JPEG
              </p>

              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />

            </label>
          ) : (

            /* Image Preview */
            <div>

              <div className="relative">

                <img
                  src={image}
                  alt="Uploaded crop"
                  className="w-full h-80 object-cover rounded-2xl"
                />

                {/* Remove Button */}
                <button
                  onClick={removeImage}
                  className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:bg-red-50 transition"
                >
                  <X
                    size={20}
                    className="text-red-500"
                  />
                </button>

              </div>

              {/* Detect Button */}
              <button
                onClick={detectPest}
                className="w-full mt-5 bg-green-700 text-white py-3 rounded-xl font-semibold hover:bg-green-800 transition"
              >
                Detect Pest
              </button>

            </div>
          )}

        </div>

        {/* Detection Result */}
        <div className="bg-white rounded-2xl shadow-sm p-6">

          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Detection Result
          </h2>

          <p className="text-gray-500 mb-6">
            AI analysis results will appear here.
          </p>

          {/* No Result */}
          {!result ? (

            <div className="h-80 flex flex-col items-center justify-center text-center border rounded-2xl">

              <Leaf
                className="text-green-300 mb-4"
                size={48}
              />

              <p className="font-semibold text-gray-600">
                No detection yet
              </p>

              <p className="text-sm text-gray-400 mt-2">
                Upload an image and click "Detect Pest".
              </p>

            </div>

          ) : (

            /* Result */
            <div>

              {/* Pest Name */}
              <div className="bg-red-50 rounded-2xl p-5 mb-4">

                <div className="flex items-center gap-3">

                  <Bug
                    className="text-red-600"
                    size={30}
                  />

                  <div>

                    <p className="text-sm text-gray-500">
                      Detected Pest
                    </p>

                    <h3 className="text-2xl font-bold text-red-700">
                      {result.pest}
                    </h3>

                  </div>

                </div>

              </div>

              {/* Details */}
              <div className="grid grid-cols-3 gap-3 mb-5">

                {/* Confidence */}
                <div className="border rounded-xl p-4">

                  <p className="text-sm text-gray-500">
                    Confidence
                  </p>

                  <p className="text-xl font-bold text-green-700">
                    {result.confidence}
                  </p>

                </div>

                {/* Severity */}
                <div className="border rounded-xl p-4">

                  <p className="text-sm text-gray-500">
                    Severity
                  </p>

                  <p className="text-xl font-bold text-red-600">
                    {result.severity}
                  </p>

                </div>

                {/* Crop */}
                <div className="border rounded-xl p-4">

                  <p className="text-sm text-gray-500">
                    Crop
                  </p>

                  <p className="text-xl font-bold text-gray-800">
                    {result.crop}
                  </p>

                </div>

              </div>

              {/* Recommendation */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-5">

                <div className="flex gap-3">

                  <AlertTriangle
                    className="text-yellow-600 shrink-0"
                    size={24}
                  />

                  <div>

                    <h3 className="font-bold text-gray-900 mb-1">
                      Recommended Action
                    </h3>

                    <p className="text-gray-600 text-sm">
                      {result.recommendation}
                    </p>

                  </div>

                </div>

              </div>

              {/* Success */}
              <div className="flex items-center gap-2 mt-5 text-green-700">

                <CheckCircle size={20} />

                <span className="font-semibold">
                  AI analysis completed
                </span>

              </div>

            </div>
          )}

        </div>

      </div>

      {/* Information Cards */}
      <div className="grid grid-cols-3 gap-5 mt-6">

        {/* AI Identification */}
        <div className="bg-white p-5 rounded-2xl shadow-sm">

          <Bug
            className="text-green-700 mb-3"
            size={24}
          />

          <h3 className="font-bold">
            AI Pest Identification
          </h3>

          <p className="text-sm text-gray-500 mt-2">
            Identify common crop pests using image-based analysis.
          </p>

        </div>

        {/* Early Warning */}
        <div className="bg-white p-5 rounded-2xl shadow-sm">

          <AlertTriangle
            className="text-yellow-600 mb-3"
            size={24}
          />

          <h3 className="font-bold">
            Early Warning
          </h3>

          <p className="text-sm text-gray-500 mt-2">
            Detect potential pest problems before they spread.
          </p>

        </div>

        {/* Recommendations */}
        <div className="bg-white p-5 rounded-2xl shadow-sm">

          <CheckCircle
            className="text-green-600 mb-3"
            size={24}
          />

          <h3 className="font-bold">
            Smart Recommendations
          </h3>

          <p className="text-sm text-gray-500 mt-2">
            Get practical next-step recommendations for your crops.
          </p>

        </div>

      </div>

    </div>
  );
}

export default PestDetection;
