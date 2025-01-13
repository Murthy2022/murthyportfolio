import React from 'react'
import { NavLink } from 'react-router-dom'

export default function CartNavigation() {
  return (
    <div className='nav-links'>
      <NavLink to='mobiles'>Mobiles</NavLink>
      <NavLink to='laptops'>Laptops</NavLink>
      <NavLink to='tvs'>TV</NavLink>
    </div>
  )
}
