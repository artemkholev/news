import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiGlobe,
  FiChevronDown,
  FiArrowLeft,
} from "react-icons/fi";
import { usePosts } from "@/entities/posts";
import { Button } from "@/shared/ui";

const PostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { post, author, isLoading, isError, getPost, getInfoAboutAuthor } =
    usePosts();

  const [showAuthor, setShowAuthor] = useState(false);

  useEffect(() => {
    if (id) {
      getPost(id);
    }
  }, [id, getPost]);

  const handleShowAuthor = () => {
    if (post?.userId) {
      getInfoAboutAuthor(post.userId);
      setShowAuthor(true);
    }
  };

  if (isLoading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col items-center justify-center min-h-screen"
      >
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-3xl font-bold mb-4"
          style={{
            background: "linear-gradient(90deg, #ff8a00, #e52e71, #5f2c82)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Загружаем пост...
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-500"
        >
          Это займет всего мгновение
        </motion.p>
      </motion.div>
    );
  }

  if (isError) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col items-center justify-center min-h-screen p-4 text-center"
      >
        <div className="text-5xl mb-4">😕</div>
        <h2 className="text-2xl font-bold text-red-500 mb-2">
          Ошибка загрузки
        </h2>
        <p className="text-gray-600 mb-6">
          Не удалось загрузить пост. Пожалуйста, попробуйте позже.
        </p>
        <Button onClick={() => id && getPost(id)} variant="gradient" size="lg">
          Попробовать снова
        </Button>
      </motion.div>
    );
  }

  if (!post) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col items-center justify-center min-h-screen p-4 text-center"
      >
        <div className="text-5xl mb-4">🔍</div>
        <h2 className="text-2xl font-bold text-gray-700 mb-2">
          Пост не найден
        </h2>
        <p className="text-gray-500 mb-6">
          Похоже, такого поста не существует или он был удален.
        </p>
        <Button to="/posts" variant="outline" size="lg">
          Вернуться к списку постов
        </Button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8"
    >
      <motion.div whileHover={{ x: -3 }}>
        <Link to="/posts">
          <Button variant="ghost" className="mb-8 flex items-center">
            <FiArrowLeft className="mr-2" />
            Назад к постам
          </Button>
        </Link>
      </motion.div>

      {/* Заголовок поста */}
      <motion.div
        className="mb-12"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <motion.span
          className="text-sm font-medium px-3 py-1 rounded-full mb-4 inline-block"
          style={{
            background:
              "linear-gradient(90deg, rgba(255,138,0,0.1), rgba(229,46,113,0.1))",
            color: "#e52e71",
          }}
        >
          Пост #{post.id}
        </motion.span>

        <motion.h1
          className="text-3xl sm:text-4xl font-bold mb-6"
          style={{
            background: "linear-gradient(90deg, #ff8a00, #e52e71, #5f2c82)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          {post.title}
        </motion.h1>

        <motion.div
          className="prose max-w-none text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-lg leading-relaxed">{post.body}</p>
        </motion.div>
      </motion.div>

      {/* Информация об авторе */}
      <motion.div
        className="mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {!author ? (
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              onClick={handleShowAuthor}
              variant="gradient"
              size="lg"
              className="flex items-center"
            >
              <FiUser className="mr-2" />
              Показать информацию об авторе
            </Button>
          </motion.div>
        ) : (
          <motion.div
            className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <motion.button
              onClick={() => setShowAuthor(!showAuthor)}
              className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-amber-400 to-pink-500 flex items-center justify-center text-white mr-3">
                  <FiUser />
                </div>
                <div>
                  <h3 className="font-bold text-left">{author.username}</h3>
                  <p className="text-sm text-gray-500 text-left">
                    {author.name}
                  </p>
                </div>
              </div>
              <motion.div
                animate={{ rotate: showAuthor ? 180 : 0 }}
                className="text-gray-400"
              >
                <FiChevronDown />
              </motion.div>
            </motion.button>

            <AnimatePresence>
              {showAuthor && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                    <div className="flex items-start">
                      <FiMail className="mt-1 mr-3 text-pink-500 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-gray-500">Email</p>
                        <a
                          href={`mailto:${author.email}`}
                          className="text-gray-700 hover:text-pink-500 transition-colors"
                        >
                          {author.email}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <FiPhone className="mt-1 mr-3 text-amber-500 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-gray-500">Телефон</p>
                        <a
                          href={`tel:${author.phone}`}
                          className="text-gray-700 hover:text-amber-500 transition-colors"
                        >
                          {author.phone}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <FiGlobe className="mt-1 mr-3 text-purple-500 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-gray-500">Вебсайт</p>
                        <a
                          href={`https://${author.website}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-700 hover:text-purple-500 transition-colors"
                        >
                          {author.website}
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default PostPage;
