import React from 'react'
import SearchProperties from '../constants/searchProperties'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'

function Rent() {
  const { location, proType, sqft } = useParams();
  return (
    <div className='app--rent'>
      <Header />
      <SearchProperties />

    </div>
  )
}

export default Rent