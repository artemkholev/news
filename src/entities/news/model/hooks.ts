import { useState, useEffect, useCallback } from "react";
import * as newsApi from "../api/newsApi";
import { IPost, IAuthor } from "../lib/types";
import { LIMIT } from "../lib/constants";

export const useNews = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [posts, setPosts] = useState<IPost[]>([]);
  const [post, setPost] = useState<IPost | null>(null);
  const [author, setAuthor] = useState<IAuthor | null>(null);
  const [selectedSort, setSelectedSort] = useState("general");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [cachedPages, setCachedPages] = useState<Record<number, IPost[]>>({});

  const fetchPosts = useCallback(async () => {
    setIsLoading(true);
    setIsError(false);

    try {
      // Проверяем кэш
      if (cachedPages[currentPage] && selectedSort === "general") {
        setPosts(cachedPages[currentPage]);
        return;
      }

      const { posts: fetchedPosts, totalCount } = await newsApi.getPosts(
        currentPage,
        selectedSort
      );

      setPosts(fetchedPosts);
      setTotalPages(Math.ceil(totalCount / LIMIT));

      // Кэшируем только для обычной сортировки
      if (selectedSort === "general") {
        setCachedPages((prev) => ({
          ...prev,
          [currentPage]: fetchedPosts,
        }));
      }
    } catch (error) {
      setIsError(true);
      console.error("Failed to fetch posts:", error);
    } finally {
      setIsLoading(false);
    }
  }, [currentPage, selectedSort, cachedPages]);

  const fetchPost = useCallback(async (id: string) => {
    setIsLoading(true);
    setIsError(false);

    try {
      const postData = await newsApi.getPost(id);
      setPost(postData);
      return postData;
    } catch (error) {
      setIsError(true);
      console.error("Failed to fetch post:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const fetchAuthor = useCallback(async (userId: number) => {
    setIsLoading(true);
    setIsError(false);

    try {
      const authorData = await newsApi.getAuthor(userId);
      setAuthor(authorData);
      return authorData;
    } catch (error) {
      setIsError(true);
      console.error("Failed to fetch author:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const createNewPost = useCallback(async (postData: FormData) => {
    setIsLoading(true);
    setIsError(false);

    try {
      const newPost = await newsApi.createPost(postData);
      // Инвалидируем кэш
      setCachedPages({});
      return newPost;
    } catch (error) {
      setIsError(true);
      console.error("Failed to create post:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const updateExistingPost = useCallback(async (postData: IPost) => {
    setIsLoading(true);
    setIsError(false);

    try {
      const updatedPost = await newsApi.updatePost(postData);
      // Обновляем пост в кэше, если он там есть
      setCachedPages((prev) => {
        const newCache = { ...prev };
        for (const page in newCache) {
          newCache[page] = newCache[page].map((p) =>
            p.id === updatedPost.id ? updatedPost : p
          );
        }
        return newCache;
      });
      return updatedPost;
    } catch (error) {
      setIsError(true);
      console.error("Failed to update post:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const deleteExistingPost = useCallback(async (id: string) => {
    setIsLoading(true);
    setIsError(false);

    try {
      debugger
      await newsApi.deletePost(id);
    } catch (error) {
      setIsError(true);
      console.error("Failed to delete post:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return {
    isLoading,
    isError,
    posts,
    post,
    author,
    selectedSort,
    setSelectedSort,
    currentPage,
    setCurrentPage,
    totalPages,
    fetchPost,
    fetchPosts,
    fetchAuthor,
    createPost: createNewPost,
    updatePost: updateExistingPost,
    deletePost: deleteExistingPost,
    cachedPages,
  };
};
