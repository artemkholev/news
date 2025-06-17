import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LIMIT } from '../lib/constants';

interface NewsState {
  currentPage: number;
  selectedSort: string;
  cachedPosts: Record<number, { posts: number[] }>; // Кэш для сохранения при переходах
}

const initialState: NewsState = {
  currentPage: 1,
  selectedSort: 'general',
  cachedPosts: {},
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setSelectedSort: (state, action: PayloadAction<string>) => {
      state.selectedSort = action.payload;
      state.currentPage = 1; // Сброс страницы при изменении сортировки
    },
    cachePostsPage: (state, action: PayloadAction<{ page: number; postIds: number[] }>) => {
      state.cachedPosts[action.payload.page] = { posts: action.payload.postIds };
    },
  },
});

export const { setCurrentPage, setSelectedSort, cachePostsPage } = newsSlice.actions;
export const newsReducer = newsSlice.reducer;