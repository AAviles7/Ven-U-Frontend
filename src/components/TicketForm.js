import React from 'react'
import EventCard from '../components/EventCard'
import EventDetails from '../components/EventDetails'
import Venue from '../components/Venue'
import { Grid, Container, Image, Header, Divider, Button, Icon, Item, List } from 'semantic-ui-react'

const TicketForm = ({ event }) => {
 return(
  <Item.Group>
    <Item.Image size='medium' src={event.image}/>
    <Item>
      <Item.Content>
        <Header as='h1' icon textAlign='left'>
          <Header.Content>{event.name}</Header.Content>
          <Header sub>{'Presented by: '+event.presented_by}</Header>
          <Header sub>{'Date start: '+event.start}</Header>
          <Header sub>{'Date end: '+event.end}</Header>
          <Header sub>{'Age Restriction: '+event.age_restriction}</Header>
          <Header sub>{'Price: $'+event.price}</Header>
          <Header sub>{'Status: '+event.status}</Header>
        </Header>
        
      <Item.Description>{event.description}</Item.Description>
      <Divider hidden />
      <Button positive floated='left'
            type="button"
            onClick={(e) => {
              console.log(e)
              e.preventDefault();
              window.location.href='https://www.reddit.com/r/puppies/';
          }}
          > Buy Ticket
        </Button>
        <Button negative floated='left'
            type="button"
            onClick={(e) => {
              console.log(e)
              e.preventDefault();
              window.location.href='https://www.reddit.com/r/puppies/';
          }}
          > Sell Ticket
        </Button>
      </Item.Content>
    </Item>            
  <Divider />
</Item.Group>
 )
}

export default TicketForm;

{/* <Button.Group widths='2'>
                <Button animated='vertical' onClick={() => deselectEvent()}>
                <Button.Content visible >Back</Button.Content>
                <Button.Content hidden>
                <Icon name='arrow left' />
                </Button.Content>
                </Button>
                <Button animated='vertical'>
                <Button.Content visible >Tickets</Button.Content>
                <Button.Content hidden>
                <Icon name='ticket' />
                </Button.Content>
                </Button>
                <Divider />
               </Button.Group> */}
               