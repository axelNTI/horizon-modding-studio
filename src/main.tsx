import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "sonner";
import App from "./app/App";

import "@unocss/reset/eric-meyer.css";
import "@unocss/reset/sanitize/sanitize.css";
import "virtual:uno.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Toaster richColors />
    <App />
  </React.StrictMode>,
);
