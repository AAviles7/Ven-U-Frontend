import React from 'react'
import EventCard from '../components/EventCard'
import EventDetails from '../components/EventDetails'
import SearchFilter from '../components/SearchFilter'
import Venue from '../components/Venue'
import { Grid, Card, Container, Transition } from 'semantic-ui-react'

const eventsData = 'http://localhost:4000/events/'
const venueData = 'http://localhost:4000/venues/'


class EventContainer extends React.Component {
  
  state = {
      events: [],
      selectedEvent: '',
      selected: false,
      venues: []
  }

  componentDidMount(){
    fetch(eventsData)
        .then(res => res.json())
        .then(events => this.setState({events}))

    fetch(venueData)
        .then(res => res.json())
        .then((venues) => this.setState({venues}))
  }

  getVenueImage = (show) => {
      let temp = this.state.venues.filter( venue => venue.id===show.venue_id )
      return temp
  }

  selectEvent = (event) => {
    this.setState({
        selectedEvent: event,
        selected: true
    })
  }
  
  render() {
    return(
        <Container>

            <Transition visible={!this.state.selected} animation='scale' duration={500}>
                <Grid celled id='eventPage'>

                    <Grid.Row >
                        <Grid.Column width={16} >
                            <SearchFilter />
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row id='eventGrid'>
                        <Grid.Column width={4} id='venueContainer'>
                            <Venue venues={this.state.venues} />
                        </Grid.Column>
                        <Grid.Column width={12} id='eventContainer'>
                            <Grid celled='internally'>
                                <Card.Group itemsPerRow={3}>
                                    {this.state.events.map( (eventt) => <EventCard selectEvent={this.selectEvent} eventt={eventt} venueImage={this.getVenueImage}/>)}
                                </Card.Group>
                            </Grid>
                        </Grid.Column>
                    </Grid.Row>

                </Grid>
            </Transition>

            <Transition visible={this.state.selected} animation='scale' duration={500}>
                <EventDetails event={this.state.selectedEvent}/>
            </Transition>

        </Container>
    )
  }
  
}

export default EventContainer;