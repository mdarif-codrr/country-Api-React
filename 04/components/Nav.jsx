import nightimg from '../images/night-mode.svg'
import lightimg from '../images/light-mode.svg'
import { ThemeContext } from '../contexts/ThemeContext'
import { useContext } from 'react'
const Nav = () => {
  const [mode,setmode]=useContext(ThemeContext)
  
  
  function handleOnClick(){
    setmode(!mode)
    localStorage.setItem('mode', !mode)
  }
  return (
    <nav className={`${mode? 'dark': ''}`}>
      <div className="header">
        <h2>Where in the World?</h2>
      </div>
      <div className="dark-cont" onClick={handleOnClick}>
        <span className="mode">
          {' '}
          <img className="dark-m" width="17px" src={mode? lightimg: nightimg} />
        </span>
        <span className="modes">{mode? 'Dark': 'Light'}Mode</span>
      </div>
    </nav>
  )
}

export default Nav
