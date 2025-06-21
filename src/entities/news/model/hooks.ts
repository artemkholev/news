import { useState, useEffect, useCallback, useRef } from "react";
import * as newsApi from "../api/newsApi";
import { IPost } from "../lib/types";
import { LIMIT } from "../lib/constants";

export const useNews = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [posts, setPosts] = useState<IPost[]>([]);
  const [post, setPost] = useState<IPost | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const initialLoad = useRef(true);
  const isLoadingRef = useRef(false);

  const fetchPosts = useCallback(async () => {
    if (!hasMore || isLoadingRef.current) return;

    isLoadingRef.current = true;
    setIsLoading(true);
    setIsError(false);
    setErrorMessage(null);

    try {
      const { posts: fetchedPosts, totalCount } = await newsApi.getPosts(
        currentPage
      );

      setPosts((prev) => {
        // Фильтруем дубликаты
        const existingIds = new Set(prev.map((p) => p.id));
        const uniqueNewPosts = fetchedPosts.filter(
          (newPost: IPost) => !existingIds.has(newPost.id)
        );

        return [...prev, ...uniqueNewPosts];
      });

      // Проверяем, есть ли еще посты для загрузки
      setHasMore(
        fetchedPosts.length === LIMIT && currentPage * LIMIT < totalCount
      );
    } catch (error) {
      setIsError(true);
      setErrorMessage(
        error instanceof Error ? error.message : "Failed to fetch posts"
      );
      console.error("Failed to fetch posts:", error);
    } finally {
      isLoadingRef.current = false;
      setIsLoading(false);
      initialLoad.current = false;
    }
  }, [currentPage, hasMore]);

  // Инициализация и загрузка при изменении параметров
  useEffect(() => {
    // Первый запрос делаем сразу, последующие - только при изменении currentPage
    if (initialLoad.current || !initialLoad.current) {
      fetchPosts();
    }
  }, [currentPage, fetchPosts]);

  const loadMorePosts = useCallback(() => {
    if (hasMore && !isLoadingRef.current) {
      setCurrentPage((prev) => prev + 1);
    }
  }, [hasMore]);

  const fetchPost = useCallback(
    async (id: string) => {
      if (post?.id === id) return post;

      setIsLoading(true);
      try {
        const postData = await newsApi.getPost(id);
        setPost(postData);
        return postData;
      } catch (error) {
        setIsError(true);
        setErrorMessage(
          error instanceof Error ? error.message : "Failed to fetch post"
        );
        throw error;
      } finally {
        setIsLoading(false);
      }
    },
    [post]
  );

  const createPost = useCallback(async (postData: FormData) => {
    setIsLoading(true);
    try {
      const newPost = await newsApi.createPost(postData);
      debugger
      setPosts((prev) => [newPost, ...prev]);
      return newPost;
    } catch (error) {
      setIsError(true);
      setErrorMessage(
        error instanceof Error ? error.message : "Failed to create post"
      );
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const updatePost = useCallback(
    async (postData: IPost) => {
      setIsLoading(true);
      try {
        const updatedPost = await newsApi.updatePost(postData);
        setPosts((prev) =>
          prev.map((p) => (p.id === updatedPost.id ? updatedPost : p))
        );
        if (post?.id === updatedPost.id) setPost(updatedPost);
        return updatedPost;
      } catch (error) {
        setIsError(true);
        setErrorMessage(
          error instanceof Error ? error.message : "Failed to update post"
        );
        throw error;
      } finally {
        setIsLoading(false);
      }
    },
    [post]
  );

  const deletePost = useCallback(
    async (id: string) => {
      setIsLoading(true);
      try {
        await newsApi.deletePost(id);
        setPosts((prev) => prev.filter((p) => p.id !== id));
        if (post?.id === id) setPost(null);
      } catch (error) {
        setIsError(true);
        setErrorMessage(
          error instanceof Error ? error.message : "Failed to delete post"
        );
        throw error;
      } finally {
        setIsLoading(false);
      }
    },
    [post]
  );

  return {
    isLoading,
    isError,
    errorMessage,
    posts,
    post,
    currentPage,
    loadMorePosts,
    hasMore,
    fetchPost,
    createPost,
    updatePost,
    deletePost,
  };
};
