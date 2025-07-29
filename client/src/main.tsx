import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// === RETELL AI CHATBOT INTEGRATION ===
const script = document.createElement("script");
script.id = "retell-widget";
script.type = "module";
script.src = "https://dashboard.retellai.com/retell-widget.js";
script.dataset.publicKey = "public_key_53f3288025b7e78e3161e"; 
script.dataset.agentId = "agent_29a7741711c0b3593df62ab527";
script.dataset.agentVersion = "0";
script.dataset.title = "Chat de Retell";
document.body.appendChild(script);
// ======================================

createRoot(document.getElementById("root")!).render(<App />);

