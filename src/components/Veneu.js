import React from 'react'

const Venue = ({venues}) => {
  return(
    <div class='venues'>
      <div class='header'>
        <h1 className="text-center" >Venues</h1><br></br>
      </div>
      <div>
         <ul>
          {venues.map(venue => <p>{'Name: '+venue.name}</p>)}
         </ul>
          
      </div>
    </div>
  ) 
}

export default Venue;