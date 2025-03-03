import { createContext, useState } from "react";

export const ThemeContext = createContext()



export  function ThemeProvider({children}) {
  const [mode, setmode]= useState(JSON.parse(localStorage.getItem('mode')))

  return (
    <ThemeContext.Provider value={[mode, setmode]}  >
        
    {children}
    </ThemeContext.Provider>
  )
}
