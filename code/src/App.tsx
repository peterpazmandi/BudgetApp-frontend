import { SnackbarProvider } from "notistack";
import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import FullPageSpinner from "./components/FullPageSpinner";
import { ThemeProvider } from "./contexts/ThemeContext";
import ReactQueryProvider from "./providers/ReactQueryProvider";
import BudgetAppRoutes from "./router/BudgetAppRoutes";
import { LoadingProvider } from "./contexts/LoadingContext";

function App() {
  return (
    <ReactQueryProvider>
      <ThemeProvider>
        <LoadingProvider>
          <SnackbarProvider
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
          >
            <BrowserRouter>
              <Suspense fallback={<FullPageSpinner />}>
                <BudgetAppRoutes />
              </Suspense>
            </BrowserRouter>
          </SnackbarProvider>
        </LoadingProvider>
      </ThemeProvider>
    </ReactQueryProvider>
  );
}

export default App;
