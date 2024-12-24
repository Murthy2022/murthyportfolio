import React from 'react'

const Home = ( { PersonDetails } ) => {


  return (
    <div className='info-class'>
      <h2>I am {PersonDetails.LastName}</h2>
      <h3>{PersonDetails.Role}</h3>
    </div>
  )
}

export default Home
