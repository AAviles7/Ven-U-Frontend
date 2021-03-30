import React from 'react'
import EventCard from '../components/EventCard'
import EventDetails from '../components/EventDetails'
import SearchFilter from '../components/SearchFilter'
import Venue from '../components/Venue'
import logo from '../img/logo.png'

import { Grid, Card, Container, Transition, List, Header, Image } from 'semantic-ui-react'

const eventsData = 'http://localhost:4000/events/'
const venueData = 'http://localhost:4000/venues/'

class EventContainer extends React.Component {
  state = {
      events: [],
      selectedEvent: '',
      selected: false,
      venues: [],
      sort: ''
  }

  componentDidMount() {
    fetch(eventsData)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(res.status);
      })
      .then((events) => this.setState({ events }));

    fetch(venueData)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(res.status);
      })
      .then((venues) => this.setState({ venues }));
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
      this.setState({ sort })
  }

  render() {
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
                                {this.state.venues.map(venue => <Venue venue={venue}/>)}
                            </List>
                        </Grid.Column>
                        <Grid.Column width={13} id='eventContainer'>
                            <Header as='h1' textAlign='center'>Events</Header>
                            <Grid celled='internally'>
                                <Card.Group itemsPerRow={3}>
                                    {this.state.events.map( (event) => <EventCard selectEvent={this.selectEvent} event={event}/>)}
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
