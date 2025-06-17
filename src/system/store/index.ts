import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "@/features/auth";
import { userReducer } from "@/entities/user";
import { newsReducer } from "@/entities/news/model/slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    news: newsReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
