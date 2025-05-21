import React from 'react'
import AboutUsPointers from './aboutUsPointers.jsx'
import './aboutUsPointers.css'
import './aboutUs.css'

function aboutUs() {
    const points = [
        "Look up the names and contact information of current property owners, as well as the sale history of each property",
        "Get real-time property value and rent estimates (AVM) based on the unique characteristics of each property and nearby comparable listings",
        "Retrieve sales or rental comparables for a specific property, including their attributes, listed prices or rents, and distance from the subject property",
        "Search for active sale and rental listings in a specific city or geographical area with different ways to filter the available data",
        "Access historical price and rent trends, market averages, listing and composition statistics for most US zip codes"
    ];

  return (
    <div className='app--aboutUs'>
        {points.map((point, i) => {
            return (
              <AboutUsPointers key={i} point={point}/>
            )
        })}
    </div>
  )
}

export default aboutUs