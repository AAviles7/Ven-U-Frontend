import React from 'react'
import EventDetails from '../components/EventDetails'
import EventCard from '../components/EventCard'
import { Grid, Card, Container, Transition, Item } from 'semantic-ui-react'

const eventsData = 'http://localhost:4000/events/'

class TicketContainer extends React.Component {

 state = {
  events: [],
  selectedEvent: '',
 }
 
 componentDidMount() {
  fetch(eventsData)
   .then(res => res.json())
   .then(events => this.setState({events}))
 }

 selectEvent = (event) => {
  this.setState({selectedEvent: event})
}

 render(){
  return(
   <Container>
     <Grid>
      <Grid.Column width={12} id='eventContainer'>
       <Grid celled='internally'>
       <Item.Group>
         {this.state.selectedEvent=== '' ? this.state.events.map((event) => <EventDetails selectedEvent={this.selectedEvent} event={event} />) : null}
       </Item.Group>
       </Grid>
      </Grid.Column>
     </Grid>
   </Container>
  )
 }

}

export default TicketContainer;