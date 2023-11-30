import { useState, createContext } from 'react'

const NavContext = createContext('defaults')
export function NavContextProvider({ children }) {
  const [disabled, setDisabled] = useState(false)

  return (
    <NavContext.Provider value={{ disabled, setDisabled }}>
      {children}
    </NavContext.Provider>
  )
}

export default NavContext
