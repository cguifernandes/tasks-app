import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "./context/theme-provider.tsx";
import { ModalProvider } from "./context/modal-provider.tsx";
import { UserProvider } from "./context/user-provider.tsx";
import { Toaster } from "./components/ui/sonner.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <UserProvider>
        <ModalProvider>
          <App />
          <Toaster />
        </ModalProvider>
      </UserProvider>
    </ThemeProvider>
  </StrictMode>
);
