import { createBrowserRouter } from "react-router-dom";
import { withLayout } from "../providers/withLayout";
import { HomePage } from "@/pages/home";
import { NewsPage } from "@/pages/news";
import { NewsItemPage } from "@/pages/news-item";
import { AppRoutes } from "./router.options";

export const router = createBrowserRouter([
  {
    path: AppRoutes.HOME,
    element: withLayout(HomePage)(),
  },
  {
    path: AppRoutes.NEWS,
    element: withLayout(NewsPage)(),
  },
  {
    path: AppRoutes.NEWS_ITEM,
    element: withLayout(NewsItemPage)(),
  },
]);
