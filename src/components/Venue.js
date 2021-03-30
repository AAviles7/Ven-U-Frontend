import React from 'react'
import { List, Image } from 'semantic-ui-react'

const Venue = ({venue}) => {
  return(
    <List.Item>
      <Image avatar src={venue.image} size='small'/>
      <List.Content>
        <List.Header as='a'>{venue.name}</List.Header>
        <List.Description as='p'>{venue.address}</List.Description>
      </List.Content>
    </List.Item>
  ) 
}

export default Venue