import React from "react";
import { motion } from "framer-motion";
import { PostItem, type IPost } from "@/entities/posts";

interface PostsListProps {
  posts: IPost[];
  removePost: (postToRemove: IPost) => void;
}

export const PostsList: React.FC<PostsListProps> = ({ posts, removePost }) => {
  if (posts.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-12 text-gray-500"
      >
        <h2 className="text-2xl">Нет данных для отображения</h2>
        <p className="mt-2">Попробуйте изменить параметры поиска</p>
      </motion.div>
    );
  }

  return (
    <div className="bucket-list grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post, index) => (
        <motion.div
          key={post.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
        >
          <PostItem post={post} removePost={removePost} />
        </motion.div>
      ))}
    </div>
  );
};
