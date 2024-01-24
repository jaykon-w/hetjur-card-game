import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const grabTheCenter = (): void => {
  const x = window.outerWidth / 2;
  const y = window.outerHeight / 2;
  const root = document.querySelector(":root")! as HTMLElement;

  root.style.setProperty("--center-x", `${x}px`);
  root.style.setProperty("--center-y", `${y}px`);
};

window.addEventListener("resize", grabTheCenter);
grabTheCenter();
