import React from 'react'
import GadgetComponent from './GadgetComponent'
import { MobileData } from '../Data/MobileData'


export default function Mobiles() {
  console.log("In Mobile")
  return (
    <div>
      <p>In Mobile Section</p>
      <GadgetComponent Data={MobileData} />
    </div>
  )
}