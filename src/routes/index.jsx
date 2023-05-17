import About from "../pages/About/About";
import Blogs from "../pages/Blogs/Blogs";
import Compare from "../pages/Compare/Compare";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import Shop from "../pages/Shop/Shop";
import SingleBlog from "../pages/SingleBlog/SingleBlog";
import SingleProduct from "../pages/SingleProduct/SingleProduct";
import MainLayout from "../layouts/MainLayout/MainLayout";
import PrivateRoute from "./PrivateRoute";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "product-detail/:id",
        element: <SingleProduct />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "blogs",
        element: <Blogs />,
        children: [
          {
            path: "blog/:id",
            element: <SingleBlog />,
          },
        ],
      },
      {
        path: "compare",
        element: <Compare />,
      },
      // not found
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
];

const authMap = (routes) => {
  return routes.map((route) => {
    if (route?.auth) {
      route.element = <PrivateRoute>{route.element}</PrivateRoute>;
    }

    if (route?.children) {
      route.children = authMap(route.children);
    }

    return route;
  });
};

export default authMap(routes);
