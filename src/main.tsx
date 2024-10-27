// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./styles/Main.css";

createRoot(document.getElementById("root")!).render(
  // Strict mode causes duplicate WebSocket connections so it is disabled until a solution is found
  // <StrictMode>
  <App />
  // </StrictMode>
);
