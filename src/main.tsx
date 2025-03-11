// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./Main.css";

createRoot(document.getElementById("root")!).render(
  // Strict mode causes duplicate WebSocket connections, have to investigate more.
  // <StrictMode>
    <App />
  // </StrictMode>
);
