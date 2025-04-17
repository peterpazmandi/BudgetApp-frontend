import { SnackbarProvider } from "notistack";
import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import FullPageSpinner from "./components/FullPageSpinner";
import { ThemeProvider } from "./contexts/ThemeContext";
import ReactQueryProvider from "./providers/ReactQueryProvider";
import BudgetAppRoutes from "./router/BudgetAppRoutes";

function App() {
  return (
    <ReactQueryProvider>
      <ThemeProvider>
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
      </ThemeProvider>
    </ReactQueryProvider>
  );
}

export default App;
