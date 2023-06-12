import { RouterProvider } from "react-router-dom";
// import "./App.css";
import { routes } from "./assets/constants/routes";

function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
