import { SnackbarProvider } from "notistack";
import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FullPageSpinner from "./components/FullPageSpinner";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Login from "./pages/auth/login/Login";
import ReactQueryProvider from "./providers/ReactQueryProvider";

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
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </SnackbarProvider>
      </ThemeProvider>
    </ReactQueryProvider>
  );
}

export default App;
