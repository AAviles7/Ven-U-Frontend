import React from 'react'
import EventCard from '../components/EventCard'
import EventDetails from ',,/components/EventDetails'

class EventContainer extends Component {

  

  render() {
    return(
      <div>
        <EventCard />
        <EventDetails />
      </div>
    )
  }
  
}

export default EventContainer;