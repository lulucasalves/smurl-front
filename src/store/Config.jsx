import { createContext, useEffect, useState } from 'react'

export const ContextProvider = createContext({})

export function Provider(props) {
  return (
    <ContextProvider.Provider value={{}}>
      {props.children}
    </ContextProvider.Provider>
  )
}
