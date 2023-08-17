import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage.js";
import LoginPage from "./pages/LoginPage.js";
import MyPage from "./pages/MyPage.js";
import WritePost from "./pages/WritePost.js";
import PostDetail from "./pages/PostDetail.js";
import Root from "./components/Root.js";
import SelectPost from "./pages/SelectPost.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/mypage", element: <MyPage /> },
      { path: "/writepost", element: <WritePost /> },
      { path: "/posts/:postId", element: <PostDetail /> },
      {path: "/selectpost", element: <SelectPost/>}
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
