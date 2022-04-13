import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/home'
import Login from '../pages/login'
import Register from '../pages/register'
import ForgotPassword from '../pages/forgotPassword'
import ResetPassword from '../pages/resetPassword'
import { useContext, useEffect } from 'react'
import System from '../pages/system'
import { GET_USER } from '../services/user'
import { useQuery } from '@apollo/client'
import { ContextProvider } from '../store/Config'
import Redirect from '../pages/redirect'
import Google from '../pages/google'
import Facebook from '../pages/facebook'
import Github from '../pages/github'

export function AppRoutes() {
  const { data } = useQuery(GET_USER)
  const { currentUser } = useContext(ContextProvider)
  const token = localStorage.getItem('token')

  function signIn() {
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
        <Route path="/l/:name" element={<Redirect />} />
        <Route path="/system" element={<System />} />
        <Route path="/" element={<Home />} />
        <Route path="/google" element={<Google />} />
        <Route path="/facebook" element={<Facebook />} />
        <Route path="/github" element={<Github />} />
      </Routes>
    </BrowserRouter>
  )
}
