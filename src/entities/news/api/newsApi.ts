import baseApi from "@/shared/api/requests";
import { IPost } from "../lib/types";
import { LIMIT } from "../lib/constants";

export const getPosts = async (page: number, sort: string) => {
  try {
    const response = await baseApi.get("/posts", {
      params: {
        _page: page,
        _limit: LIMIT,
        _sort: sort !== "general" ? sort : undefined,
        _order: "asc",
      },
    });

    return {
      posts: response.data,
      totalCount: parseInt(response.headers["x-total-count"]) || 0,
    };
  } catch (error) {
    throw error;
  }
};

export const getPost = async (id: number) => {
  try {
    const response = await baseApi.get(`/posts/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAuthor = async (id: number) => {
  try {
    const response = await baseApi.get(`/users/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createPost = async (postData: Omit<IPost, "id">) => {
  try {
    const response = await baseApi.post("/posts", postData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updatePost = async (postData: IPost) => {
  try {
    const response = await baseApi.put(`/posts/${postData.id}`, postData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deletePost = async (id: number) => {
  try {
    await baseApi.delete(`/posts/${id}`);
  } catch (error) {
    throw error;
  }
};
