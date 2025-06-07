import { createBrowserRouter } from "react-router-dom";
import { withLayout } from "./providers/withLayout";
import { HomePage } from "@/pages/home";
import { PostsPage } from "@/pages/posts";
import { PostPage } from "@/pages/post";

export const router = createBrowserRouter([
  {
    path: "/",
    element: withLayout(HomePage)(),
  },
  {
    path: "/posts",
    element: withLayout(PostsPage)(),
  },
  {
    path: "/posts/post/:id",
    element: withLayout(PostPage)(),
  },
]);
