import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.less";
import { RootProvider } from "./context/RootContext.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <RootProvider>
      <App />
    </RootProvider>
  </BrowserRouter>
);
