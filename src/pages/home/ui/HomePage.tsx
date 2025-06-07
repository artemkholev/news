import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPenTool, FiTrendingUp, FiUsers, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const features = [
    {
      icon: <FiPenTool className="text-4xl" />,
      title: "Создавайте посты",
      description: "Делитесь своими мыслями в уникальном стиле",
      color: "from-amber-400 to-pink-600",
    },
    {
      icon: <FiTrendingUp className="text-4xl" />,
      title: "Отслеживайте тренды",
      description: "Будьте в курсе самых обсуждаемых тем",
      color: "from-orange-500 to-rose-600",
    },
    {
      icon: <FiUsers className="text-4xl" />,
      title: "Общайтесь с авторами",
      description: "Комментируйте и вдохновляйтесь",
      color: "from-fuchsia-500 to-purple-600",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero секция */}
      <div className="container mx-auto px-4 py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-6"
          style={{
            background: "linear-gradient(90deg, #ff8a00, #e52e71, #5f2c82)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            animation: "liquid 8s ease infinite",
            backgroundSize: "300% 300%",
          }}
        >
          Ваши мысли имеют значение
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl text-gray-700 max-w-2xl mx-auto mb-12"
        >
          Платформа для выражения идей через мощные посты
        </motion.p>

        {/* Анимированные фичи */}
        <div className="max-w-4xl mx-auto mb-20 h-64">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFeature}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className={`bg-gradient-to-br ${features[activeFeature].color} rounded-2xl shadow-lg p-8 flex flex-col items-center justify-center text-white`}
            >
              <div className="mb-4">{features[activeFeature].icon}</div>
              <h2 className="text-2xl font-bold mb-2">
                {features[activeFeature].title}
              </h2>
              <p className="text-lg opacity-90">
                {features[activeFeature].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* CTA кнопка */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          className="inline-block"
        >
          <Link
            to="/posts"
            className="inline-flex relative overflow-hidden px-8 py-4 rounded-full text-lg shadow-lg"
            style={{
              background: "linear-gradient(90deg, #ff8a00, #e52e71)",
              color: "white",
              fontWeight: "bold",
            }}
          >
            <span className="relative z-10 flex items-center">
              Начать читать посты
              <motion.span
                animate={{ x: isHovered ? 5 : 0 }}
                transition={{ type: "spring", stiffness: 500 }}
                className="ml-2"
              >
                <FiArrowRight />
              </motion.span>
            </span>
            <motion.span
              initial={{ x: "-100%" }}
              animate={{ x: isHovered ? "0%" : "-100%" }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-gradient-to-r from-pink-600 to-orange-500 z-0"
            />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;
