import { useNavigate } from "react-router-dom";
import {
  Bug,
  Sprout,
  AlertTriangle,
  CloudSun,
  TrendingUp,
  ArrowRight,
  Activity,
} from "lucide-react";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-green-50 p-8">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Good Morning, Farmer! 🌱
        </h1>

        <p className="mt-2 text-gray-600">
          Here's what's happening on your farm today.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-5 mb-6">

        {/* Total Farms */}
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">
                Total Farms
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-2">
                3
              </h2>
            </div>

            <div className="bg-green-100 p-3 rounded-xl">
              <Sprout
                className="text-green-700"
                size={26}
              />
            </div>
          </div>

          <p className="text-sm text-green-600 mt-4">
            ↑ 1 this month
          </p>
        </div>

        {/* Active Crops */}
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">
                Active Crops
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-2">
                5
              </h2>
            </div>

            <div className="bg-green-100 p-3 rounded-xl">
              <Activity
                className="text-green-700"
                size={26}
              />
            </div>
          </div>

          <p className="text-sm text-green-600 mt-4">
            Healthy: 4 crops
          </p>
        </div>

        {/* Pest Alerts */}
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">
                Pest Alerts
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-2">
                4
              </h2>
            </div>

            <div className="bg-red-100 p-3 rounded-xl">
              <Bug
                className="text-red-600"
                size={26}
              />
            </div>
          </div>

          <p className="text-sm text-red-600 mt-4">
            2 high priority
          </p>
        </div>

        {/* Farm Health */}
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">
                Farm Health
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-2">
                87%
              </h2>
            </div>

            <div className="bg-blue-100 p-3 rounded-xl">
              <TrendingUp
                className="text-blue-600"
                size={26}
              />
            </div>
          </div>

          <p className="text-sm text-blue-600 mt-4">
            ↑ 5% from last week
          </p>
        </div>

      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-3 gap-6">

        {/* Weather */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">

          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Weather Today
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                Your farm location
              </p>
            </div>

            <CloudSun
              className="text-yellow-500"
              size={32}
            />
          </div>

          <div className="flex items-center gap-4">

            <span className="text-5xl font-bold text-gray-900">
              28°
            </span>

            <div>
              <p className="font-semibold text-gray-800">
                Partly Cloudy
              </p>

              <p className="text-sm text-gray-500">
                Humidity: 68%
              </p>
            </div>

          </div>

          <div className="grid grid-cols-2 gap-3 mt-6">

            <div className="bg-green-50 rounded-xl p-3">
              <p className="text-xs text-gray-500">
                Wind
              </p>

              <p className="font-bold text-gray-800">
                12 km/h
              </p>
            </div>

            <div className="bg-green-50 rounded-xl p-3">
              <p className="text-xs text-gray-500">
                Rain Chance
              </p>

              <p className="font-bold text-gray-800">
                30%
              </p>
            </div>

          </div>

        </div>

        {/* Recent Pest Alerts */}
        <div className="bg-white rounded-2xl p-6 shadow-sm col-span-2">

          <div className="flex items-center justify-between mb-5">

            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Recent Pest Alerts
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                Monitor potential threats
              </p>
            </div>

            <Bug
              className="text-green-700"
              size={28}
            />

          </div>

          <div className="space-y-3">

            {/* Alert 1 */}
            <div className="flex items-center justify-between border rounded-xl p-4">

              <div className="flex items-center gap-3">

                <div className="bg-red-100 p-2 rounded-lg">
                  <AlertTriangle
                    className="text-red-600"
                    size={20}
                  />
                </div>

                <div>
                  <p className="font-semibold text-gray-800">
                    Aphids detected
                  </p>

                  <p className="text-sm text-gray-500">
                    Tomato Field • 2 hours ago
                  </p>
                </div>

              </div>

              <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-semibold">
                High
              </span>

            </div>

            {/* Alert 2 */}
            <div className="flex items-center justify-between border rounded-xl p-4">

              <div className="flex items-center gap-3">

                <div className="bg-yellow-100 p-2 rounded-lg">
                  <AlertTriangle
                    className="text-yellow-600"
                    size={20}
                  />
                </div>

                <div>
                  <p className="font-semibold text-gray-800">
                    Leaf Miner warning
                  </p>

                  <p className="text-sm text-gray-500">
                    Vegetable Field • 5 hours ago
                  </p>
                </div>

              </div>

              <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-semibold">
                Medium
              </span>

            </div>

          </div>

        </div>

      </div>

      {/* Quick Actions */}
      <div className="mt-6 bg-white rounded-2xl p-6 shadow-sm">

        <h2 className="text-xl font-bold text-gray-900 mb-5">
          Quick Actions
        </h2>

        <div className="grid grid-cols-4 gap-4">

          {/* Detect Pest */}
          <button
            onClick={() => navigate("/pest-detection")}
            className="flex items-center justify-between bg-green-50 hover:bg-green-100 p-4 rounded-xl transition cursor-pointer"
          >
            <div className="flex items-center gap-3">

              <Bug
                className="text-green-700"
                size={22}
              />

              <span className="font-semibold text-gray-800">
                Detect Pest
              </span>

            </div>

            <ArrowRight size={18} />

          </button>

          {/* Predict Outbreak */}
          <button
            onClick={() => navigate("/pest-prediction")}
            className="flex items-center justify-between bg-green-50 hover:bg-green-100 p-4 rounded-xl transition cursor-pointer"
          >
            <div className="flex items-center gap-3">

              <TrendingUp
                className="text-green-700"
                size={22}
              />

              <span className="font-semibold text-gray-800">
                Predict Outbreak
              </span>

            </div>

            <ArrowRight size={18} />

          </button>

          {/* Manage Farm */}
          <button
            onClick={() => navigate("/farm-manager")}
            className="flex items-center justify-between bg-green-50 hover:bg-green-100 p-4 rounded-xl transition cursor-pointer"
          >
            <div className="flex items-center gap-3">

              <Sprout
                className="text-green-700"
                size={22}
              />

              <span className="font-semibold text-gray-800">
                Manage Farm
              </span>

            </div>

            <ArrowRight size={18} />

          </button>

          {/* Farm Health */}
          <button
            onClick={() => navigate("/farm-manager")}
            className="flex items-center justify-between bg-green-50 hover:bg-green-100 p-4 rounded-xl transition cursor-pointer"
          >
            <div className="flex items-center gap-3">

              <Activity
                className="text-green-700"
                size={22}
              />

              <span className="font-semibold text-gray-800">
                Farm Health
              </span>

            </div>

            <ArrowRight size={18} />

          </button>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;