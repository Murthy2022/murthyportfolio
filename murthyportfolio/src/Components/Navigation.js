import React from 'react'
import { NavLink } from 'react-router-dom'
import graduationImg from '../Assets/Images/graduationImg.png'

const Navigation = () => {
  return (
    <div>
      
      <nav className='nav-header'>
      <img className="gradImg" src={graduationImg} alt="Unable to fetch" />
      <div className='nav-links'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='calculator'>Calculator</NavLink>
        <NavLink to='formvalidation'>FormValidation</NavLink>
        <NavLink to='projects'>Projects</NavLink>
        <NavLink to='videos'>Videos</NavLink>
        </div>
      </nav>
    </div>
  )
}

export default Navigation
