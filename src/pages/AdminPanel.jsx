import { useMemo, useState } from "react";
import {
  Settings,
  Users,
  Sprout,
  Bug,
  ShoppingCart,
  BookOpen,
  TrendingUp,
  Activity,
  Search,
  Trash2,
  CheckCircle,
  AlertTriangle,
  X,
  Shield,
} from "lucide-react";

function AdminPanel() {
  const [search, setSearch] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [showAddUser, setShowAddUser] = useState(false);

  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Ravi Kumar",
      email: "ravi@example.com",
      role: "Farmer",
      status: "Active",
    },
    {
      id: 2,
      name: "Priya Sharma",
      email: "priya@example.com",
      role: "Farmer",
      status: "Active",
    },
    {
      id: 3,
      name: "Arjun Reddy",
      email: "arjun@example.com",
      role: "Farmer",
      status: "Inactive",
    },
    {
      id: 4,
      name: "Admin User",
      email: "admin@agrishield.com",
      role: "Admin",
      status: "Active",
    },
  ]);

  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    role: "Farmer",
  });

  const stats = [
    {
      title: "Total Users",
      value: "1,248",
      change: "+12%",
      icon: Users,
      bg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      title: "Registered Farms",
      value: "486",
      change: "+8%",
      icon: Sprout,
      bg: "bg-green-100",
      iconColor: "text-green-700",
    },
    {
      title: "Pest Detections",
      value: "3,842",
      change: "+18%",
      icon: Bug,
      bg: "bg-red-100",
      iconColor: "text-red-600",
    },
    {
      title: "Marketplace Orders",
      value: "927",
      change: "+15%",
      icon: ShoppingCart,
      bg: "bg-orange-100",
      iconColor: "text-orange-600",
    },
  ];

  const activities = [
    {
      action: "New farmer registered",
      user: "Suresh Kumar",
      time: "10 minutes ago",
      icon: Users,
    },
    {
      action: "Pest detection completed",
      user: "Ravi Kumar",
      time: "25 minutes ago",
      icon: Bug,
    },
    {
      action: "New marketplace order",
      user: "Priya Sharma",
      time: "42 minutes ago",
      icon: ShoppingCart,
    },
    {
      action: "Learning resource added",
      user: "Admin User",
      time: "1 hour ago",
      icon: BookOpen,
    },
    {
      action: "Farm added",
      user: "Arjun Reddy",
      time: "2 hours ago",
      icon: Sprout,
    },
  ];

  const filteredUsers = useMemo(() => {
    const searchText = search.toLowerCase();

    return users.filter(
      (user) =>
        user.name.toLowerCase().includes(searchText) ||
        user.email.toLowerCase().includes(searchText) ||
        user.role.toLowerCase().includes(searchText)
    );
  }, [users, search]);

  const deleteUser = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to remove this user?"
    );

    if (confirmDelete) {
      setUsers((previousUsers) =>
        previousUsers.filter((user) => user.id !== id)
      );
    }
  };

  const addUser = (event) => {
    event.preventDefault();

    if (!newUser.name.trim() || !newUser.email.trim()) {
      return;
    }

    const user = {
      id: Date.now(),
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
      status: "Active",
    };

    setUsers((previousUsers) => [...previousUsers, user]);

    setNewUser({
      name: "",
      email: "",
      role: "Farmer",
    });

    setShowAddUser(false);
  };

  return (
    <div className="min-h-screen bg-green-50 p-8">

      {/* Header */}
      <div className="flex items-center justify-between mb-8">

        <div className="flex items-center gap-3">

          <div className="bg-green-700 text-white p-3 rounded-xl">
            <Settings size={28} />
          </div>

          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Admin Panel
            </h1>

            <p className="text-gray-600 mt-1">
              Manage AgriShield users, farms, activity and platform
              statistics.
            </p>
          </div>

        </div>

        <div className="flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-xl">
          <Shield size={18} />
          <span className="font-semibold">
            Administrator
          </span>
        </div>

      </div>

      {/* Statistics */}
      <div className="grid grid-cols-4 gap-5 mb-6">

        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="bg-white rounded-2xl shadow-sm p-5"
            >

              <div className="flex items-center justify-between">

                <div>
                  <p className="text-sm text-gray-500">
                    {stat.title}
                  </p>

                  <h2 className="text-3xl font-bold text-gray-900 mt-2">
                    {stat.value}
                  </h2>
                </div>

                <div className={`${stat.bg} p-3 rounded-xl`}>
                  <Icon
                    size={25}
                    className={stat.iconColor}
                  />
                </div>

              </div>

              <div className="flex items-center gap-1 mt-4 text-green-600 text-sm font-semibold">
                <TrendingUp size={16} />
                {stat.change} this month
              </div>

            </div>
          );
        })}

      </div>

      {/* System Health */}
      <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">

        <div className="flex items-center justify-between mb-5">

          <div>
            <h2 className="text-xl font-bold text-gray-900">
              System Overview
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Current AgriShield platform status.
            </p>
          </div>

          <Activity
            className="text-green-700"
            size={27}
          />

        </div>

        <div className="grid grid-cols-3 gap-5">

          <div className="border rounded-xl p-5">

            <div className="flex items-center justify-between">

              <span className="font-semibold text-gray-700">
                Platform Status
              </span>

              <CheckCircle
                className="text-green-600"
                size={21}
              />

            </div>

            <p className="text-2xl font-bold text-green-700 mt-3">
              Operational
            </p>

          </div>

          <div className="border rounded-xl p-5">

            <div className="flex items-center justify-between">

              <span className="font-semibold text-gray-700">
                AI Services
              </span>

              <CheckCircle
                className="text-green-600"
                size={21}
              />

            </div>

            <p className="text-2xl font-bold text-green-700 mt-3">
              Online
            </p>

          </div>

          <div className="border rounded-xl p-5">

            <div className="flex items-center justify-between">

              <span className="font-semibold text-gray-700">
                Alerts
              </span>

              <AlertTriangle
                className="text-yellow-600"
                size={21}
              />

            </div>

            <p className="text-2xl font-bold text-yellow-600 mt-3">
              4 Pending
            </p>

          </div>

        </div>

      </div>

      {/* Users + Activity */}
      <div className="grid grid-cols-3 gap-6">

        {/* Users */}
        <div className="col-span-2 bg-white rounded-2xl shadow-sm p-6">

          <div className="flex items-center justify-between mb-5">

            <div>
              <h2 className="text-xl font-bold text-gray-900">
                User Management
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                Manage registered AgriShield users.
              </p>
            </div>

            <button
              onClick={() => setShowAddUser(true)}
              className="bg-green-700 hover:bg-green-800 text-white px-4 py-2.5 rounded-xl font-semibold transition"
            >
              + Add User
            </button>

          </div>

          {/* Search */}
          <div className="relative mb-5">

            <Search
              size={19}
              className="absolute left-4 top-3.5 text-gray-400"
            />

            <input
              type="text"
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
              placeholder="Search users..."
              className="w-full border rounded-xl py-3 pl-11 pr-4 outline-none focus:ring-2 focus:ring-green-300"
            />

          </div>

          {/* User Table */}
          <div className="overflow-x-auto">

            <table className="w-full">

              <thead>
                <tr className="border-b text-left">

                  <th className="pb-3 text-sm text-gray-500">
                    User
                  </th>

                  <th className="pb-3 text-sm text-gray-500">
                    Role
                  </th>

                  <th className="pb-3 text-sm text-gray-500">
                    Status
                  </th>

                  <th className="pb-3 text-sm text-gray-500">
                    Action
                  </th>

                </tr>
              </thead>

              <tbody>

                {filteredUsers.map((user) => (

                  <tr
                    key={user.id}
                    className="border-b last:border-0"
                  >

                    <td className="py-4">

                      <div className="flex items-center gap-3">

                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                          <Users
                            size={19}
                            className="text-green-700"
                          />
                        </div>

                        <div>

                          <p className="font-semibold text-gray-900">
                            {user.name}
                          </p>

                          <p className="text-xs text-gray-500">
                            {user.email}
                          </p>

                        </div>

                      </div>

                    </td>

                    <td className="py-4">

                      <span className="text-sm bg-gray-100 px-3 py-1 rounded-full">
                        {user.role}
                      </span>

                    </td>

                    <td className="py-4">

                      <span
                        className={`text-xs px-3 py-1 rounded-full font-semibold ${
                          user.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : "bg-gray-100 text-gray-500"
                        }`}
                      >
                        {user.status}
                      </span>

                    </td>

                    <td className="py-4">

                      <div className="flex items-center gap-2">

                        <button
                          onClick={() =>
                            setSelectedUser(user)
                          }
                          className="text-sm text-green-700 font-semibold hover:underline"
                        >
                          View
                        </button>

                        <button
                          onClick={() =>
                            deleteUser(user.id)
                          }
                          className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
                          title="Delete user"
                        >
                          <Trash2 size={17} />
                        </button>

                      </div>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

            {filteredUsers.length === 0 && (
              <div className="text-center py-10">

                <Users
                  className="mx-auto text-gray-300 mb-3"
                  size={40}
                />

                <p className="font-semibold text-gray-600">
                  No users found
                </p>

              </div>
            )}

          </div>

        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-2xl shadow-sm p-6">

          <div className="flex items-center gap-2 mb-5">

            <Activity
              className="text-green-700"
              size={22}
            />

            <h2 className="text-xl font-bold text-gray-900">
              Recent Activity
            </h2>

          </div>

          <div className="space-y-5">

            {activities.map((activity, index) => {
              const Icon = activity.icon;

              return (
                <div
                  key={index}
                  className="flex gap-3"
                >

                  <div className="bg-green-100 p-2 rounded-xl h-fit">
                    <Icon
                      size={18}
                      className="text-green-700"
                    />
                  </div>

                  <div>

                    <p className="text-sm font-semibold text-gray-800">
                      {activity.action}
                    </p>

                    <p className="text-xs text-gray-500 mt-1">
                      {activity.user}
                    </p>

                    <p className="text-xs text-gray-400 mt-1">
                      {activity.time}
                    </p>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </div>

      {/* Platform Features */}
      <div className="grid grid-cols-3 gap-5 mt-6">

        <div className="bg-white rounded-2xl shadow-sm p-5">

          <div className="bg-blue-100 w-fit p-3 rounded-xl mb-3">
            <Users
              className="text-blue-600"
              size={24}
            />
          </div>

          <h3 className="font-bold text-gray-900">
            User Management
          </h3>

          <p className="text-sm text-gray-500 mt-2">
            View and manage farmers, administrators and platform
            users.
          </p>

        </div>

        <div className="bg-white rounded-2xl shadow-sm p-5">

          <div className="bg-red-100 w-fit p-3 rounded-xl mb-3">
            <Bug
              className="text-red-600"
              size={24}
            />
          </div>

          <h3 className="font-bold text-gray-900">
            AI Monitoring
          </h3>

          <p className="text-sm text-gray-500 mt-2">
            Monitor pest detection and prediction activity across
            the platform.
          </p>

        </div>

        <div className="bg-white rounded-2xl shadow-sm p-5">

          <div className="bg-green-100 w-fit p-3 rounded-xl mb-3">
            <Activity
              className="text-green-700"
              size={24}
            />
          </div>

          <h3 className="font-bold text-gray-900">
            System Monitoring
          </h3>

          <p className="text-sm text-gray-500 mt-2">
            Monitor the overall health and activity of AgriShield.
          </p>

        </div>

      </div>

      {/* View User Modal */}
      {selectedUser && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">

          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md">

            <div className="flex items-center justify-between p-6 border-b">

              <h2 className="text-xl font-bold text-gray-900">
                User Details
              </h2>

              <button
                onClick={() => setSelectedUser(null)}
                className="p-2 rounded-full hover:bg-gray-100"
              >
                <X size={21} />
              </button>

            </div>

            <div className="p-6">

              <div className="flex items-center gap-4 mb-6">

                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <Users
                    size={30}
                    className="text-green-700"
                  />
                </div>

                <div>

                  <h3 className="text-xl font-bold text-gray-900">
                    {selectedUser.name}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {selectedUser.email}
                  </p>

                </div>

              </div>

              <div className="space-y-4">

                <div className="flex justify-between border-b pb-3">

                  <span className="text-gray-500">
                    Role
                  </span>

                  <span className="font-semibold">
                    {selectedUser.role}
                  </span>

                </div>

                <div className="flex justify-between border-b pb-3">

                  <span className="text-gray-500">
                    Status
                  </span>

                  <span className="font-semibold text-green-700">
                    {selectedUser.status}
                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-gray-500">
                    User ID
                  </span>

                  <span className="font-semibold">
                    #{selectedUser.id}
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>
      )}

      {/* Add User Modal */}
      {showAddUser && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">

          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md">

            <div className="flex items-center justify-between p-6 border-b">

              <h2 className="text-xl font-bold text-gray-900">
                Add New User
              </h2>

              <button
                onClick={() => setShowAddUser(false)}
                className="p-2 rounded-full hover:bg-gray-100"
              >
                <X size={21} />
              </button>

            </div>

            <form
              onSubmit={addUser}
              className="p-6 space-y-4"
            >

              <div>

                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  value={newUser.name}
                  onChange={(event) =>
                    setNewUser({
                      ...newUser,
                      name: event.target.value,
                    })
                  }
                  placeholder="Enter user name"
                  className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-300"
                />

              </div>

              <div>

                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email
                </label>

                <input
                  type="email"
                  value={newUser.email}
                  onChange={(event) =>
                    setNewUser({
                      ...newUser,
                      email: event.target.value,
                    })
                  }
                  placeholder="Enter email address"
                  className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-300"
                />

              </div>

              <div>

                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Role
                </label>

                <select
                  value={newUser.role}
                  onChange={(event) =>
                    setNewUser({
                      ...newUser,
                      role: event.target.value,
                    })
                  }
                  className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-300"
                >
                  <option>Farmer</option>
                  <option>Admin</option>
                </select>

              </div>

              <button
                type="submit"
                className="w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-xl font-semibold transition"
              >
                Add User
              </button>

            </form>

          </div>

        </div>
      )}

    </div>
  );
}

export default AdminPanel;