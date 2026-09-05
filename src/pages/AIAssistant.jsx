import { useState } from "react";
import {
  Bot,
  Send,
  User,
  Sparkles,
  Mic,
  Trash2,
  Leaf,
  Bug,
  CloudRain,
  Sprout,
  ShoppingCart,
} from "lucide-react";

function AIAssistant() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "ai",
      text: "Hello! I am your AgriShield AI Assistant. Ask me about crops, pests, irrigation, weather, soil health, or farming practices.",
    },
  ]);

  const quickQuestions = [
    {
      text: "How do I control aphids?",
      icon: Bug,
    },
    {
      text: "How often should I water tomatoes?",
      icon: CloudRain,
    },
    {
      text: "How can I improve soil health?",
      icon: Sprout,
    },
    {
      text: "Which crops are suitable this season?",
      icon: Leaf,
    },
  ];

  const generateAIResponse = (userMessage) => {
    const text = userMessage.toLowerCase();

    if (text.includes("aphid")) {
      return "Aphids usually gather on young leaves and stems. Check the underside of leaves regularly, remove heavily affected parts when practical, and use suitable integrated pest-management methods such as biological or recommended organic controls.";
    }

    if (
      text.includes("water") &&
      text.includes("tomato")
    ) {
      return "Tomato plants generally perform best with consistent soil moisture. Avoid frequent shallow watering. Water near the root zone and adjust frequency depending on rainfall, temperature, soil type, and plant growth stage.";
    }

    if (
      text.includes("soil") ||
      text.includes("fertility")
    ) {
      return "You can improve soil health by adding compost or organic matter, rotating crops, avoiding unnecessary overuse of fertilizers, maintaining proper drainage, and testing soil when possible before making major nutrient decisions.";
    }

    if (
      text.includes("season") ||
      text.includes("crop")
    ) {
      return "Crop selection depends on your location, season, rainfall, temperature, soil type, and water availability. You can use AgriShield's Farm Manager together with local weather and crop information to make a better decision.";
    }

    if (
      text.includes("pest") ||
      text.includes("insect")
    ) {
      return "For pest problems, first identify the pest correctly, check how serious the infestation is, and monitor how quickly it is spreading. AgriShield's Pest Detection module can help you analyze crop images before deciding the next action.";
    }

    if (
      text.includes("rain") ||
      text.includes("weather")
    ) {
      return "Weather strongly affects farming decisions. Rainfall, humidity, and temperature can influence irrigation needs and pest risk. AgriShield's Pest Prediction module is designed to use these conditions for outbreak-risk estimation.";
    }

    if (
      text.includes("fertilizer") ||
      text.includes("nutrient")
    ) {
      return "Fertilizer requirements depend on the crop, soil condition, and growth stage. Soil testing is the best starting point when available. Avoid applying more fertilizer than necessary, because excess nutrients can reduce efficiency and harm crop health.";
    }

    return "That's a useful farming question. In the final AgriShield system, this assistant can be connected to an AI API and your farm database to provide more detailed, personalized answers. For now, this is a frontend demo response.";
  };

  const sendMessage = (customMessage = null) => {
    const finalMessage = customMessage || message;

    if (!finalMessage.trim()) {
      return;
    }

    const newUserMessage = {
      id: Date.now(),
      sender: "user",
      text: finalMessage,
    };

    setMessages((previousMessages) => [
      ...previousMessages,
      newUserMessage,
    ]);

    setMessage("");

    setTimeout(() => {
      const aiResponse = {
        id: Date.now() + 1,
        sender: "ai",
        text: generateAIResponse(finalMessage),
      };

      setMessages((previousMessages) => [
        ...previousMessages,
        aiResponse,
      ]);
    }, 500);
  };

  const clearChat = () => {
    setMessages([
      {
        id: 1,
        sender: "ai",
        text: "Chat cleared. What farming question can I help you with?",
      },
    ]);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  };

  const handleVoiceButton = () => {
    alert(
      "Voice input will be connected later using the browser Speech Recognition API."
    );
  };

  return (
    <div className="min-h-screen bg-green-50 p-8">

      {/* Header */}
      <div className="flex items-center justify-between mb-8">

        <div className="flex items-center gap-3">

          <div className="bg-green-700 text-white p-3 rounded-xl">
            <Bot size={28} />
          </div>

          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              AI Assistant
            </h1>

            <p className="text-gray-600 mt-1">
              Ask AgriShield AI your farming questions.
            </p>
          </div>

        </div>

        <button
          onClick={clearChat}
          className="flex items-center gap-2 bg-white border px-4 py-2.5 rounded-xl text-red-600 hover:bg-red-50 transition"
        >
          <Trash2 size={18} />
          Clear Chat
        </button>

      </div>

      <div className="grid grid-cols-4 gap-6">

        {/* Left Sidebar */}
        <div className="col-span-1 space-y-6">

          {/* Assistant Card */}
          <div className="bg-white rounded-2xl shadow-sm p-6">

            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-4">
              <Bot
                size={34}
                className="text-green-700"
              />
            </div>

            <h2 className="text-xl font-bold text-gray-900">
              AgriShield AI
            </h2>

            <p className="text-sm text-gray-500 mt-2">
              Your smart farming assistant for crop management,
              pest information, irrigation, and farm guidance.
            </p>

            <div className="flex items-center gap-2 mt-4">

              <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>

              <span className="text-sm font-semibold text-green-700">
                Online
              </span>

            </div>

          </div>

          {/* Quick Questions */}
          <div className="bg-white rounded-2xl shadow-sm p-5">

            <div className="flex items-center gap-2 mb-4">

              <Sparkles
                className="text-yellow-500"
                size={20}
              />

              <h3 className="font-bold text-gray-900">
                Quick Questions
              </h3>

            </div>

            <div className="space-y-3">

              {quickQuestions.map((question) => {
                const Icon = question.icon;

                return (
                  <button
                    key={question.text}
                    onClick={() =>
                      sendMessage(question.text)
                    }
                    className="w-full text-left border rounded-xl p-3 hover:bg-green-50 hover:border-green-300 transition"
                  >
                    <div className="flex items-start gap-3">

                      <Icon
                        size={18}
                        className="text-green-700 mt-0.5 shrink-0"
                      />

                      <span className="text-sm text-gray-700">
                        {question.text}
                      </span>

                    </div>
                  </button>
                );
              })}

            </div>

          </div>

          {/* Topics */}
          <div className="bg-white rounded-2xl shadow-sm p-5">

            <h3 className="font-bold text-gray-900 mb-4">
              I Can Help With
            </h3>

            <div className="space-y-3 text-sm">

              <div className="flex items-center gap-3 text-gray-600">
                <Bug
                  size={18}
                  className="text-red-500"
                />
                Pest management
              </div>

              <div className="flex items-center gap-3 text-gray-600">
                <Sprout
                  size={18}
                  className="text-green-600"
                />
                Crop management
              </div>

              <div className="flex items-center gap-3 text-gray-600">
                <CloudRain
                  size={18}
                  className="text-blue-500"
                />
                Irrigation advice
              </div>

              <div className="flex items-center gap-3 text-gray-600">
                <Leaf
                  size={18}
                  className="text-green-700"
                />
                Soil health
              </div>

              <div className="flex items-center gap-3 text-gray-600">
                <ShoppingCart
                  size={18}
                  className="text-orange-500"
                />
                Farming products
              </div>

            </div>

          </div>

        </div>

        {/* Chat Area */}
        <div className="col-span-3 bg-white rounded-2xl shadow-sm flex flex-col overflow-hidden">

          {/* Chat Header */}
          <div className="border-b p-5 flex items-center justify-between">

            <div className="flex items-center gap-3">

              <div className="bg-green-100 p-2 rounded-xl">
                <Bot
                  size={24}
                  className="text-green-700"
                />
              </div>

              <div>
                <h2 className="font-bold text-gray-900">
                  AgriShield Assistant
                </h2>

                <p className="text-xs text-gray-500">
                  Smart farming support
                </p>
              </div>

            </div>

            <div className="flex items-center gap-2 text-sm text-green-700 font-semibold">

              <div className="w-2 h-2 bg-green-500 rounded-full"></div>

              Active

            </div>

          </div>

          {/* Messages */}
          <div className="flex-1 p-6 space-y-5 overflow-y-auto min-h-[520px] max-h-[520px] bg-gray-50">

            {messages.map((chat) => (

              <div
                key={chat.id}
                className={`flex ${
                  chat.sender === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >

                <div
                  className={`flex gap-3 max-w-[75%] ${
                    chat.sender === "user"
                      ? "flex-row-reverse"
                      : ""
                  }`}
                >

                  {/* Avatar */}
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                      chat.sender === "user"
                        ? "bg-green-700 text-white"
                        : "bg-green-100 text-green-700"
                    }`}
                  >

                    {chat.sender === "user" ? (
                      <User size={20} />
                    ) : (
                      <Bot size={20} />
                    )}

                  </div>

                  {/* Bubble */}
                  <div
                    className={`rounded-2xl px-4 py-3 ${
                      chat.sender === "user"
                        ? "bg-green-700 text-white rounded-tr-sm"
                        : "bg-white border text-gray-700 rounded-tl-sm"
                    }`}
                  >

                    <p className="text-sm leading-6">
                      {chat.text}
                    </p>

                  </div>

                </div>

              </div>

            ))}

          </div>

          {/* Input Area */}
          <div className="border-t p-5">

            <div className="flex items-end gap-3">

              <div className="flex-1 border rounded-2xl bg-white focus-within:ring-2 focus-within:ring-green-300">

                <textarea
                  rows="2"
                  value={message}
                  onChange={(e) =>
                    setMessage(e.target.value)
                  }
                  onKeyDown={handleKeyDown}
                  placeholder="Ask something about your farm..."
                  className="w-full resize-none outline-none px-4 pt-3 pb-2 rounded-2xl"
                />

              </div>

              <button
                onClick={handleVoiceButton}
                className="w-12 h-12 border rounded-xl flex items-center justify-center hover:bg-gray-50 transition"
                title="Voice input"
              >
                <Mic
                  size={21}
                  className="text-gray-600"
                />
              </button>

              <button
                onClick={() => sendMessage()}
                className="w-12 h-12 bg-green-700 hover:bg-green-800 text-white rounded-xl flex items-center justify-center transition"
              >
                <Send size={21} />
              </button>

            </div>

            <p className="text-xs text-gray-400 mt-3">
              AgriShield AI responses are currently simulated for the
              frontend demo. Real AI integration will be added later.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default AIAssistant;