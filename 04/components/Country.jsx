import './css/country.css'
import backArrow from '../images/back-arrow.svg'
import { useContext, useEffect, useState } from 'react'
import { Link, useLocation, useOutletContext, useParams } from 'react-router'
import CountryShimmer from './CountryShimmer'
import CuntriesBorder from './CuntriesBorder'
import { ThemeContext } from '../contexts/ThemeContext'
import Footer from './Footer'

export default function Country() {
  const params = useParams()
  const countryName = params.country
  // console.log(countryName);
  const [mode] = useContext(ThemeContext)

  const { state } = useLocation()
  const [countryData, setCountryData] = useState(null)
  const [notFound, SetNotFound] = useState(false)

  function showCountryData(data) {
    console.log(data)

    let cuntryData = {
      flag: data.flags.svg,
      name: data.name.official,

      population: data.population.toLocaleString('en-in'),
      region: data.region,
      subRegion: data.subregion,

      borders: [],
    }
    if (data.currencies) {
      cuntryData = {
        ...cuntryData,
        currencies: Object.values(data.currencies)
          .map((currency) => currency.name)
          .join(', '),
      }
    }
    if (data.languages) {
      cuntryData = {
        ...cuntryData,
        language: Object.values(data.languages)
          .map((language) => language)
          .join(', '),
      }
    }
    if (data.name.nativeName) {
      cuntryData = {
        ...cuntryData,
        nativeName: Object.values(data.name.nativeName)[0].common,
      }
    } else {
      cuntryData = {
        ...cuntryData,
        nativeName: data.name.common,
      }
    }
    if (data.tld) {
      cuntryData = {
        ...cuntryData,
        tld: data.tld.join(', '),
      }
    }
    if (data.capital) {
      cuntryData = {
        ...cuntryData,
        capital: data.capital.join(', '),
      }
    }

    setCountryData(cuntryData)

    if (data.borders) {
      data.borders.map((border) => {
        fetch(`https://restcountries.com/v3.1/alpha/${border}`)
          .then((res) => res.json())
          .then(([borderData]) => {
            setCountryData((prevState) => ({
              ...prevState,
              borders: [...prevState.borders, borderData.name.common],
            }))
          })
      })
    }
  }
  useEffect(() => {
    if (state && state.maps) {
      showCountryData(state)
      return
    }

    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        showCountryData(data)
      })
      .catch((err) => {
        SetNotFound(true)
      })
  }, [countryName])
  if (notFound) {
    return <div>Country Not Found...</div>
  }
  return countryData === null ? (
    <CountryShimmer />
  ) : (
    <div className={` main-container ${mode ? 'dark' : ''}`}>
      <section>
        <div className="back-btn" onClick={() => history.back()}>
          <img width="17px" src={backArrow} alt="backArrow" />
          <span>Back</span>
        </div>
        <div className="flex-item">
          <div className="img-cont">
            <img className="country-flag" src={countryData.flag} alt=" flag" />
          </div>
          <div className="all-info">
            <div className="info">
              <div className="first-info">
                <h2 className="country-name">{countryData.name}</h2>
                <p>
                  <b>Native Name : </b>
                  <span className="native-name">{countryData.nativeName}</span>
                </p>
                <p>
                  <b>Population : </b>
                  <span className="population">{countryData.population}</span>
                </p>
                <p>
                  <b>Region : </b>
                  <span className="region">{countryData.region}</span>
                </p>
               {countryData.subRegion? <p>
                  <b>Sub Region : </b>
                  <span className="sub-region">{countryData.subRegion}</span>
                </p> : ''}
                {countryData.capital?<p>
                  <b>Capital : </b>
                  <span className="capital">{countryData.capital}</span>
                </p>: ''}
              </div>
              <div className="sec-info">
                {countryData.tld ? (
                  <p>
                    <b>Top Level Domain : </b>
                    <span className="domain">{countryData.tld}</span>
                  </p>
                ) : (
                  ''
                )}
                {countryData.currencies?<p>
                  <b>Currencies : </b>
                  <span className="currency">{countryData.currencies}</span>
                </p>: ''}
                {countryData.languages?<p>
                  <b>Languages : </b>
                  <span className="lang">{countryData.language}</span>
                </p>: ''}
              </div>
            </div>
            {countryData.borders.length !== 0 && (
              <div className="third-info">
                <span>
                  <b>Border Cuntries :</b>
                </span>
                <CuntriesBorder countryData={countryData} />
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}
