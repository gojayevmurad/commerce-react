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
import Profile from "../pages/Profile/Profile";
import Orders from "../pages/Profile/components/Orders";
import Favorites from "../pages/Profile/components/Favorites";
import ChangePassword from "../pages/Profile/components/ChangePassword";
import Addresses from "../pages/Profile/components/Addresses";
import CoomingSoon from "../pages/CoomingSoon/CoomingSoon";

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
      {
        path: "profile",
        element: <Profile />,
        auth: true,
        children: [
          {
            index: true,
            element: <Orders />,
          },
          {
            path: "favorites",
            element: <Favorites />,
          },
          {
            path: "change-password",
            element: <ChangePassword />,
          },
          {
            path: "addresses",
            element: <Addresses />,
          },
        ],
      },
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
  {
    path: "/cooming-soon",
    element: <CoomingSoon />,
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
