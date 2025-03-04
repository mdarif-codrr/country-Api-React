import React from 'react'
import './css/countryListShimmer.css'
export default function CountryListShimmer() {
  
  return (
    <>
   {
    ( Array.from({length:100}).map((ele,i)=>{
        return <div key={i} className='country shimmer'>
          <div className="cont-img-shimmer">
       
      </div>
      <div className="cont-text-shimmer">
        <p className='para1'>
         
        </p>
        <p className='para'>
          
        </p>
        <p className='para'>
          
        </p>
        <p className='para'>
          
        </p>
      </div>

        </div>
    }))
   }

    </>
  )
}
