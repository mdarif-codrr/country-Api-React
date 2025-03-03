import { useContext, useState } from 'react'
import '../style.css'
import SerarchImg from '../images/search.svg'
import Input from './Input'
import RegionNamePlate from './RegionNamePlate'
import DropDown from './DropDown'
import CardList from './CardList'
import GoToTop from './GoToTop'
import { ThemeContext } from '../contexts/ThemeContext'

export default function Home() {
  const [quary, setQuary] = useState('')
  const localStoregRegin = localStorage.getItem('region')
  const [region, setRegion] = useState(localStoregRegin)
  const [mode] = useContext(ThemeContext)
  
  const handleRegionChange = (region) => {
    localStorage.setItem('region', region)
    const localStoregRegin = localStorage.getItem('region')
    setRegion(localStoregRegin)
  }

    return (
      <>
         <div id="home" className={`main-container ${mode? 'dark': ''}`}>
                <main >
                  <div className="search-container ">
                    <Input SerarchImg={SerarchImg} setQuary={setQuary} />
                    <RegionNamePlate region={region} />
                    <DropDown onRegionChange={handleRegionChange} />
                  </div>
                  <CardList region={region} quary={quary} />
                </main>
                <GoToTop />
              </div>
      </>
    )
  }

