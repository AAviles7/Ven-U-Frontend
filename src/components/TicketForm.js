import React from 'react'
import EventCard from '../components/EventCard'
import EventDetails from '../components/EventDetails'
import Venue from '../components/Venue'
import { Header, Divider, Button, Item} from 'semantic-ui-react'

const TicketForm = ({ event, venues}) => {
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