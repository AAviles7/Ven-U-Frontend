import React from 'react'
import EventCard from '../components/EventCard'
import EventDetails from '../components/EventDetails'
import SearchFilter from '../components/SearchFilter'
import Venue from '../components/Venue'
import logo from '../img/logo.png'

import { Grid, Card, Container, Transition, List, Header, Image, Button } from 'semantic-ui-react'

const eventsData = 'http://localhost:4000/events/'
const venueData = 'http://localhost:4000/venues/'


class EventContainer extends React.Component {
  
  state = {
      events: [],
      selectedEvent: '',
      selected: false,
      venues: [],
      sortBy: '',
      filterVenue: '',
      search: ''
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
    this.setState({
        selectedEvent: event,
        selected: true
    })
  }

  deselectEvent = () => {
    this.setState({
        selectedEvent: '',
        selected: false
    })
  }

  sortBy = (sort) => {
      console.log(sort)
      this.setState({ sortBy: sort })
  }

  sortEvents = () => {
      switch(this.state.sortBy){
        case 'LtoH':
            return this.state.events.sort((a,b)=> a.price-b.price)
        case 'HtoL':
            return this.state.events.sort((a,b)=> b.price-a.price)
        case 'AtoZ':
            return this.state.events.sort((a,b)=> a.name.localeCompare(b.name))
        case 'ZtoA':
            return this.state.events.sort((a,b)=> b.name.localeCompare(a.name))
        case 'age':
            return this.state.events.sort((a,b)=> b.age_restriction-a.age_restriction)
        default:
            return this.state.events.sort((a,b)=> a.id-b.id)
      }
  }

  setSearch = (e) => {
    
  }

  statusSort = (list) => {
    let stat = ['On Schedule', 'Delayed', 'Sold-Out', 'Cancelled', 'Unavailble']
    let ans = []
    for(let x=0; x<stat.length; x++){
        for(let y=0; y<list.length; y++){
            if(list[y].status === stat[x]){
                ans.push(list[y])
            }
        }
    }
    return ans
  }

  selectVenue = (filterVenue) => {
      this.setState({ filterVenue })
  }

  render() {
    let temp = this.sortEvents()
    let eventList = this.state.filterVenue==='' ? this.statusSort(temp) : this.statusSort(temp).filter(event => event.venue_id === this.state.filterVenue)
    return(
        <Container>

            <Transition visible={!this.state.selected} animation='scale' duration={500}>
                <Grid celled id='eventPage'>

                    <Grid.Row >
                        <Grid.Column width={12} >
                            <Image src={logo}/>
                        </Grid.Column>
                        <Grid.Column width={4} >
                            <SearchFilter sortBy={this.sortBy}/>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row id='eventGrid'>
                        <Grid.Column width={3} id='venueContainer'>
                            <Header as='h3' textAlign='center'>Venues</Header>
                            <List divided relaxed size='large'>
                                {this.state.venues.map(venue => <Venue venue={venue} selectVenue={this.selectVenue}/>)}
                            </List>
                        </Grid.Column>
                        <Grid.Column width={13} id='eventContainer'>
                            <Header as='h1' textAlign='center'>Events</Header>
                            <Grid celled='internally'>
                                <Card.Group itemsPerRow={3}>
                                    {eventList.map( (event) => <EventCard selectEvent={this.selectEvent} event={event}/>)}
                                </Card.Group>
                            </Grid>
                        </Grid.Column>
                    </Grid.Row>

                </Grid>
            </Transition>

            <Transition visible={this.state.selected} animation='scale' duration={500} unmountOnHide={true}>
                <EventDetails event={this.state.selectedEvent} deselectEvent={this.deselectEvent}/>
            </Transition>

        </Container>
    )
  }
  
}

export default EventContainer;