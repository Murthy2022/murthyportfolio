import React from 'react'
import { Outlet } from 'react-router-dom'
import CartNavigation from './CartNavigation'

export default function Projects() {
  return (
    <div>
      <h1>In Projects</h1>
      <nav>
      <CartNavigation />
      <Outlet />
      </nav>
    </div>
  )
}