import React, { useContext, useState } from 'react'

import { DataContext } from './Contexts.js';


const Overview = ( { PersonDetails } ) => {

  const { data , setData , auth } = useContext(DataContext);

  console.log('Hi')
  console.log(data.FirstName)

  return ( 
    auth ?
      <div>
        <h1 className='overview-heading'>Details at a Glance</h1>
        <div className='info-class'>
        <h2>Your Name <span className='italic-text'>{data.FirstName} {data.MiddleName} {data.LastName}</span></h2>
        <h2>You are living in <span className='italic-text'>{data.Location}</span></h2>
        <h2>Your Role is <span className='italic-text'>{data.Role}</span></h2>
        <h2>Your overall experience <span className='italic-text'>{data.Experience}</span></h2>
        <h2>Your Releavent experience <span className='italic-text'>{data.RelevantExperience}</span></h2>
        <h2>Your Father Name <span className='italic-text'>{data.FatherName}</span></h2>
        <h2>Your Mother Name <span className='italic-text'>{data.MotherName}</span></h2>
        <h2>Your Mobile number <span className='italic-text'>{data.MobileNumber}</span></h2>
        </div>
      </div>
      :

      <div>
        <p>Plese login to view this page</p>
        <a href="https://murthyproject.vercel.app/">Click here</a>
      </div>

  );
};
 
export default Overview
