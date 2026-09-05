import { useState } from "react";
import {
  TrendingUp,
  Thermometer,
  Droplets,
  CloudRain,
  MapPin,
  Sprout,
  AlertTriangle,
  CheckCircle,
  CalendarDays,
  ShieldCheck,
} from "lucide-react";

function PestPrediction() {
  const [crop, setCrop] = useState("Tomato");
  const [temperature, setTemperature] = useState("28");
  const [humidity, setHumidity] = useState("68");
  const [rainfall, setRainfall] = useState("12");
  const [location, setLocation] = useState("Bengaluru");
  const [prediction, setPrediction] = useState(null);

  const predictRisk = () => {
    setPrediction({
      pest: "Aphids",
      risk: 78,
      level: "High",
      confidence: "91%",
      action:
        "Monitor the underside of leaves regularly and take preventive pest-control measures before the infestation spreads.",
    });
  };

  return (
    <div className="min-h-screen bg-green-50 p-8">

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3">
          <div className="bg-green-700 text-white p-3 rounded-xl">
            <TrendingUp size={28} />
          </div>

          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Pest Prediction
            </h1>

            <p className="text-gray-600 mt-1">
              Predict potential pest outbreaks using farm and weather
              conditions.
            </p>
          </div>
        </div>
      </div>

      {/* Main Section */}
      <div className="grid grid-cols-3 gap-6">

        {/* Farm Conditions */}
        <div className="col-span-2 bg-white rounded-2xl shadow-sm p-6">

          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Farm Conditions
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                Enter the current conditions of your farm.
              </p>
            </div>

            <Sprout
              className="text-green-700"
              size={30}
            />
          </div>

          {/* Crop */}
          <div className="mb-5">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Crop
            </label>

            <div className="relative">
              <Sprout
                size={19}
                className="absolute left-3 top-3 text-green-600"
              />

              <select
                value={crop}
                onChange={(e) => setCrop(e.target.value)}
                className="w-full border rounded-xl py-3 pl-10 pr-4 outline-none focus:ring-2 focus:ring-green-300"
              >
                <option>Tomato</option>
                <option>Rice</option>
                <option>Wheat</option>
                <option>Cotton</option>
                <option>Maize</option>
                <option>Potato</option>
              </select>
            </div>
          </div>

          {/* Location */}
          <div className="mb-5">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Farm Location
            </label>

            <div className="relative">
              <MapPin
                size={19}
                className="absolute left-3 top-3 text-green-600"
              />

              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter your location"
                className="w-full border rounded-xl py-3 pl-10 pr-4 outline-none focus:ring-2 focus:ring-green-300"
              />
            </div>
          </div>

          {/* Weather Inputs */}
          <div className="grid grid-cols-3 gap-4">

            {/* Temperature */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Temperature (°C)
              </label>

              <div className="relative">
                <Thermometer
                  size={19}
                  className="absolute left-3 top-3 text-red-500"
                />

                <input
                  type="number"
                  value={temperature}
                  onChange={(e) => setTemperature(e.target.value)}
                  className="w-full border rounded-xl py-3 pl-10 pr-3 outline-none focus:ring-2 focus:ring-green-300"
                />
              </div>
            </div>

            {/* Humidity */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Humidity (%)
              </label>

              <div className="relative">
                <Droplets
                  size={19}
                  className="absolute left-3 top-3 text-blue-500"
                />

                <input
                  type="number"
                  value={humidity}
                  onChange={(e) => setHumidity(e.target.value)}
                  className="w-full border rounded-xl py-3 pl-10 pr-3 outline-none focus:ring-2 focus:ring-green-300"
                />
              </div>
            </div>

            {/* Rainfall */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Rainfall (mm)
              </label>

              <div className="relative">
                <CloudRain
                  size={19}
                  className="absolute left-3 top-3 text-blue-600"
                />

                <input
                  type="number"
                  value={rainfall}
                  onChange={(e) => setRainfall(e.target.value)}
                  className="w-full border rounded-xl py-3 pl-10 pr-3 outline-none focus:ring-2 focus:ring-green-300"
                />
              </div>
            </div>

          </div>

          {/* Predict Button */}
          <button
            onClick={predictRisk}
            className="w-full mt-6 bg-green-700 hover:bg-green-800 text-white py-3 rounded-xl font-semibold transition"
          >
            Predict Pest Risk
          </button>

        </div>

        {/* Current Conditions */}
        <div className="bg-white rounded-2xl shadow-sm p-6">

          <h2 className="text-xl font-bold text-gray-900">
            Current Conditions
          </h2>

          <p className="text-sm text-gray-500 mt-1 mb-6">
            Conditions used by the prediction system.
          </p>

          <div className="space-y-4">

            {/* Temperature */}
            <div className="flex items-center justify-between bg-red-50 rounded-xl p-4">
              <div className="flex items-center gap-3">
                <Thermometer className="text-red-500" />
                <span className="font-semibold">
                  Temperature
                </span>
              </div>

              <span className="font-bold">
                {temperature}°C
              </span>
            </div>

            {/* Humidity */}
            <div className="flex items-center justify-between bg-blue-50 rounded-xl p-4">
              <div className="flex items-center gap-3">
                <Droplets className="text-blue-500" />
                <span className="font-semibold">
                  Humidity
                </span>
              </div>

              <span className="font-bold">
                {humidity}%
              </span>
            </div>

            {/* Rainfall */}
            <div className="flex items-center justify-between bg-sky-50 rounded-xl p-4">
              <div className="flex items-center gap-3">
                <CloudRain className="text-blue-600" />
                <span className="font-semibold">
                  Rainfall
                </span>
              </div>

              <span className="font-bold">
                {rainfall} mm
              </span>
            </div>

            {/* Location */}
            <div className="flex items-center justify-between bg-green-50 rounded-xl p-4">
              <div className="flex items-center gap-3">
                <MapPin className="text-green-700" />
                <span className="font-semibold">
                  Location
                </span>
              </div>

              <span className="font-bold">
                {location}
              </span>
            </div>

          </div>
        </div>
      </div>

      {/* Prediction Result */}
      {prediction && (
        <div className="mt-6">

          <div className="bg-white rounded-2xl shadow-sm p-6">

            {/* Result Header */}
            <div className="flex items-center justify-between mb-6">

              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  AI Prediction Result
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  Estimated pest outbreak risk for {crop}.
                </p>
              </div>

              <ShieldCheck
                className="text-green-600"
                size={32}
              />

            </div>

            {/* Result Cards */}
            <div className="grid grid-cols-4 gap-4">

              {/* Pest */}
              <div className="bg-red-50 rounded-xl p-5">
                <p className="text-sm text-gray-500">
                  Predicted Pest
                </p>

                <p className="text-2xl font-bold text-red-700 mt-2">
                  {prediction.pest}
                </p>
              </div>

              {/* Risk */}
              <div className="bg-orange-50 rounded-xl p-5">
                <p className="text-sm text-gray-500">
                  Risk Score
                </p>

                <p className="text-2xl font-bold text-orange-600 mt-2">
                  {prediction.risk}%
                </p>
              </div>

              {/* Risk Level */}
              <div className="bg-red-50 rounded-xl p-5">
                <p className="text-sm text-gray-500">
                  Risk Level
                </p>

                <p className="text-2xl font-bold text-red-600 mt-2">
                  {prediction.level}
                </p>
              </div>

              {/* Confidence */}
              <div className="bg-green-50 rounded-xl p-5">
                <p className="text-sm text-gray-500">
                  Confidence
                </p>

                <p className="text-2xl font-bold text-green-700 mt-2">
                  {prediction.confidence}
                </p>
              </div>

            </div>

            {/* Preventive Action */}
            <div className="mt-5 bg-yellow-50 border border-yellow-200 rounded-xl p-5">

              <div className="flex gap-3">

                <AlertTriangle
                  className="text-yellow-600 shrink-0"
                  size={24}
                />

                <div>
                  <h3 className="font-bold text-gray-900">
                    Preventive Action
                  </h3>

                  <p className="text-sm text-gray-600 mt-1">
                    {prediction.action}
                  </p>
                </div>

              </div>

            </div>

            {/* 7-Day Forecast */}
            <div className="mt-6">

              <div className="flex items-center gap-2 mb-4">

                <CalendarDays
                  className="text-green-700"
                  size={22}
                />

                <h3 className="text-lg font-bold text-gray-900">
                  7-Day Outbreak Forecast
                </h3>

              </div>

              <div className="grid grid-cols-7 gap-3">

                <div className="border rounded-xl p-4 text-center">
                  <p className="text-xs text-gray-500">
                    Day 1
                  </p>

                  <p className="text-xl font-bold text-yellow-600 mt-2">
                    48%
                  </p>
                </div>

                <div className="border rounded-xl p-4 text-center">
                  <p className="text-xs text-gray-500">
                    Day 2
                  </p>

                  <p className="text-xl font-bold text-yellow-600 mt-2">
                    55%
                  </p>
                </div>

                <div className="border rounded-xl p-4 text-center">
                  <p className="text-xs text-gray-500">
                    Day 3
                  </p>

                  <p className="text-xl font-bold text-orange-600 mt-2">
                    63%
                  </p>
                </div>

                <div className="border rounded-xl p-4 text-center">
                  <p className="text-xs text-gray-500">
                    Day 4
                  </p>

                  <p className="text-xl font-bold text-orange-600 mt-2">
                    70%
                  </p>
                </div>

                <div className="border rounded-xl p-4 text-center">
                  <p className="text-xs text-gray-500">
                    Day 5
                  </p>

                  <p className="text-xl font-bold text-red-600 mt-2">
                    78%
                  </p>
                </div>

                <div className="border rounded-xl p-4 text-center">
                  <p className="text-xs text-gray-500">
                    Day 6
                  </p>

                  <p className="text-xl font-bold text-red-600 mt-2">
                    82%
                  </p>
                </div>

                <div className="border rounded-xl p-4 text-center">
                  <p className="text-xs text-gray-500">
                    Day 7
                  </p>

                  <p className="text-xl font-bold text-red-700 mt-2">
                    86%
                  </p>
                </div>

              </div>
            </div>

            {/* Completed */}
            <div className="flex items-center gap-2 mt-6 text-green-700">

              <CheckCircle size={20} />

              <span className="font-semibold">
                Prediction analysis completed
              </span>

            </div>

          </div>
        </div>
      )}

    </div>
  );
}

export default PestPrediction;
