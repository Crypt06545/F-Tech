import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import route from "./routes/route.jsx";
import Authprovider from "./providers/Authprovider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Authprovider>
      <RouterProvider router={route} />
    </Authprovider>
  </StrictMode>
);
