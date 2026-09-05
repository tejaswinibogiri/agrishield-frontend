import { useMemo, useState } from "react";
import {
  ShoppingCart,
  Search,
  Sprout,
  Package,
  Plus,
  Minus,
  Trash2,
  X,
  Leaf,
  ShieldCheck,
  Truck,
} from "lucide-react";

function Marketplace() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  // Demo marketplace products
  const products = [
    {
      id: 1,
      name: "Organic Neem Pesticide",
      category: "Pest Control",
      price: 349,
      unit: "1 Liter",
      description:
        "Natural neem-based solution for controlling common crop pests.",
      icon: "🌿",
      stock: 24,
    },
    {
      id: 2,
      name: "Bio-Fertilizer",
      category: "Fertilizers",
      price: 499,
      unit: "5 Kg",
      description:
        "Organic bio-fertilizer designed to improve soil fertility and crop growth.",
      icon: "🌱",
      stock: 18,
    },
    {
      id: 3,
      name: "Tomato Seeds",
      category: "Seeds",
      price: 199,
      unit: "100 Seeds",
      description:
        "High-quality tomato seeds suitable for healthy crop production.",
      icon: "🍅",
      stock: 50,
    },
    {
      id: 4,
      name: "Rice Seeds",
      category: "Seeds",
      price: 399,
      unit: "5 Kg",
      description:
        "Quality rice seeds selected for reliable field cultivation.",
      icon: "🌾",
      stock: 35,
    },
    {
      id: 5,
      name: "Organic Compost",
      category: "Fertilizers",
      price: 299,
      unit: "10 Kg",
      description:
        "Nutrient-rich organic compost for improving soil health.",
      icon: "♻️",
      stock: 30,
    },
    {
      id: 6,
      name: "Yellow Sticky Traps",
      category: "Pest Control",
      price: 149,
      unit: "20 Traps",
      description:
        "Simple monitoring traps for detecting flying insect pests.",
      icon: "🟨",
      stock: 42,
    },
    {
      id: 7,
      name: "Drip Irrigation Kit",
      category: "Equipment",
      price: 1299,
      unit: "1 Kit",
      description:
        "Efficient drip irrigation kit for small and medium farms.",
      icon: "💧",
      stock: 12,
    },
    {
      id: 8,
      name: "Hand Garden Sprayer",
      category: "Equipment",
      price: 699,
      unit: "16 Liter",
      description:
        "Manual sprayer for applying crop protection solutions.",
      icon: "🚿",
      stock: 15,
    },
  ];

  const categories = [
    "All",
    "Seeds",
    "Fertilizers",
    "Pest Control",
    "Equipment",
  ];

  // Filter products
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        product.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        product.description
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" ||
        product.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  // Add product to cart
  const addToCart = (product) => {
    setCart((currentCart) => {
      const existingProduct = currentCart.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        return currentCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...currentCart,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };

  // Increase quantity
  const increaseQuantity = (id) => {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  // Decrease quantity
  const decreaseQuantity = (id) => {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Remove item
  const removeFromCart = (id) => {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== id)
    );
  };

  // Cart totals
  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const cartTotal = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-green-50 p-8">

      {/* Header */}
      <div className="flex items-center justify-between mb-8">

        <div className="flex items-center gap-3">

          <div className="bg-green-700 text-white p-3 rounded-xl">
            <ShoppingCart size={28} />
          </div>

          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Marketplace
            </h1>

            <p className="text-gray-600 mt-1">
              Find seeds, fertilizers, pest-control products and
              farming equipment.
            </p>
          </div>

        </div>

        {/* Cart Button */}
        <button
          onClick={() => setShowCart(true)}
          className="relative flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white px-5 py-3 rounded-xl font-semibold transition"
        >
          <ShoppingCart size={20} />

          Cart

          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </button>

      </div>

      {/* Marketplace Stats */}
      <div className="grid grid-cols-4 gap-5 mb-6">

        <div className="bg-white rounded-2xl p-5 shadow-sm">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-gray-500">
                Products
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-2">
                {products.length}
              </h2>
            </div>

            <div className="bg-green-100 p-3 rounded-xl">
              <Package
                className="text-green-700"
                size={26}
              />
            </div>

          </div>

          <p className="text-sm text-green-600 mt-4">
            Farming products
          </p>

        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-gray-500">
                Categories
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-2">
                4
              </h2>
            </div>

            <div className="bg-yellow-100 p-3 rounded-xl">
              <Leaf
                className="text-yellow-700"
                size={26}
              />
            </div>

          </div>

          <p className="text-sm text-yellow-600 mt-4">
            Product categories
          </p>

        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-gray-500">
                Farm Supplies
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-2">
                100+
              </h2>
            </div>

            <div className="bg-blue-100 p-3 rounded-xl">
              <Sprout
                className="text-blue-600"
                size={26}
              />
            </div>

          </div>

          <p className="text-sm text-blue-600 mt-4">
            Available for farmers
          </p>

        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-gray-500">
                Delivery
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-2">
                Fast
              </h2>
            </div>

            <div className="bg-purple-100 p-3 rounded-xl">
              <Truck
                className="text-purple-600"
                size={26}
              />
            </div>

          </div>

          <p className="text-sm text-purple-600 mt-4">
            Reliable delivery
          </p>

        </div>

      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-2xl shadow-sm p-5 mb-6">

        <div className="flex gap-4 items-center">

          {/* Search */}
          <div className="relative flex-1">

            <Search
              size={20}
              className="absolute left-4 top-3.5 text-gray-400"
            />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products..."
              className="w-full border rounded-xl py-3 pl-11 pr-4 outline-none focus:ring-2 focus:ring-green-300"
            />

          </div>

          {/* Category */}
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-300"
          >
            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>

        </div>

      </div>

      {/* Products */}
      <div className="bg-white rounded-2xl shadow-sm p-6">

        <div className="flex items-center justify-between mb-6">

          <div>
            <h2 className="text-xl font-bold text-gray-900">
              Farming Products
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Browse products for your farm.
            </p>
          </div>

          <span className="text-sm text-gray-500">
            {filteredProducts.length} products found
          </span>

        </div>

        {filteredProducts.length === 0 ? (

          <div className="border rounded-2xl p-12 text-center">

            <Package
              className="mx-auto text-gray-300 mb-4"
              size={50}
            />

            <h3 className="text-lg font-bold text-gray-700">
              No products found
            </h3>

            <p className="text-sm text-gray-500 mt-2">
              Try another search or category.
            </p>

          </div>

        ) : (

          <div className="grid grid-cols-4 gap-5">

            {filteredProducts.map((product) => (

              <div
                key={product.id}
                className="border rounded-2xl overflow-hidden hover:shadow-lg transition"
              >

                {/* Product Image Area */}
                <div className="h-40 bg-green-50 flex items-center justify-center">

                  <span className="text-6xl">
                    {product.icon}
                  </span>

                </div>

                {/* Product Details */}
                <div className="p-5">

                  <div className="flex items-start justify-between gap-2">

                    <div>

                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-semibold">
                        {product.category}
                      </span>

                      <h3 className="font-bold text-gray-900 mt-3">
                        {product.name}
                      </h3>

                    </div>

                  </div>

                  <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between mt-4">

                    <div>
                      <p className="text-xl font-bold text-green-700">
                        ₹{product.price}
                      </p>

                      <p className="text-xs text-gray-500">
                        {product.unit}
                      </p>
                    </div>

                    <span className="text-xs text-green-600 font-semibold">
                      {product.stock} in stock
                    </span>

                  </div>

                  {/* Add Button */}
                  <button
                    onClick={() => addToCart(product)}
                    className="w-full mt-4 flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white py-3 rounded-xl font-semibold transition"
                  >
                    <Plus size={18} />
                    Add to Cart
                  </button>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

      {/* Marketplace Information */}
      <div className="grid grid-cols-3 gap-5 mt-6">

        <div className="bg-white rounded-2xl p-5 shadow-sm">

          <div className="bg-green-100 w-fit p-3 rounded-xl mb-3">
            <ShieldCheck
              className="text-green-700"
              size={24}
            />
          </div>

          <h3 className="font-bold text-gray-900">
            Trusted Products
          </h3>

          <p className="text-sm text-gray-500 mt-2">
            Browse farming supplies designed to support
            healthy and productive crops.
          </p>

        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">

          <div className="bg-blue-100 w-fit p-3 rounded-xl mb-3">
            <Truck
              className="text-blue-600"
              size={24}
            />
          </div>

          <h3 className="font-bold text-gray-900">
            Farm Delivery
          </h3>

          <p className="text-sm text-gray-500 mt-2">
            Get essential farming supplies delivered
            conveniently to your location.
          </p>

        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">

          <div className="bg-yellow-100 w-fit p-3 rounded-xl mb-3">
            <Sprout
              className="text-yellow-700"
              size={24}
            />
          </div>

          <h3 className="font-bold text-gray-900">
            Farmer Focused
          </h3>

          <p className="text-sm text-gray-500 mt-2">
            Find useful products for crop production,
            pest management and farm maintenance.
          </p>

        </div>

      </div>

      {/* Cart Modal */}
      {showCart && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">

          <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-hidden">

            {/* Cart Header */}
            <div className="flex items-center justify-between p-6 border-b">

              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Shopping Cart
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  {cartCount} item{cartCount !== 1 ? "s" : ""} in your cart
                </p>
              </div>

              <button
                onClick={() => setShowCart(false)}
                className="p-2 rounded-full hover:bg-gray-100"
              >
                <X size={22} />
              </button>

            </div>

            {/* Cart Content */}
            <div className="p-6 overflow-y-auto max-h-[60vh]">

              {cart.length === 0 ? (

                <div className="text-center py-12">

                  <ShoppingCart
                    className="mx-auto text-gray-300 mb-4"
                    size={55}
                  />

                  <h3 className="text-lg font-bold text-gray-700">
                    Your cart is empty
                  </h3>

                  <p className="text-sm text-gray-500 mt-2">
                    Add some farming products to your cart.
                  </p>

                </div>

              ) : (

                <div className="space-y-4">

                  {cart.map((item) => (

                    <div
                      key={item.id}
                      className="border rounded-xl p-4"
                    >

                      <div className="flex items-center gap-4">

                        {/* Icon */}
                        <div className="w-16 h-16 bg-green-50 rounded-xl flex items-center justify-center">

                          <span className="text-3xl">
                            {item.icon}
                          </span>

                        </div>

                        {/* Product */}
                        <div className="flex-1">

                          <h3 className="font-bold text-gray-900">
                            {item.name}
                          </h3>

                          <p className="text-sm text-gray-500">
                            ₹{item.price} / {item.unit}
                          </p>

                        </div>

                        {/* Quantity */}
                        <div className="flex items-center border rounded-lg">

                          <button
                            onClick={() =>
                              decreaseQuantity(item.id)
                            }
                            className="p-2 hover:bg-gray-100"
                          >
                            <Minus size={16} />
                          </button>

                          <span className="px-3 font-semibold">
                            {item.quantity}
                          </span>

                          <button
                            onClick={() =>
                              increaseQuantity(item.id)
                            }
                            className="p-2 hover:bg-gray-100"
                          >
                            <Plus size={16} />
                          </button>

                        </div>

                        {/* Price */}
                        <div className="text-right">

                          <p className="font-bold text-green-700">
                            ₹{item.price * item.quantity}
                          </p>

                        </div>

                        {/* Delete */}
                        <button
                          onClick={() =>
                            removeFromCart(item.id)
                          }
                          className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
                        >
                          <Trash2 size={18} />
                        </button>

                      </div>

                    </div>

                  ))}

                </div>

              )}

            </div>

            {/* Cart Footer */}
            {cart.length > 0 && (
              <div className="border-t p-6">

                <div className="flex items-center justify-between mb-4">

                  <span className="text-lg font-semibold text-gray-700">
                    Total
                  </span>

                  <span className="text-2xl font-bold text-green-700">
                    ₹{cartTotal}
                  </span>

                </div>

                <button
                  onClick={() =>
                    alert(
                      "Demo checkout: Backend and payment integration will be added later."
                    )
                  }
                  className="w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-xl font-semibold transition"
                >
                  Proceed to Checkout
                </button>

              </div>
            )}

          </div>

        </div>
      )}

    </div>
  );
}

export default Marketplace;