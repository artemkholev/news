import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams, useNavigate } from "react-router-dom";
import { PostsList } from "@/features/posts-lists";
import { Select } from "@/shared/ui";
import { usePosts } from "@/entities/posts";
import { FiRefreshCw, FiArrowLeft } from "react-icons/fi";

const PostsPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const {
    isLoading,
    isError,
    posts,
    sortedPosts,
    selected,
    setSelected,
    page,
    setPage,
    totalPages,
    selectOptions,
    getPosts,
    removePost,
  } = usePosts();

  // Обработчик страниц с базовой валидацией
  const changePage = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
      window.scrollTo(0, 0);
    }
  };

  // Инициализация из URL при первом рендере
  useEffect(() => {
    const urlPage = Number(searchParams.get("page")) || 1;
    const urlSort = searchParams.get("sort") || selectOptions[0]?.value;

    if (urlPage !== page) setPage(urlPage);
    if (urlSort && urlSort !== selected) setSelected(urlSort);
  }, []); // Только при монтировании

  // Синхронизация URL с состоянием при изменении page/selected
  useEffect(() => {
    const params = new URLSearchParams();
    params.set("page", page.toString());
    params.set("sort", selected);
    navigate(`?${params.toString()}`, { replace: true });

    // Загружаем новые данные при изменении
    getPosts();
  }, [page]); // Только эти зависимости

  return (
    <>
      {/* Кнопка назад для мобильных устройств */}
      <button
        onClick={() => navigate(-1)}
        className="md:hidden flex items-center mb-6 text-gray-600 hover:text-gray-900"
      >
        <FiArrowLeft className="mr-2" />
        Назад
      </button>

      {/* Анимированный индикатор загрузки */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 flex items-center justify-center z-[1000]"
            style={{
              background: "rgba(255, 255, 255, 0.8)",
              backdropFilter: "blur(5px)",
            }}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 20,
              }}
              className="flex flex-col items-center"
            >
              <motion.div
                animate={{
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <FiRefreshCw
                  className="text-5xl mb-4"
                  style={{
                    background:
                      "linear-gradient(90deg, #ff8a00, #e52e71, #5f2c82)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                />
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl font-medium"
                style={{
                  background: "linear-gradient(90deg, #ff8a00, #e52e71)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                Загрузка постов...
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <h1
        className="text-4xl font-bold mb-8 text-center"
        style={{
          background: "linear-gradient(90deg, #ff8a00, #e52e71, #5f2c82)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        Исследуйте Посты
      </h1>

      <div className="sortOption mb-8 ml-auto">
        <Select
          value={selected}
          onChange={setSelected}
          options={selectOptions}
        />
      </div>

      {isError && (
        <div className="p-4 rounded-lg bg-red-50 text-red-600 mb-8">
          Ошибка загрузки. Пожалуйста, попробуйте перезагрузить страницу. (Если
          списки постов не подгрузились пробема на стороне сервака, откуда беру
          данные, презагрузка страницы должна решить проблему) -
          https://jsonplaceholder.typicode.com/
        </div>
      )}

      {!isLoading && (
        <>
          <PostsList
            posts={selected === "general" ? posts : sortedPosts}
            removePost={removePost}
          />

          {totalPages > 1 && (
            <div className="flex justify-center mt-12">
              <button
                onClick={() => changePage(Math.max(1, page - 1))}
                disabled={page === 1}
                className="px-4 py-2 mx-1 rounded-lg disabled:opacity-50"
              >
                Назад
              </button>

              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                let pageNum;
                if (totalPages <= 5) {
                  pageNum = i + 1;
                } else if (page <= 3) {
                  pageNum = i + 1;
                } else if (page >= totalPages - 2) {
                  pageNum = totalPages - 4 + i;
                } else {
                  pageNum = page - 2 + i;
                }
                return pageNum;
              }).map((pagePath) => (
                <button
                  key={pagePath}
                  onClick={() => changePage(pagePath)}
                  className={`px-2 py-1 mx-1 rounded-lg ${
                    page === pagePath
                      ? "bg-gradient-to-r from-orange-500 to-pink-600 text-white"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  {pagePath}
                </button>
              ))}

              <button
                onClick={() => changePage(Math.min(totalPages, page + 1))}
                disabled={page === totalPages}
                className="px-4 py-2 mx-1 rounded-lg disabled:opacity-50"
              >
                Вперед
              </button>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default PostsPage;
