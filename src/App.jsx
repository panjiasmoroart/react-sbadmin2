import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Auth/Login";
import Buttons from "./pages/Buttons";
import Cards from "./pages/Cards";
import UtilitiesColor from "./pages/Colors";
import UtilitiesBorder from "./pages/Borders";
import UtilitiesAnimation from "./pages/Animations";
import UtilitiesOther from "./pages/Other";
import Charts from "./pages/Charts";
import Tables from "./components/Tables";
import PageTitle from "./components/PageTitle";
import Register from "./pages/Auth/Register";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import NotFound from "./pages/NotFound";
import Blank from "./pages/Blank";

function App() {
  const token = "token-secret";

  return (
    <BrowserRouter>
      <PageTitle>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route
            path="/login"
            element={
              token !== "token-secret" ? (
                <Navigate to="/dashboard" replace />
              ) : (
                <Login />
              )
            }
          />
          <Route
            path="/dashboard"
            element={
              token === "token-secret" ? (
                <Dashboard />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route
            path="/buttons"
            element={
              token === "token-secret" ? (
                <Buttons />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route
            path="/cards"
            element={
              token === "token-secret" ? (
                <Cards />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route
            path="/utilities-color"
            element={
              token === "token-secret" ? (
                <UtilitiesColor />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route
            path="/utilities-border"
            element={
              token === "token-secret" ? (
                <UtilitiesBorder />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route
            path="/utilities-animation"
            element={
              token === "token-secret" ? (
                <UtilitiesAnimation />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route
            path="/utilities-other"
            element={
              token === "token-secret" ? (
                <UtilitiesOther />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route
            path="/charts"
            element={
              token === "token-secret" ? (
                <Charts />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route
            path="/tables"
            element={
              token === "token-secret" ? (
                <Tables />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />

          <Route
            path="/register"
            element={
              token !== "token-secret" ? (
                <Navigate to="/dashboard" replace />
              ) : (
                <Register />
              )
            }
          />

          <Route
            path="/forgot-password"
            element={
              token !== "token-secret" ? (
                <Navigate to="/dashboard" replace />
              ) : (
                <ForgotPassword />
              )
            }
          />

          <Route
            path="/not-found"
            element={
              token === "token-secret" ? (
                <NotFound />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />

          <Route
            path="/blank"
            element={
              token === "token-secret" ? (
                <Blank />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
        </Routes>
      </PageTitle>
    </BrowserRouter>
  );
}

export default App;
