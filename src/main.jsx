import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes.jsx";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./Provider/AuthProvider/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <div className="mx-auto max-w-screen-xl">
        <RouterProvider router={router} />
      </div>
    </AuthProvider>
  </StrictMode>
);
