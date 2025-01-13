import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import graduationImg from '../Assets/Images/graduationImg.png'
import { googleLogout } from '@react-oauth/google'
import { DataContext } from './Contexts'

const Navigation = () => {

  const retHome = useNavigate()
  const {auth , setAuth} = useContext(DataContext)
  const {btnText , setBtnTxt} = useContext(DataContext)
  const redirect_LoginPage = useNavigate()
  

  const handleLogout = () => {

    if (btnText == 'Logout') {
      console.log("Logging out")
    googleLogout()
    setAuth(false)
    retHome("/")
    setBtnTxt("Login")   
    }
    else{
      redirect_LoginPage('/')
    }
    
  }

  return (
    <div>

      <nav className='nav-header'>
      <img className="gradImg" src={graduationImg} alt="Unable to fetch" />
      <div className='nav-links'>
        <NavLink to='/onboard'>Onboard</NavLink>
        <NavLink to='/overview'>Overview</NavLink>
        <NavLink to='/calculator'>Calculator</NavLink>
        <NavLink to='/projects'>Projects</NavLink>
        <NavLink to='/memories'>Memories</NavLink>
        <NavLink to='/weather'>Weather</NavLink>
        <button className='logout-btn' onClick={handleLogout}>{btnText}</button>
        </div>
      </nav>
    </div>
  )
}

export default Navigation
