import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import AppBar from "./components/AppBar";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ContactsPage from "./pages/ContactsPage";
import Container from "./components/Container";
import { authOperations } from "./redux/auth";
import PrivateRoute from "./components/PrivateRoute"; 
import PublicRoute from "./components/PublicRoute";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />

      <Routes>
        <Route
          exact
          path="/"
          element={
            <PublicRoute restricted>
              <HomePage />
            </PublicRoute>
          }
        />

        <Route
          exact
          path="/register"
          element={
            <PublicRoute restricted>
              <RegisterPage />
            </PublicRoute>
          }
        />

        <Route
          exact
          path="/login"
          element={
            <PublicRoute restricted>
              <LoginPage />
            </PublicRoute>
          }
        />

        <Route
          exact
          path="/contacts"
          element={
            <PrivateRoute restricted>
              <ContactsPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </Container>
  );
}
