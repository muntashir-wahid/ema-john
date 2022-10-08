import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Inventory from "./components/Inventory/Inventory";
import Orders from "./components/Orders/Orders";
import Shop from "./components/Shop/Shop";
import Main from "./layout/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { index: true, element: <Shop /> },
      { path: "shop", element: <Shop /> },
      { path: "orders", element: <Orders /> },
      { path: "inventory", element: <Inventory /> },
      { path: "about", element: <About /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
