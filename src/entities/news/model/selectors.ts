import { RootState } from "@/system/store";
import { LIMIT } from "../lib/constants";

export const selectCurrentPage = (state: RootState) => state.news.currentPage;
export const selectSelectedSort = (state: RootState) => state.news.selectedSort;
export const selectCachedPosts = (state: RootState) => state.news.cachedPosts;
export const selectTotalPages = (totalCount: number) =>
  Math.ceil(totalCount / LIMIT);
