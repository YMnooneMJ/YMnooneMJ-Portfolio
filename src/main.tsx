import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Projects from "./pages/Projects.tsx";
import Contact from "./pages/Contact.tsx";
import About from "./pages/About.tsx";
import Skills from "./components/Skills.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "skills", element: <Skills /> },
      { path: "projects", element: <Projects /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
