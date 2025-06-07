import React from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { PathNames } from "@/shared/constants/route.constants";
import type { IPost } from "../lib";

interface PostItemProps {
  post: IPost;
  removePost: (postToRemove: IPost) => void;
}

export const PostItem: React.FC<PostItemProps> = ({ post, removePost }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLeftClick = () => {
    navigate({
      pathname: PathNames.POST.replace(":id", post.id.toString()),
      search: location.search,
    });
  };

  const handleRightClick = (e: React.MouseEvent) => {
    e.preventDefault();
    removePost(post);
  };

  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
      className="post-container bg-white rounded-xl overflow-hidden shadow-md border border-gray-200 transition-all duration-300 cursor-pointer"
      onClick={handleLeftClick}
      onContextMenu={handleRightClick}
    >
      <div className="post__info p-4">
        <div className="flex items-center mb-2">
          <span
            className="min-w-8 min-h-8 rounded-full items-center justify-center text-white font-bold mr-3 text-center align-middle"
            style={{
              background: "linear-gradient(90deg, #ff8a00, #e52e71)",
            }}
          >
            {post.id}
          </span>
          <h3 className="text-lg font-semibold text-gray-800">{post.title}</h3>
        </div>
        <div className="post__info-elem">
          <p className="text-gray-600">{post.body}</p>
        </div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="mt-4 inline-block px-4 py-2 rounded-lg text-sm font-medium"
          style={{
            background:
              "linear-gradient(90deg, rgba(255,138,0,0.1), rgba(229,46,113,0.1))",
            color: "#e52e71",
          }}
        >
          Читать далее →
        </motion.div>
      </div>
    </motion.div>
  );
};
