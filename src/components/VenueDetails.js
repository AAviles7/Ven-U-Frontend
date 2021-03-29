import React from 'react'
import { Item, Image, Divider } from 'semantic-ui-react'

const VenueDetails = ({venue}) => {

  return(

    <Item.Group>
      <Divider hidden />
    <Item>
      <Item.Image size='tiny' src='/images/wireframe/image.png' />
      
      <Item.Content>
        <Item.Header>{venue.name}</Item.Header>
        <Item.Meta>
          <span className='address'> {venue.address} </span><br></br>
          <span className='price'>$1200</span>
        </Item.Meta>
        <Item.Description>hello hello hello hello</Item.Description>
      </Item.Content>

    </Item>
    </Item.Group>
  
  )

}

export default VenueDetails;