import React from 'react'

const Venue = ({venues}) => {
  return(
    <div class='venues'>
      <div class='header'>
        <h1>Venues</h1>
      </div>
      <div>
          {venues.map(venue => <p>{'Address: '+venue.address}</p>)}
      </div>
    </div>
  ) 
}

export default Venue;