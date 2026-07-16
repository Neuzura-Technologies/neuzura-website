import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

import AOS from "aos";
import "aos/dist/aos.css";

import AppRouter from "./router/AppRouter";

AOS.init({
  duration: 800,
  easing: "ease-out",
  once: true,
  offset: 60,
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>
);
