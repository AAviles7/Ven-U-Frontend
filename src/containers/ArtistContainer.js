import React from 'react'
import SearchFilter from '../components/SearchFilter'
import VenueDetails from '../components/VenueDetails'
import EventForm from '../components/EventForm'
import { Grid, Item, Transition, Container } from 'semantic-ui-react'


const venueData = 'http://localhost:4000/venues/'
const eventData = 'http://localhost:4000/events/'

class ArtistContainer extends React.Component {

  state = {
    events: [],
    venues: [],
    selectedVenue: "",
    selected: false,
  }

  componentDidMount() {
    const options = {
      headers: {
        Authorization: `Bearer ${this.props.user.jwt}`,
      },
    };
    fetch(venueData, options)
        .then(res => res.json())
        .then((venues) => this.setState({venues}) )
    fetch(eventData, options)
        .then(res => res.json())
        .then((events) => this.setState({events}) )
        
  }

  selectVenue = (venue) => {
    this.setState({selectedVenue: venue})
  }

  setSelected = () => {
    this.setState({selected: !this.state.selected})
  }

  render() {
    return(
      <Container>
        <Transition
        visible={!this.state.selected}
        animation="scale"
        duration={500}
        unmountOnHide={true}
        >
      <Grid celled id='artistPage'>

            <Grid.Row id='artistGrid'>
                <Grid.Column width={16} id='artistContainer'>
                    <Grid celled='internally'>

                        <Item.Group>
                            {this.state.selectedVenue=== '' ? this.state.venues.map((venue) => <VenueDetails setSelected={this.setSelected} selectVenue={this.selectVenue} venue={venue} />) : null}
                        </Item.Group>
                        
                    </Grid>
                </Grid.Column>
            </Grid.Row>

        </Grid>
        </Transition>
        <Transition
        visible={this.state.selected}
        animation="scale"
        duration={500}
        unmountOnHide={true}
        >
          
        <EventForm  user={this.props.user} venue={this.state.selectedVenue} setSelected={this.setSelected} selectVenue={this.selectVenue} />
      </Transition>
      </Container>
    )
  }

}

export default ArtistContainer;
