import React from 'react'
import './css/countryListShimmer.css'
export default function CountryListShimmer() {
  
  return (
    <>
   {
    ( Array.from({length:100}).map((ele,i)=>{
        return <div key={i} className='country shimmer'></div>
    }))
   }

    </>
  )
}
