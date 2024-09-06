import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/login";
import Table from "./pages/table";
import LayoutManage from "./layouts/manage";
export default () => {
  const router = createBrowserRouter([
    {
      path: "/login",
      Component: Login,
    },
    {
      path: "/layout",
      Component: LayoutManage,
      children: [
        {
          path: "table",
          Component: Table,
        },
      ],
    },
  ]);
  return (
    <div>
      router
      <RouterProvider router={router} />
    </div>
  );
};
