import { createBrowserRouter } from "react-router-dom";
import Home from "../../components/Home/Home";
import DataManagment from "../../components/DataManagment/DataManagment";
import { Login } from "../../components/Login/Login";
import Navbar from "../../components/Navbar/Navbar";
import AboutUs from "../../components/AboutUs/AboutUs";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signin",
    element: (
      <>
        <Navbar />
        <Login />
      </>
    ),
  },
  {
    path: "/:token/datamanagment",
    element: <DataManagment />,
  },
  {
    path: "/about",
    element: (
      <>
        <Navbar />
        <AboutUs />,
      </>
    ),
  },
]);
