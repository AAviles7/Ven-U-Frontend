import React from 'react'
import { List, Image, Item, Button, Icon } from 'semantic-ui-react'

const Event = ({event}) => {
  return(
    <List.Item >
      <Image avatar src={event.image} size='small'/>
      <List.Content>
        <List.Header as='a'>{event.name}</List.Header>
        <List.Description as=''>{event.description}</List.Description>
        <List.Item as='p'>${event.price}</List.Item>
        <List.Description as='p'>{event.status}</List.Description>
      </List.Content>
      <Button fluid animated='vertical' onClick={() => console.log(event)}>
                    <Button.Content visible>Event Details</Button.Content>
                    <Button.Content hidden>
                        <Icon name='arrow right' />
                    </Button.Content>
                </Button>
    </List.Item>
  ) 
}

export default Event