import { useState, useCallback } from "react";
import { apiFetch } from "@/shared/api";
import type { IPost, IAuthor } from "../lib";

export const usePosts = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [posts, setPosts] = useState<IPost[]>([]);
  const [post, setPost] = useState<IPost | null>(null);
  const [author, setAuthor] = useState<IAuthor | null>(null);
  const [selected, setSelected] = useState("general");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [totalPages, setTotalPages] = useState(0);

  const selectOptions = [
    { name: "Обычный порядок", value: "general" },
    { name: "По названию", value: "title" },
    { name: "По содержанию", value: "body" },
  ];

  const getPosts = useCallback(async () => {
    setIsLoading(true);
    setIsError(false);
    try {
      const response = await apiFetch.get("/posts", {
        params: {
          _page: page,
          _limit: limit,
        },
      });
      setPosts(response.data);
      setTotalPages(
        Math.ceil(parseInt(response.headers["x-total-count"]) / limit)
      );
    } catch (error) {
      setIsError(true);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, [page, limit]);

  const getPost = useCallback(async (id: string) => {
    setIsLoading(true);
    setIsError(false);
    try {
      const response = await apiFetch(`/posts/${id}`);
      setPost(response.data);
    } catch (error) {
      setIsError(true);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const getInfoAboutAuthor = useCallback(async (id: number | undefined) => {
    if (!id) return;

    setIsLoading(true);
    setIsError(false);
    try {
      const response = await apiFetch(`/users/${id}`);
      setAuthor(response.data);
    } catch (error) {
      setIsError(true);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const removePost = useCallback((postToRemove: IPost) => {
    setPosts((prev) => prev.filter((p) => p.id !== postToRemove.id));
  }, []);

  const sortedPosts = [...posts].sort((a, b) =>
    (a[selected as keyof IPost] as string)?.localeCompare(
      b[selected as keyof IPost] as string
    )
  );

  return {
    isLoading,
    isError,
    posts,
    post,
    author,
    selected,
    setSelected,
    page,
    setPage,
    limit,
    setLimit,
    totalPages,
    selectOptions,
    sortedPosts,
    getPosts,
    getPost,
    getInfoAboutAuthor,
    removePost,
  };
};
