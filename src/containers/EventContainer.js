import React from 'react'
import EventCard from '../components/EventCard'
import EventDetails from '../components/EventDetails'
import Venue from '../components/Veneu'
import { Grid, Image } from 'semantic-ui-react'

const eventsData = 'http://localhost:4000/events/'
const venueData = 'http://localhost:4000/venues/'


class EventContainer extends React.Component {
  
  state = {
      events: [],
      selectedEvent: '',
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

  selectEvent = (event) => {
    this.setState({selectedEvent: event})
  }
  
  render() {
    return(
    //   <div>
    //     <Venue venues={this.state.venues} />

    //     {this.state.selectedEvent=== '' ? this.state.events.map( event => <EventCard selectedEvent={this.selectedEvent} event={event} />) : null}

    //     {this.state.selectedEvent=== '' ? null : <EventDetails event={this.state.selectedEvent} />}
    //   </div>
        <Grid celled>
            
        </Grid>
    )
  }
  
}

export default EventContainer;