import React from 'react'
import { Link } from 'react-router';

export default function CuntriesBorder({countryData}) {
  return (
    <div className="borders">
                {countryData.borders.map((border) =>{
                   return <Link key={border} to={`/${border}`} >{border}</Link>
                })}
              </div>
  )
}
