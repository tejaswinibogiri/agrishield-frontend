import { useMemo, useState } from "react";
import {
  BookOpen,
  Search,
  Sprout,
  Bug,
  Droplets,
  Wheat,
  PlayCircle,
  Clock,
  Star,
  X,
  Leaf,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

function LearningHub() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [selectedArticle, setSelectedArticle] = useState(null);

  const categories = [
    "All",
    "Crop Management",
    "Pest Control",
    "Irrigation",
    "Soil Health",
  ];

  const articles = [
    {
      id: 1,
      title: "Complete Guide to Tomato Farming",
      category: "Crop Management",
      level: "Beginner",
      duration: "8 min read",
      icon: "🍅",
      description:
        "Learn the essential steps for growing healthy tomatoes, from planting to harvesting.",
      content:
        "Tomato farming requires proper soil preparation, healthy seedlings, regular irrigation and careful pest monitoring. Start with well-drained soil and provide sufficient sunlight. Maintain consistent watering and monitor leaves regularly for early signs of pests or disease.",
      featured: true,
    },
    {
      id: 2,
      title: "How to Identify Common Crop Pests",
      category: "Pest Control",
      level: "Beginner",
      duration: "6 min read",
      icon: "🐛",
      description:
        "Understand common agricultural pests and learn how to recognize early infestation symptoms.",
      content:
        "Common crop pests include aphids, caterpillars, whiteflies and leaf miners. Look for damaged leaves, sticky residue, holes or unusual discoloration. Early identification allows farmers to take preventive action before the infestation becomes severe.",
      featured: true,
    },
    {
      id: 3,
      title: "Smart Irrigation for Better Crops",
      category: "Irrigation",
      level: "Intermediate",
      duration: "7 min read",
      icon: "💧",
      description:
        "Discover efficient irrigation practices that can help reduce water waste and improve crop growth.",
      content:
        "Efficient irrigation means providing crops with the right amount of water at the right time. Drip irrigation can deliver water close to plant roots and reduce unnecessary water loss. Soil moisture should be monitored before irrigation.",
      featured: false,
    },
    {
      id: 4,
      title: "Improving Soil Health Naturally",
      category: "Soil Health",
      level: "Beginner",
      duration: "5 min read",
      icon: "🌱",
      description:
        "Learn simple methods for maintaining healthy and productive agricultural soil.",
      content:
        "Healthy soil supports strong crop growth. Farmers can improve soil health by using organic matter, compost and suitable crop rotation practices. Avoid excessive chemical inputs and maintain good soil structure.",
      featured: false,
    },
    {
      id: 5,
      title: "Aphid Prevention and Management",
      category: "Pest Control",
      level: "Intermediate",
      duration: "9 min read",
      icon: "🐞",
      description:
        "Learn how to monitor, prevent and manage aphid populations in your crops.",
      content:
        "Aphids commonly feed on young plant growth and the underside of leaves. Regular inspection can help identify an infestation early. Remove heavily affected plant material where appropriate and use suitable integrated pest-management practices.",
      featured: false,
    },
    {
      id: 6,
      title: "Understanding Crop Nutrition",
      category: "Crop Management",
      level: "Intermediate",
      duration: "10 min read",
      icon: "🌾",
      description:
        "Understand the importance of essential nutrients for healthy crop development.",
      content:
        "Plants require nutrients such as nitrogen, phosphorus and potassium along with several micronutrients. Nutrient requirements vary by crop and growth stage. Soil testing can help farmers make more informed fertilizer decisions.",
      featured: false,
    },
    {
      id: 7,
      title: "Water Management During Rainy Season",
      category: "Irrigation",
      level: "Beginner",
      duration: "6 min read",
      icon: "🌧️",
      description:
        "Learn how to manage excess rainfall and protect crops from water-related problems.",
      content:
        "During heavy rainfall, proper drainage is important to prevent prolonged waterlogging. Inspect drainage channels regularly and avoid unnecessary irrigation when rainfall has already provided sufficient moisture.",
      featured: false,
    },
    {
      id: 8,
      title: "Crop Rotation Basics",
      category: "Soil Health",
      level: "Intermediate",
      duration: "8 min read",
      icon: "🔄",
      description:
        "Learn how rotating crops can support soil health and reduce some farming risks.",
      content:
        "Crop rotation involves growing different crops in sequence on the same land. Proper rotation can support soil management and may help interrupt the life cycles of certain pests and diseases.",
      featured: false,
    },
  ];

  // Filter articles
  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const searchText = search.toLowerCase();

      const matchesSearch =
        article.title.toLowerCase().includes(searchText) ||
        article.description.toLowerCase().includes(searchText) ||
        article.category.toLowerCase().includes(searchText);

      const matchesCategory =
        category === "All" ||
        article.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  const featuredArticles = articles.filter(
    (article) => article.featured
  );

  return (
    <div className="min-h-screen bg-green-50 p-8">

      {/* Header */}
      <div className="flex items-center gap-3 mb-8">

        <div className="bg-green-700 text-white p-3 rounded-xl">
          <BookOpen size={28} />
        </div>

        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Learning Hub
          </h1>

          <p className="text-gray-600 mt-1">
            Learn practical farming techniques and improve your crop
            management skills.
          </p>
        </div>

      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-5 mb-6">

        {/* Resources */}
        <div className="bg-white rounded-2xl p-5 shadow-sm">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-gray-500">
                Learning Resources
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-2">
                {articles.length}
              </h2>
            </div>

            <div className="bg-green-100 p-3 rounded-xl">
              <BookOpen
                className="text-green-700"
                size={26}
              />
            </div>

          </div>

          <p className="text-sm text-green-600 mt-4">
            Guides and articles
          </p>

        </div>

        {/* Categories */}
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
            Farming topics
          </p>

        </div>

        {/* Pest Management */}
        <div className="bg-white rounded-2xl p-5 shadow-sm">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-gray-500">
                Pest Guides
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-2">
                2
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
            Pest management resources
          </p>

        </div>

        {/* Featured */}
        <div className="bg-white rounded-2xl p-5 shadow-sm">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-gray-500">
                Featured
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-2">
                2
              </h2>
            </div>

            <div className="bg-blue-100 p-3 rounded-xl">
              <Star
                className="text-blue-600"
                size={26}
              />
            </div>

          </div>

          <p className="text-sm text-blue-600 mt-4">
            Recommended resources
          </p>

        </div>

      </div>

      {/* Search */}
      <div className="bg-white rounded-2xl shadow-sm p-5 mb-6">

        <div className="relative">

          <Search
            size={20}
            className="absolute left-4 top-3.5 text-gray-400"
          />

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search farming topics, guides and articles..."
            className="w-full border rounded-xl py-3 pl-11 pr-4 outline-none focus:ring-2 focus:ring-green-300"
          />

        </div>

      </div>

      {/* Category Filters */}
      <div className="flex gap-3 mb-6 flex-wrap">

        {categories.map((item) => (

          <button
            key={item}
            onClick={() => setCategory(item)}
            className={`px-5 py-2.5 rounded-xl font-semibold transition ${
              category === item
                ? "bg-green-700 text-white"
                : "bg-white text-gray-700 hover:bg-green-100"
            }`}
          >
            {item}
          </button>

        ))}

      </div>

      {/* Featured Section */}
      {category === "All" && search === "" && (
        <div className="mb-6">

          <div className="flex items-center justify-between mb-5">

            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Featured Learning
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                Recommended resources to get started.
              </p>
            </div>

            <Star
              className="text-yellow-500"
              size={26}
            />

          </div>

          <div className="grid grid-cols-2 gap-5">

            {featuredArticles.map((article) => (

              <div
                key={article.id}
                className="bg-white rounded-2xl shadow-sm overflow-hidden"
              >

                <div className="h-40 bg-green-100 flex items-center justify-center">

                  <span className="text-7xl">
                    {article.icon}
                  </span>

                </div>

                <div className="p-6">

                  <div className="flex items-center gap-2">

                    <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold">
                      Featured
                    </span>

                    <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                      {article.level}
                    </span>

                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mt-4">
                    {article.title}
                  </h3>

                  <p className="text-sm text-gray-500 mt-2">
                    {article.description}
                  </p>

                  <div className="flex items-center justify-between mt-5">

                    <div className="flex items-center gap-2 text-sm text-gray-500">

                      <Clock size={16} />

                      {article.duration}

                    </div>

                    <button
                      onClick={() =>
                        setSelectedArticle(article)
                      }
                      className="flex items-center gap-2 text-green-700 font-semibold hover:text-green-800"
                    >
                      Read Article
                      <ArrowRight size={17} />
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>
      )}

      {/* All Learning Resources */}
      <div className="bg-white rounded-2xl shadow-sm p-6">

        <div className="flex items-center justify-between mb-6">

          <div>
            <h2 className="text-xl font-bold text-gray-900">
              Learning Resources
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Explore farming knowledge and practical guides.
            </p>
          </div>

          <span className="text-sm text-gray-500">
            {filteredArticles.length} resources
          </span>

        </div>

        {filteredArticles.length === 0 ? (

          <div className="border rounded-2xl p-12 text-center">

            <BookOpen
              className="mx-auto text-gray-300 mb-4"
              size={50}
            />

            <h3 className="text-lg font-bold text-gray-700">
              No resources found
            </h3>

            <p className="text-sm text-gray-500 mt-2">
              Try a different search term or category.
            </p>

          </div>

        ) : (

          <div className="grid grid-cols-3 gap-5">

            {filteredArticles.map((article) => (

              <div
                key={article.id}
                className="border rounded-2xl overflow-hidden hover:shadow-md transition"
              >

                {/* Image / Icon */}
                <div className="h-36 bg-green-50 flex items-center justify-center">

                  <span className="text-6xl">
                    {article.icon}
                  </span>

                </div>

                <div className="p-5">

                  {/* Category */}
                  <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold">
                    {article.category}
                  </span>

                  {/* Title */}
                  <h3 className="font-bold text-gray-900 mt-3">
                    {article.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-500 mt-2 line-clamp-3">
                    {article.description}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between mt-4">

                    <div className="flex items-center gap-2 text-xs text-gray-500">

                      <Clock size={14} />

                      {article.duration}

                    </div>

                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                      {article.level}
                    </span>

                  </div>

                  {/* Button */}
                  <button
                    onClick={() =>
                      setSelectedArticle(article)
                    }
                    className="w-full mt-4 flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white py-2.5 rounded-xl font-semibold transition"
                  >
                    <BookOpen size={17} />
                    Read Article
                  </button>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

      {/* Learning Tips */}
      <div className="grid grid-cols-3 gap-5 mt-6">

        {/* Crop */}
        <div className="bg-white rounded-2xl shadow-sm p-5">

          <div className="bg-green-100 w-fit p-3 rounded-xl mb-3">
            <Sprout
              className="text-green-700"
              size={24}
            />
          </div>

          <h3 className="font-bold text-gray-900">
            Learn Crop Management
          </h3>

          <p className="text-sm text-gray-500 mt-2">
            Improve planting, crop care and harvesting practices.
          </p>

        </div>

        {/* Pest */}
        <div className="bg-white rounded-2xl shadow-sm p-5">

          <div className="bg-red-100 w-fit p-3 rounded-xl mb-3">
            <Bug
              className="text-red-600"
              size={24}
            />
          </div>

          <h3 className="font-bold text-gray-900">
            Understand Pest Risks
          </h3>

          <p className="text-sm text-gray-500 mt-2">
            Learn how to identify and manage common crop pests.
          </p>

        </div>

        {/* Irrigation */}
        <div className="bg-white rounded-2xl shadow-sm p-5">

          <div className="bg-blue-100 w-fit p-3 rounded-xl mb-3">
            <Droplets
              className="text-blue-600"
              size={24}
            />
          </div>

          <h3 className="font-bold text-gray-900">
            Save Water
          </h3>

          <p className="text-sm text-gray-500 mt-2">
            Discover better irrigation and water-management practices.
          </p>

        </div>

      </div>

      {/* Article Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">

          <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-hidden">

            {/* Modal Header */}
            <div className="flex items-start justify-between p-6 border-b">

              <div className="flex items-center gap-4">

                <div className="bg-green-100 p-3 rounded-xl">

                  <span className="text-3xl">
                    {selectedArticle.icon}
                  </span>

                </div>

                <div>

                  <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold">
                    {selectedArticle.category}
                  </span>

                  <h2 className="text-xl font-bold text-gray-900 mt-2">
                    {selectedArticle.title}
                  </h2>

                </div>

              </div>

              <button
                onClick={() => setSelectedArticle(null)}
                className="p-2 rounded-full hover:bg-gray-100"
              >
                <X size={22} />
              </button>

            </div>

            {/* Article Content */}
            <div className="p-6 overflow-y-auto max-h-[60vh]">

              <div className="flex items-center gap-4 mb-6">

                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Clock size={17} />
                  {selectedArticle.duration}
                </div>

                <span className="text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                  {selectedArticle.level}
                </span>

              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-3">
                About this guide
              </h3>

              <p className="text-gray-600 leading-7">
                {selectedArticle.content}
              </p>

              <div className="mt-6 bg-green-50 border border-green-200 rounded-xl p-5">

                <div className="flex gap-3">

                  <ShieldCheck
                    className="text-green-700 shrink-0"
                    size={24}
                  />

                  <div>

                    <h3 className="font-bold text-gray-900">
                      AgriShield Learning Tip
                    </h3>

                    <p className="text-sm text-gray-600 mt-1">
                      Combine what you learn here with regular field
                      observation and your AgriShield pest detection and
                      prediction tools.
                    </p>

                  </div>

                </div>

              </div>

            </div>

            {/* Modal Footer */}
            <div className="border-t p-5 flex justify-end">

              <button
                onClick={() => setSelectedArticle(null)}
                className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-xl font-semibold"
              >
                Close Article
              </button>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}

export default LearningHub;
