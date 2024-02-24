import React from 'react'
import '../Style/Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img height={100} src='images/starwars.jpg' alt="" />
        <h1>Planets</h1>
        <img height={100} src="images/stars.png" alt="" />
    </div>
  )
}

export default Navbar