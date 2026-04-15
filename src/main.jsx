import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "./context/ThemeContext";

import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
);

console.log(
  `%c
  ░██████                  ░██████             ░██                   
 ░██   ░██                ░██   ░██            ░██                   
░██         ░███████     ░██        ░██    ░██ ░████████   ░███████  
░██  █████ ░██    ░██    ░██        ░██    ░██ ░██    ░██ ░██        
░██     ██ ░██    ░██    ░██        ░██    ░██ ░██    ░██  ░███████  
 ░██  ░███ ░██    ░██     ░██   ░██ ░██   ░███ ░███   ░██        ░██ 
  ░█████░█  ░███████       ░██████   ░█████░██ ░██░█████   ░███████   
`,
  "color: #0E3386; font-family: monospace; font-size: 12px;",
);
