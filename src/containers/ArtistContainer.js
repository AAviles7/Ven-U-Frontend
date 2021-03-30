import React from 'react'
import SearchFilter from '../components/SearchFilter'
import VenueDetails from '../components/VenueDetails'
import EventForm from '../components/EventForm'
import { Grid, Item } from 'semantic-ui-react'

const venueData = 'http://localhost:4000/venues/'

class ArtistContainer extends React.Component {

  state = {
    venues: [],
    selectedVenue: "",
  }

  componentDidMount() {
    fetch(venueData)
        .then(res => res.json())
        .then((venues) => this.setState({venues}) )
  }

  selectVenue = (venue) => {
    this.setState({selectedVenue: venue})
  }

  render() {
    return(
      <Grid celled id='artistPage'>

            <Grid.Row >
                <Grid.Column width={16} >
                    <SearchFilter />
                </Grid.Column>
            </Grid.Row>

            <Grid.Row id='artistGrid'>
                <Grid.Column width={12} id='artistContainer'>
                    <Grid celled='internally'>

                        <Item.Group>
                            {this.state.selectedVenue=== '' ? this.state.venues.map((venue) => <VenueDetails selectedVenue={this.selectedVenue} venue={venue} />) : null}
                        </Item.Group>
                        
                    </Grid>
                </Grid.Column>
            </Grid.Row>

        </Grid>
    )
  }

}

export default ArtistContainer;