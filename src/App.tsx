import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import "./App.css";
import DataManagment from "./components/DataManagment/DataManagment";
import { Login } from "./components/Login/Login";
import Register from "./components/Register/Register";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Data from "./components/DataManagment/Data/Data";

const routes = createBrowserRouter([
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
    path: "/prueba",
    element: <Data />,
  },
]);

function App() {
  return (
    <>
      <Navbar />
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
