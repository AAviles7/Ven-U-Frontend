import React from 'react'
import { Item, Image } from 'semantic-ui-react'

const VenueDetails = ({venue}) => {

  return(

    <Item.Group>
    <Item>
      <Item.Image size='tiny' src='/images/wireframe/image.png' />

      <Item.Content>
        <Item.Header>{venue.name}</Item.Header>
        <Item.Meta>
          <span className='address'> {venue.address} </span><br></br>
          <span className='stay'>1 Month</span>
        </Item.Meta>
        <Item.Description>hello hello hello hello</Item.Description>
      </Item.Content>
    </Item>

    {/* <Item>
      <Item.Image size='tiny' src='/images/wireframe/image.png' />
      
      <Item.Content>
      <Item.Header>Buck's Homebrew Stayaway</Item.Header>
      <Item.Meta content='$1000 2 Weeks' />
      <Item.Description>{paragraph}</Item.Description>
      </Item.Content>
      </Item>
      
      <Item>
      <Item.Image size='tiny' src='/images/wireframe/image.png' />
      <Item.Content header='Arrowhead Valley Camp' meta='$1200 1 Month' />
    </Item> */}
  </Item.Group>
  
  )

}

export default VenueDetails;