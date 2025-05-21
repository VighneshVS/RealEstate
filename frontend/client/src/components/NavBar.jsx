import React from 'react'
import './NavBar.css';

function NavBar() {
  return (
    <div className='app-header--nav'>
        <ul className='nav--navContainer'>
            <li>Home</li>
            <li>Rent</li>
            <li>Sales</li>
            <li>Contact</li>
        </ul>
    </div>
  )
}

export default NavBar