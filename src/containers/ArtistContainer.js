import React from 'react'
import SearchFilter from '../components/SearchFilter'
import VenueDetails from '../components/VenueDetails'
import EventForm from '../components/EventForm'
import { Grid, Item } from 'semantic-ui-react'

const venueData = 'http://localhost:4000/venues/'
const eventData = 'http://localhost:4000/events/'

class ArtistContainer extends React.Component {

  state = {
    events: [],
    venues: [],
    selectedVenue: "",
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

//   sortBy = (sort) => {
//     console.log(sort)
//     this.setState({ sortBy: sort })
// }

//   sortEvents = () => {
//     switch(this.state.sortBy){
//       case 'LtoH':
//           return this.state.events.sort((a,b)=> a.price-b.price)
//       case 'HtoL':
//           return this.state.events.sort((a,b)=> b.price-a.price)
//       case 'AtoZ':
//           return this.state.events.sort((a,b)=> a.name.localeCompare(b.name))
//       case 'ZtoA':
//           return this.state.events.sort((a,b)=> b.name.localeCompare(a.name))
//       case 'age':
//           return this.state.events.sort((a,b)=> b.age_restriction-a.age_restriction)
//       default:
//           return this.state.events.sort((a,b)=> a.id-b.id)
//     }
// }

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
