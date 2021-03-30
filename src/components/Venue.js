import React from 'react'

const Venue = ({venues}) => {
  return(
    <div class='venues'>
      <div class='header'>
        <h1 className='text-center'>Venues</h1>
      </div>
      <div>
          {venues.map(venue => <p>{'Name: '+venue.name}</p>)}
      </div>
    </div>
  ) 
}

export default Venue;