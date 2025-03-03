
import Nav from './components/Nav'
import { Outlet } from 'react-router'
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
     <ThemeProvider>
      <Nav  />
      <Outlet />                   
     </ThemeProvider>
  )
}

export default App
