import React from 'react'
import './Navbar.css'
import nav_logo from '../../assets/nav-logo.svg'
import navProfile from '../../assets/nav-profile.svg'

const NavBar = () => {
  return (
    <div className='navbar'>
        <img src={nav_logo} alt="" className='nav-logo' />
        <img src={navProfile} alt="" className='nav-profile' />
    </div>
  )
}

export default NavBar