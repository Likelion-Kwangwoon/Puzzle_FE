import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage.js";
import LoginPage from "./pages/LoginPage.js";
import MyPage from "./pages/MyPage.js";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/login", element: <LoginPage /> },
  {path: "mypage", element: <MyPage/>},
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
