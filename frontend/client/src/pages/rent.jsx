import React from 'react'
import SearchProperties from '../constants/searchProperties'
import Header from '../components/Header'
import { useLocation } from 'react-router-dom'

function Rent() {
  const dataReceived = useLocation().state;
  console.log(dataReceived);
  return (
    <div className='app--rent'>
      <Header />
      <SearchProperties />

    </div>
  )
}

export default Rent