import { RouterProvider } from "react-router-dom";
// import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { routes } from "./assets/constants/routes";

function App() {
  return (
    <>
      <Navbar />
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
