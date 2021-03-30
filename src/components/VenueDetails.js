import React from 'react'
import { Item, Image, Divider, Button, Icon, Label } from 'semantic-ui-react'

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
      <Item.Extra>
          <Button primary floated='right'>
            Buy Venue
            <Icon name='right chevron' />
          </Button>
          <Label> {venue.availability} </Label>
      </Item.Extra>
      </Item.Content>

    </Item>
    </Item.Group>
  
  )

}

export default VenueDetails;