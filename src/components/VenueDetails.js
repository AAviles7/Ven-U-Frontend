import React from 'react'
import { Item, Image, Divider } from 'semantic-ui-react'

const VenueDetails = ({venue}) => {

  return(

    <Item.Group>
      <Divider  />
    <Item>
      <Item.Image size='small' src={venue.image} />
      
      <Item.Content>
        <Item.Header>{venue.name}</Item.Header>
        <Item.Meta>
          <span className='address'> {venue.address} </span><br></br>
          <span className='price'> ${venue.price} </span>
        </Item.Meta>
        <Item.Description>{venue.description}</Item.Description>
      </Item.Content>

    </Item>
    </Item.Group>
  
  )

}

export default VenueDetails;