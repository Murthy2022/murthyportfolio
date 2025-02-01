import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaCartArrowDown } from "react-icons/fa";

export default function CartNavigation() {
  return (
    <div className='nav-links'>
      <NavLink to='mobiles'>Mobiles</NavLink>
      <NavLink to='laptops'>Laptops</NavLink>
      <NavLink to='tvs'>TV</NavLink>
      <NavLink to='cart'>&#x1F6D2;</NavLink>
    </div>
  )
}
