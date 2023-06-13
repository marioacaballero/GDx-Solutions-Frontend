import { createBrowserRouter } from "react-router-dom";
import Home from "../../components/Home/Home";
import DataManagment from "../../components/DataManagment/DataManagment";
import { Login } from "../../components/Login/Login";
// import Register from "../../components/Register/Register";
// import ContactForm from "../../components/ContactForm/ContactForm";
// import Services from "../../components/Services/Services";
import Navbar from "../../components/Navbar/Navbar";
import AboutUs from "../../components/AboutUs/AboutUs";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
      </>
    ),
  },
  {
    path: "/singin",
    element: (
      <>
        <Navbar />
        <Login />
      </>
    ),
  },
  {
    path: "/datamanagment",
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
  // {
  //   path: "/contact",
  //   element: (
  //     <>
  //       <Navbar />
  //       <ContactForm />
  //     </>
  //   ),
  // },
  // {
  //   path: "/services",
  //   element: (
  //     <>
  //       <Navbar />
  //       <Services />
  //     </>
  //   ),
  // },
]);
