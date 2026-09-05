import { useState } from "react";
import {
  Tractor,
  Sprout,
  MapPin,
  Droplets,
  HeartPulse,
  CalendarDays,
  AlertTriangle,
  Plus,
  Wheat,
  CheckCircle,
  X,
} from "lucide-react";

function FarmManager() {
  const [showForm, setShowForm] = useState(false);

  const [farms, setFarms] = useState([
    {
      name: "Green Valley Farm",
      location: "Bengaluru",
      area: "5 Acres",
      crop: "Tomato",
      health: 92,
      irrigation: "Good",
      status: "Healthy",
    },
    {
      name: "Sunrise Farm",
      location: "Vijayawada",
      area: "8 Acres",
      crop: "Rice",
      health: 84,
      irrigation: "Good",
      status: "Healthy",
    },
    {
      name: "River Side Farm",
      location: "Guntur",
      area: "4 Acres",
      crop: "Chilli",
      health: 71,
      irrigation: "Needs Attention",
      status: "Attention",
    },
  ]);

  const [newFarm, setNewFarm] = useState({
    name: "",
    location: "",
    area: "",
    crop: "Tomato",
  });

  const handleChange = (event) => {
    setNewFarm({
      ...newFarm,
      [event.target.name]: event.target.value,
    });
  };

  const addFarm = (event) => {
    event.preventDefault();

    if (
      !newFarm.name ||
      !newFarm.location ||
      !newFarm.area
    ) {
      return;
    }

    const farm = {
      name: newFarm.name,
      location: newFarm.location,
      area: `${newFarm.area} Acres`,
      crop: newFarm.crop,
      health: 100,
      irrigation: "Good",
      status: "Healthy",
    };

    setFarms([...farms, farm]);

    setNewFarm({
      name: "",
      location: "",
      area: "",
      crop: "Tomato",
    });

    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-green-50 p-8">

      {/* Header */}
      <div className="flex items-center justify-between mb-8">

        <div className="flex items-center gap-3">

          <div className="bg-green-700 text-white p-3 rounded-xl">
            <Tractor size={28} />
          </div>

          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Farm Manager
            </h1>

            <p className="text-gray-600 mt-1">
              Manage your farms, crops, irrigation and farm health.
            </p>
          </div>

        </div>

        <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white px-5 py-3 rounded-xl font-semibold transition"
        >
          <Plus size={20} />
          Add Farm
        </button>

      </div>

      {/* Statistics */}
      <div className="grid grid-cols-4 gap-5 mb-6">

        {/* Total Farms */}
        <div className="bg-white rounded-2xl p-5 shadow-sm">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-gray-500">
                Total Farms
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-2">
                {farms.length}
              </h2>
            </div>

            <div className="bg-green-100 p-3 rounded-xl">
              <Tractor
                className="text-green-700"
                size={26}
              />
            </div>

          </div>

          <p className="text-sm text-green-600 mt-4">
            Farms under management
          </p>

        </div>

        {/* Total Area */}
        <div className="bg-white rounded-2xl p-5 shadow-sm">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-gray-500">
                Total Area
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-2">
                17
              </h2>
            </div>

            <div className="bg-yellow-100 p-3 rounded-xl">
              <Wheat
                className="text-yellow-700"
                size={26}
              />
            </div>

          </div>

          <p className="text-sm text-yellow-600 mt-4">
            Acres of farmland
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
            Crops currently growing
          </p>

        </div>

        {/* Average Health */}
        <div className="bg-white rounded-2xl p-5 shadow-sm">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-gray-500">
                Average Health
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-2">
                82%
              </h2>
            </div>

            <div className="bg-blue-100 p-3 rounded-xl">
              <HeartPulse
                className="text-blue-600"
                size={26}
              />
            </div>

          </div>

          <p className="text-sm text-blue-600 mt-4">
            Overall farm condition
          </p>

        </div>

      </div>

      {/* Farm Cards */}
      <div className="bg-white rounded-2xl shadow-sm p-6">

        <div className="flex items-center justify-between mb-6">

          <div>
            <h2 className="text-xl font-bold text-gray-900">
              My Farms
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              View and monitor your registered farms.
            </p>
          </div>

          <Sprout
            className="text-green-700"
            size={28}
          />

        </div>

        <div className="grid grid-cols-3 gap-5">

          {farms.map((farm, index) => (

            <div
              key={index}
              className="border rounded-2xl p-5 hover:shadow-md transition"
            >

              {/* Farm Header */}
              <div className="flex items-start justify-between">

                <div className="flex items-center gap-3">

                  <div className="bg-green-100 p-3 rounded-xl">
                    <Tractor
                      className="text-green-700"
                      size={24}
                    />
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900">
                      {farm.name}
                    </h3>

                    <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
                      <MapPin size={14} />
                      {farm.location}
                    </div>
                  </div>

                </div>

                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    farm.status === "Healthy"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {farm.status}
                </span>

              </div>

              {/* Farm Details */}
              <div className="grid grid-cols-2 gap-3 mt-5">

                <div className="bg-green-50 rounded-xl p-3">

                  <p className="text-xs text-gray-500">
                    Area
                  </p>

                  <p className="font-bold text-gray-800 mt-1">
                    {farm.area}
                  </p>

                </div>

                <div className="bg-green-50 rounded-xl p-3">

                  <p className="text-xs text-gray-500">
                    Crop
                  </p>

                  <p className="font-bold text-gray-800 mt-1">
                    {farm.crop}
                  </p>

                </div>

              </div>

              {/* Health */}
              <div className="mt-5">

                <div className="flex items-center justify-between mb-2">

                  <div className="flex items-center gap-2">
                    <HeartPulse
                      size={18}
                      className="text-green-600"
                    />

                    <span className="text-sm font-semibold">
                      Farm Health
                    </span>
                  </div>

                  <span className="text-sm font-bold text-green-700">
                    {farm.health}%
                  </span>

                </div>

                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">

                  <div
                    className="h-full bg-green-600 rounded-full"
                    style={{
                      width: `${farm.health}%`,
                    }}
                  />

                </div>

              </div>

              {/* Irrigation */}
              <div className="flex items-center justify-between mt-5">

                <div className="flex items-center gap-2">

                  <Droplets
                    size={18}
                    className="text-blue-500"
                  />

                  <span className="text-sm font-semibold">
                    Irrigation
                  </span>

                </div>

                <span
                  className={`text-sm font-semibold ${
                    farm.irrigation === "Good"
                      ? "text-green-600"
                      : "text-yellow-600"
                  }`}
                >
                  {farm.irrigation}
                </span>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* Lower Section */}
      <div className="grid grid-cols-2 gap-6 mt-6">

        {/* Crop Calendar */}
        <div className="bg-white rounded-2xl shadow-sm p-6">

          <div className="flex items-center gap-3 mb-5">

            <div className="bg-green-100 p-3 rounded-xl">
              <CalendarDays
                className="text-green-700"
                size={24}
              />
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Crop Calendar
              </h2>

              <p className="text-sm text-gray-500">
                Upcoming farm activities
              </p>
            </div>

          </div>

          <div className="space-y-3">

            <div className="flex items-center justify-between border rounded-xl p-4">

              <div>
                <p className="font-semibold text-gray-800">
                  Tomato Field
                </p>

                <p className="text-sm text-gray-500">
                  Fertilizer application
                </p>
              </div>

              <span className="text-sm font-semibold text-green-700">
                Tomorrow
              </span>

            </div>

            <div className="flex items-center justify-between border rounded-xl p-4">

              <div>
                <p className="font-semibold text-gray-800">
                  Rice Field
                </p>

                <p className="text-sm text-gray-500">
                  Irrigation check
                </p>
              </div>

              <span className="text-sm font-semibold text-blue-600">
                In 2 days
              </span>

            </div>

            <div className="flex items-center justify-between border rounded-xl p-4">

              <div>
                <p className="font-semibold text-gray-800">
                  Chilli Field
                </p>

                <p className="text-sm text-gray-500">
                  Pest inspection
                </p>
              </div>

              <span className="text-sm font-semibold text-yellow-600">
                In 3 days
              </span>

            </div>

          </div>

        </div>

        {/* Farm Alerts */}
        <div className="bg-white rounded-2xl shadow-sm p-6">

          <div className="flex items-center gap-3 mb-5">

            <div className="bg-yellow-100 p-3 rounded-xl">
              <AlertTriangle
                className="text-yellow-600"
                size={24}
              />
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Farm Alerts
              </h2>

              <p className="text-sm text-gray-500">
                Things that need your attention
              </p>
            </div>

          </div>

          <div className="space-y-3">

            <div className="border border-yellow-200 bg-yellow-50 rounded-xl p-4">

              <div className="flex gap-3">

                <AlertTriangle
                  className="text-yellow-600 shrink-0"
                  size={20}
                />

                <div>
                  <p className="font-semibold text-gray-800">
                    Irrigation needs attention
                  </p>

                  <p className="text-sm text-gray-600 mt-1">
                    River Side Farm has low irrigation efficiency.
                  </p>
                </div>

              </div>

            </div>

            <div className="border border-green-200 bg-green-50 rounded-xl p-4">

              <div className="flex gap-3">

                <CheckCircle
                  className="text-green-600 shrink-0"
                  size={20}
                />

                <div>
                  <p className="font-semibold text-gray-800">
                    Green Valley Farm is healthy
                  </p>

                  <p className="text-sm text-gray-600 mt-1">
                    Crop health is above the recommended level.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Add Farm Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4">

          <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-6">

            {/* Modal Header */}
            <div className="flex items-center justify-between mb-6">

              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Add New Farm
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  Enter your farm details.
                </p>
              </div>

              <button
                onClick={() => setShowForm(false)}
                className="p-2 rounded-full hover:bg-gray-100"
              >
                <X size={20} />
              </button>

            </div>

            {/* Form */}
            <form onSubmit={addFarm}>

              {/* Farm Name */}
              <div className="mb-4">

                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Farm Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={newFarm.name}
                  onChange={handleChange}
                  placeholder="Example: Green Valley Farm"
                  className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-300"
                />

              </div>

              {/* Location */}
              <div className="mb-4">

                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Location
                </label>

                <input
                  type="text"
                  name="location"
                  value={newFarm.location}
                  onChange={handleChange}
                  placeholder="Example: Guntur"
                  className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-300"
                />

              </div>

              {/* Area */}
              <div className="mb-4">

                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Area (Acres)
                </label>

                <input
                  type="number"
                  name="area"
                  value={newFarm.area}
                  onChange={handleChange}
                  placeholder="Example: 5"
                  className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-300"
                />

              </div>

              {/* Crop */}
              <div className="mb-6">

                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Crop
                </label>

                <select
                  name="crop"
                  value={newFarm.crop}
                  onChange={handleChange}
                  className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-300"
                >
                  <option>Tomato</option>
                  <option>Rice</option>
                  <option>Wheat</option>
                  <option>Cotton</option>
                  <option>Chilli</option>
                  <option>Maize</option>
                  <option>Potato</option>
                </select>

              </div>

              {/* Buttons */}
              <div className="flex gap-3">

                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-50"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="flex-1 bg-green-700 text-white py-3 rounded-xl font-semibold hover:bg-green-800"
                >
                  Add Farm
                </button>

              </div>

            </form>

          </div>

        </div>
      )}

    </div>
  );
}

export default FarmManager;
