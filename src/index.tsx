import { createRoot } from "react-dom/client";
import "./app/styles/index.scss";
import { BrowserRouter } from "react-router";
import { ThemeProvider } from "app/providers/ThemeProvider/ui/ThemeProvider";
import { App } from "app/App";
import { ErrorBoundary } from "app/providers/ErrorBoundary";
import { StoreProvider } from "app/providers/StoreProvider";
const root = createRoot(document.getElementById("root")!);

root.render(
  <StoreProvider>
    <ErrorBoundary>
      <ThemeProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </ErrorBoundary>
  </StoreProvider>,
);
