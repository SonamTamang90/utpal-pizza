import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./ui/Home";
import About from "./ui/About";
import Contact from "./ui/Contact";
import BaseLayout from "./ui/BaseLayout";

const router = createBrowserRouter([
  {
    element: <BaseLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
