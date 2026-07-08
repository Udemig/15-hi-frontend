import Layout from "./components/layout";
import Protected from "./components/protected";
import Create from "./pages/create";
import Dashboard from "./pages/dashboard";
import Detail from "./pages/detail";
import Edit from "./pages/edit";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <Protected>
            <Home />
          </Protected>
        ),
      },
      {
        path: "/shoe/:id",
        element: (
          <Protected>
            <Detail />
          </Protected>
        ),
      },
      {
        path: "/admin/dashboard",
        element: (
          <Protected allowedRoles={["admin"]}>
            <Dashboard />
          </Protected>
        ),
      },
      {
        path: "/admin/create",
        element: (
          <Protected allowedRoles={["admin"]}>
            <Create />
          </Protected>
        ),
      },
      {
        path: "/admin/edit/:id",
        element: (
          <Protected allowedRoles={["admin"]}>
            <Edit />
          </Protected>
        ),
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
