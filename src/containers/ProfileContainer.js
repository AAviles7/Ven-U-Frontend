import React from 'react'
import Profile from '../components/Profile'
import Event from '../components/Event'

import { Grid, Container, Item, Header, List } from 'semantic-ui-react'


const eventsData = 'http://localhost:4000/events/'
const venueData = 'http://localhost:4000/venues/'
const userData = 'http://localhost:4000/users/'

class ProfileContainer extends React.Component {

  state = {
   events: [],
   selectEvents: '',
   users: [],
 
  }

 componentDidMount() {
  fetch(eventsData)
    .then(res => res.json())
    .then(events => this.setState({events}))

  fetch(venueData)
    .then(res => res.json())
    .then((venues) => this.setState({venues}))
  fetch(userData)
    .then(res => res.json())
    .then((users) => this.setState({users}))
    
 }

  render() {
    let user = this.state.users.filter(user => user.id === 1 )
    return(
      <Container>
      <Item.Group>
        <Grid celled>
          <Grid.Row >
            <Grid.Column width={12} id="">
              {user.map(u => <Profile user={u}/>)}
            </Grid.Column>
            <Grid.Column width={4} id="" >
              <Header as='h3' textAlign='center'>Events</Header>
            <List divided relaxed size='large'>
              {this.state.events.map(event => <Event event={event}/>)}
            </List>
            </Grid.Column> 
          </Grid.Row>
        </Grid>
      </Item.Group>
   </Container>
   )
  }

}

export default ProfileContainer;