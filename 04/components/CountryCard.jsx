import { Link } from 'react-router'

export default function CountryCard({
  flag,
  name,
  population,
  region,
  capital,
  countryData,
}) {
  return (
    <Link to={`${name}`} className="country" state={countryData}>
      <div className="cont-img">
        <img src={flag} alt={`${name} flag`} />
      </div>
      <div className="cont-text">
        <h3>{name}</h3>
        <p>
          <b>Population : </b>
          <span>{population}</span>
        </p>
        <p>
          <b>Region : </b>
          <span>{region}</span>
        </p>
        <p>
          <b>Capital : </b>
          <span>{capital}</span>
        </p>
      </div>
    </Link>
  )
}
