import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AuthProvider } from "./contexts/AuthContext";
import SignUp from "./components/signUp/SignUp";
import Dashboard from "./components/dashboard/Dashboard"
import LogIn from "./components/logIn/LogIn";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import ForgotPassword from "./components/forgotPassword/ForgotPassword";
import UpdateProfile from "./components/updateProfile/UpdateProfile";





function App() {
  return (

    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div
        className="w-100"
        style={{ maxWidth: "400px" }}
      >
        <BrowserRouter>
          <AuthProvider>
            <Routes>
              <Route exact path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
              <Route path="/update-profile" element={<PrivateRoute><UpdateProfile /></PrivateRoute>} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<LogIn />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
            </Routes>
          </AuthProvider>
        </BrowserRouter>

      </div>
    </Container>

  )
}

export default App;
