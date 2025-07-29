import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Inserta los scripts de Retell AI
const script1 = document.createElement("script");
script1.innerHTML = `
  window.retellSettings = {
    botId: "agent_29a7741711c0b3593df62ab527"
  };
`;
document.body.appendChild(script1);

const script2 = document.createElement("script");
script2.src = "https://widget.retellai.com/retell-widget.js";
script2.defer = true;
document.body.appendChild(script2);

// Renderiza la app de React
createRoot(document.getElementById("root")!).render(<App />);

