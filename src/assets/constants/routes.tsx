import { createBrowserRouter } from "react-router-dom";
import Home from "../../components/Home/Home";
import DataManagment from "../../components/DataManagment/DataManagment";
import { Login } from "../../components/Login/Login";
import Register from "../../components/Register/Register";
import ContactForm from "../../components/ContactForm/ContactForm";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/singin",
    element: <Login />,
  },
  {
    path: "/datamanagment",
    element: <DataManagment />,
  },
  {
    path: "/singup",
    element: <Register />,
  },
  {
    path: "/contact",
    element: <ContactForm />,
  },
]);
