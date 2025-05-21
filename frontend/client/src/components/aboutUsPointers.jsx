import React from 'react'
import './aboutUsPointers.css'

function aboutUsPointers({point}) {
  return (
    <div className='home--aboutUsPointers'>
      <div className='imgIcon' style={{backgroundColor: '#7EC8E3', height: '80px', width: '80px'}}>Image</div>
      <h3>{point}</h3>
    </div>
  )
}

export default aboutUsPointers