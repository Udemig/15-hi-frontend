import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Detail from "./pages/detail";
import Form from "./pages/form";
import type { FC } from "react";
import Layout from "./components/layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/note/:id", element: <Detail /> },
      { path: "/create", element: <Form /> },
      { path: "/edit/:id", element: <Form /> },
    ],
  },
]);

const App: FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
