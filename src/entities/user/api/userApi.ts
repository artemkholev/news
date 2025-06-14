import { createAsyncThunk } from "@reduxjs/toolkit";
import baseApi from "@/shared/api/requests";
import { User } from "../lib";

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await baseApi.get<User>("/api/me");
      return data;
    } catch (error: any) {
      console.log(error);
      
      return rejectWithValue("Failed to fetch user information");
    }
  }
);