import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import "./App.css";
import DataManagment from "./components/DataManagment/DataManagment";
import { Login } from "./components/Login/Login";
import Register from "./components/Register/Register";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/singIn",
    element: <Login />,
  },
  {
    path: "/dataCOES",
    element: <DataManagment />,
  },
  {
    path: "/singUp",
    element: <Register />,
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
