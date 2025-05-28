import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { VideoPage } from "./pages/VideoPage.tsx";
import "./styles/main.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <VideoPage />,
  },

  {
    path: "*",
    element: "Soon",
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
