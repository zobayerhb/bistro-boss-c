import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
import AuthProvider from "./providers/AuthProvider";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <div className="max-w-7xl mx-auto">
        <RouterProvider router={router} />
      </div>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
        }}
      />
    </AuthProvider>
  </StrictMode>
);
