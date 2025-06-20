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
      posts: response.data.items,
      totalCount: response.data.items.total,
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

export const createPost = async (postData: FormData) => {
  try {
    const response = await baseApi.post("/posts", postData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updatePost = async (postData: IPost) => {
  try {
    const response = await baseApi.put(`/posts/${postData.id}`, postData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deletePost = async (id: string) => {
  try {
    await baseApi.delete(`/posts/${id}`);
  } catch (error) {
    throw error;
  }
};
