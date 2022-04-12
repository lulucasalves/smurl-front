import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/home'
import Login from '../pages/login'
import Register from '../pages/register'
import ForgotPassword from '../pages/forgotPassword'
import ResetPassword from '../pages/resetPassword'
import { useContext, useEffect, useState } from 'react'
import System from '../pages/system'
import { GET_USER } from '../services/user'
import { useQuery } from '@apollo/client'
import { ContextProvider } from '../store/Config'

export function AppRoutes() {
  const { data } = useQuery(GET_USER)
  const { currentUser, user } = useContext(ContextProvider)

  function signIn() {
    const token = localStorage.getItem('token')

    if (token && data) {
      currentUser(data.getUser)
    }
  }


  useEffect(() => {
    signIn()
  }, [data])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signUp" element={<Register />} />
        <Route path="/signIn" element={<Login />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
        {user && <Route path="/system" element={<System />} />}
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
