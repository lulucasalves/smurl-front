import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/home'
import Login from '../pages/login'
import Register from '../pages/register'
import ForgotPassword from '../pages/forgotPassword'
import ResetPassword from '../pages/resetPassword'
import { useState } from 'react'

export function AppRoutes() {
  const [authorized, setAuthorized] = useState(false)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signUp" element={<Register />} />
        <Route path="/signIn" element={<Login />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/resetPassword/:token" element={<ResetPassword />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
