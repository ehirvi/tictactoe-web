import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./Main.css";

createRoot(document.getElementById("root")!).render(
  // Strict mode might cause duplicate WebSocket connections, have to investigate more.
  <StrictMode>
    <App />
  </StrictMode>
);
