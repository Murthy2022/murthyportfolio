import React from 'react'
import GadgetComponent from './GadgetComponent'
import { LaptopData } from '../Data/LaptopData'

export default function Laptops() {
  return (
    <div>
      <p>In LapTop section</p>
      <GadgetComponent data={LaptopData} category="Laptops"/>
    </div>
  )
}
