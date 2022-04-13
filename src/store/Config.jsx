import { createContext, useEffect, useState } from 'react'

export const ContextProvider = createContext({})

export function Provider(props) {
  const [theme, setTheme] = useState('light')
  const [user, setUser] = useState(null)

  function changeTheme() {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    localStorage.setItem('theme', newTheme)
    setTheme(newTheme)
  }

  useEffect(() => {
    const htmlTag = document.documentElement
    htmlTag.setAttribute('data-color', theme || 'light')
  }, [theme])

  useEffect(() => {
    const getTheme = localStorage.getItem('theme')

    if (getTheme) {
      setTheme(getTheme)
    }
  }, [])

  function setToken(token) {
    localStorage.setItem('token', token)
  }

  function signOut() {
    setUser(null)
    localStorage.removeItem('token')
    window.location.href = '/'
  }

  function currentUser(data) {
    setUser(data)
  }

  return (
    <ContextProvider.Provider
      value={{ theme, changeTheme, signOut, user, setToken, currentUser }}
    >
      {props.children}
    </ContextProvider.Provider>
  )
}
