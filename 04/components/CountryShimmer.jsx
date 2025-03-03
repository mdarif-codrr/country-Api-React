import React from 'react'
import './css/countryShimmer.css'
export default function CountryShimmer() {
  return (
    <section>
      <div className="flex-item ">
        <div className="img-cont shimmer-flex"></div>
        <div className="all-info">
          <div className="info">
            <div className="first-info">
              <h2 className="country-name shimmer-h2"></h2>

              <div className="shimmer-native"></div>

              <div className="shimmer-native"> </div>

              <div className="shimmer-native"> </div>

              <div className="shimmer-native"> </div>
            </div>
            <div className="sec-info ">
              <div className="shimmer-native"></div>
              <div className="shimmer-native"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
