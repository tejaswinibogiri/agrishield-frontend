import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {
  LayoutDashboard,
  Bug,
  TrendingUp,
  ShoppingCart,
  BookOpen,
  Tractor,
  Bot,
  Settings,
} from "lucide-react";

import Dashboard from "./pages/Dashboard";
import PestDetection from "./pages/PestDetection";
import PestPrediction from "./pages/PestPrediction";
import FarmManager from "./pages/FarmManager";
import Marketplace from "./pages/Marketplace";
import LearningHub from "./pages/LearningHub";
import AIAssistant from "./pages/AIAssistant";
import AdminPanel from "./pages/AdminPanel";

function Placeholder({ title }) {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-green-800">{title}</h1>

      <p className="mt-2 text-gray-600">
        This AgriShield module is coming next.
      </p>
    </div>
  );
}

function App() {
  const menuItems = [
    {
      name: "Dashboard",
      path: "/",
      icon: LayoutDashboard,
    },
    {
      name: "Pest Detection",
      path: "/pest-detection",
      icon: Bug,
    },
    {
      name: "Pest Prediction",
      path: "/pest-prediction",
      icon: TrendingUp,
    },
    {
      name: "Marketplace",
      path: "/marketplace",
      icon: ShoppingCart,
    },
    {
      name: "Learning Hub",
      path: "/learning-hub",
      icon: BookOpen,
    },
    {
      name: "Farm Manager",
      path: "/farm-manager",
      icon: Tractor,
    },
    {
      name: "AI Assistant",
      path: "/ai-assistant",
      icon: Bot,
    },
    {
      name: "Admin Panel",
      path: "/admin-panel",
      icon: Settings,
    },
  ];

  return (
    <BrowserRouter>
      <div className="min-h-screen flex">

        {/* Sidebar */}
        <aside className="w-64 min-h-screen bg-green-900 text-white p-5">

          <h1 className="text-2xl font-bold mb-8">
            🌱 AgriShield
          </h1>

          <nav className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-green-700 transition"
                >
                  <Icon size={20} />

                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>

        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-green-50">

          <Routes>

            {/* Dashboard */}
            <Route
              path="/"
              element={<Dashboard />}
            />

            {/* Pest Detection */}
            <Route
              path="/pest-detection"
              element={<PestDetection />}
            />

            {/* Other Pages */}
            <Route
              path="/pest-prediction"
              element={<PestPrediction />}
            />

            <Route
              path="/marketplace"
              element={<Marketplace />}
            />

            <Route
              path="/learning-hub"
              element={<LearningHub />}
            />

           <Route
              path="/farm-manager"
              element={<FarmManager />}
            />

            <Route
              path="/ai-assistant"
              element={<AIAssistant />}
            />

            <Route
              path="/admin-panel"
              element={<AdminPanel />}
            />

          </Routes>

        </main>

      </div>
    </BrowserRouter>
  );
}

export default App;