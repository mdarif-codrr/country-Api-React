import { useEffect, useState } from 'react'
import CountryCard from './CountryCard'
import CountryListShimmer from './CountryListShimmer'

export default function CardList({ quary, region }) {
  const allCountryUrl = 'https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags
'
  const resionUrl = `https://restcountries.com/v3.1/region/${region}`

  const [countriesData, setCountryData] = useState([])
  useEffect(() => {
    let url
    if (region) {
      url = region !== 'All' ? resionUrl : allCountryUrl
    } else {
      url = allCountryUrl
    }
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCountryData(data)
      })
  }, [region])

  const filteredArray = countriesData.filter((country) => {
    const finalQuary = country.name.official.toLocaleLowerCase().includes(quary) || country.region.toLocaleLowerCase().includes(quary)
    return finalQuary
  })
  const countryArray =
    filteredArray.length !== 0 ? (
      filteredArray.map((country) => {
        const flag = country.flags.svg
        const name = country.name.official
        const population = country.population.toLocaleString('en-IN')
        const region = country.region
        const capital = country.capital?.[0] || 'N/A'
        const key = country.name.common
        const countryData = country
        return (
          <CountryCard
            flag={flag}
            name={name}
            population={population}
            region={region}
            capital={capital}
            key={key}
            countryData={countryData}
          />
        )
      })
    ) : (
      <>
        <h2>Country Not Found </h2>
        <h4>Change Region Or Saelect All In Filter</h4>
      </>
    )
  return (
    <div className="content">
      {' '}
      {!countriesData.length ? <CountryListShimmer /> : [countryArray]}{' '}
    </div>
  )
}

// aise bhi likh sakte hai
{
  /*
  export default function CardContainer() {
 
  return <div className="content">{
  
  countriesData.map((country) => {
    return (
      <CountryCard
        flag={country.flags.svg}
        name={country.name.official}
        population={country.population.toLocaleString('en-IN')}
        region={country.region}
        capital={country.capital?.[0]}
        key={country.name.common}
      />
    )
  })
  
  
  }</div>
}
  
  
  */
}
