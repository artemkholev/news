"use client";
import React, { useEffect, useState } from "react";
import { BasicButton } from "@/shared/ui";
import Dialog from "@mui/material/Dialog";
import { IPost, NewsCard } from "@/entities/news";
import { useAuth } from "@/features/auth";
import { useNews } from "@/entities/news/model/hooks";
import { Skeleton } from "@mui/material";
import { toast } from "react-toastify";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { AddNewsForm, EditNewsForm } from "@/widgets/news";
import { motion } from "framer-motion";

enum newsActions {
  CREATE = "create",
  EDIT = "edit",
}

export const NEWS_DIALOG_COMPONENTS = {
  [newsActions.CREATE]: AddNewsForm,
  [newsActions.EDIT]: EditNewsForm,
} as const;

const buttonGroupVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const HomePage: React.FC = () => {
  const { accessToken } = useAuth();
  const {
    isLoading,
    isError,
    posts,
    currentPage,
    setCurrentPage,
    totalPages,
    deletePost,
  } = useNews();

  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [currentActionConfig, setCurrentActionConfig] = useState<Record<
    string,
    any
  > | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await deletePost(id);
      toast.success("Новость успешно удалена");
    } catch (error: any) {
      toast.error("Ошибка при удалении новости", error);
    }
  };

  const handleLoadMore = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const handleOpenDialog = (action: newsActions, item: IPost | null = null) => {
    setCurrentActionConfig({ action, item });
    setIsDialogOpen(true);
  };

  const DynamicDialogComponent = ({
    action,
    item,
  }: {
    action: newsActions;
    item: IPost;
  }) => {
    const Component = NEWS_DIALOG_COMPONENTS[action];
    return <Component close={handleCloseDialog} item={item} />;
  };

  useEffect(() => {
    if (isError) {
      toast.error("Ошибка при загрузке новостей");
    }
  }, [isError]);

  useEffect(() => {
    const listenFunc = () => handleOpenDialog(newsActions.CREATE);

    window.addEventListener("openAddNewsDialog", listenFunc);

    return () => {
      window.removeEventListener("openAddNewsDialog", listenFunc);
    };
  }, []);

  if (isLoading && currentPage === 1) {
    return (
      <motion.div
        className="h-full flex flex-col gap-8 items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <Skeleton className="h-10 w-64" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {[...Array(6)].map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.05,
                duration: 0.3,
              }}
            >
              <Card className="w-[368px] h-[450px] !bg-base-1 !rounded-[16px]">
                <CardContent className="h-full flex flex-col">
                  <Skeleton
                    variant="rectangular"
                    className="h-[300px] w-full"
                  />
                  <div className="mt-4 flex-grow flex flex-col">
                    <Skeleton variant="text" className="h-6 w-3/4" />
                    <Skeleton variant="text" className="h-4 w-full mt-2" />
                    <Skeleton variant="text" className="h-4 w-2/3 mt-2" />
                    <div className="mt-auto pt-4">
                      <Skeleton variant="rounded" className="h-10 w-full" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="h-full flex flex-col gap-8 items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {isDialogOpen && (
        <Dialog
          sx={{
            "& .MuiPaper-root": {
              borderRadius: "32px",
              overflow: "hidden",
            },
            "& .MuiDialog-paper": {
              width: "80vw",
              maxWidth: "900px",
              height: "80vh",
            },
          }}
          open={isDialogOpen}
          onClose={handleCloseDialog}
        >
          {currentActionConfig?.action && (
            <DynamicDialogComponent
              action={currentActionConfig.action}
              item={currentActionConfig.item}
            />
          )}
        </Dialog>
      )}

      <motion.h1
        className="typography__h1"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        {!isClient
          ? "Последние новости"
          : accessToken
          ? "Список новостей"
          : "Последние новости"}
      </motion.h1>

      <div className="h-full">
        {posts.length > 0 ? (
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
            {posts.map((post, index) => (
              <motion.div
                key={post.id}
                className="flex flex-col gap-5"
                initial="hidden"
                animate="visible"
                custom={index}
                transition={{ delay: index * 0.1 }}
              >
                <NewsCard
                  id={post.id}
                  title={post.title}
                  imageUrl={post.imageUrl}
                  content={post.content}
                  date={post.createdAt}
                />
                {accessToken && (
                  <motion.div
                    className="flex flex-row gap-4"
                    variants={buttonGroupVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.div className="w-full" variants={buttonVariants}>
                      <BasicButton
                        className="w-full"
                        onClick={() => handleOpenDialog(newsActions.EDIT, post)}
                      >
                        Редактировать
                      </BasicButton>
                    </motion.div>
                    <motion.div className="w-full" variants={buttonVariants}>
                      <BasicButton
                        className="w-full"
                        onClick={() => handleDelete(post.id)}
                        sx={{
                          color: "#DC2626",
                          backgroundColor: "transparent",
                          border: "1px solid #DC2626",
                          "&:hover": {
                            backgroundColor: "#FEF2F2",
                          },
                        }}
                      >
                        Удалить
                      </BasicButton>
                    </motion.div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            className="text-center py-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p>Новости не найдены</p>
          </motion.div>
        )}
      </div>

      {currentPage < totalPages && (
        <motion.div
          className="p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <BasicButton onClick={handleLoadMore} disabled={isLoading}>
            {isLoading ? "Загрузка..." : "Загрузить ещё"}
          </BasicButton>
        </motion.div>
      )}
    </motion.div>
  );
};

export default HomePage;
