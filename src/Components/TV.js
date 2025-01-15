import React from 'react'
import GadgetComponent from './GadgetComponent'
import { TVData } from '../Data/TVData'

export default function TV() {
  return (
    <div>
      <p>In TV Section</p>
      <GadgetComponent Data={TVData}/>
    </div>
  )
}
