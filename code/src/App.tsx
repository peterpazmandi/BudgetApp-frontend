import { SnackbarProvider } from "notistack";
import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import FullPageSpinner from "./components/FullPageSpinner";
import { ThemeProvider } from "./contexts/ThemeContext";
import ReactQueryProvider from "./providers/ReactQueryProvider";
import BudgetAppRoutes from "./router/BudgetAppRoutes";
import { LoadingProvider } from "./contexts/LoadingContext";
import { TranslationProvider } from "./common/i18n/context/TranslationContext";
import { UserProvider } from "./contexts/UserContext";

function App() {
  return (
    <ReactQueryProvider>
      <ThemeProvider>
        <TranslationProvider>
          <LoadingProvider>
            <SnackbarProvider
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
            >
              <UserProvider>
                <BrowserRouter>
                  <Suspense fallback={<FullPageSpinner />}>
                    <BudgetAppRoutes />
                  </Suspense>
                </BrowserRouter>
              </UserProvider>
            </SnackbarProvider>
          </LoadingProvider>
        </TranslationProvider>
      </ThemeProvider>
    </ReactQueryProvider>
  );
}

export default App;
