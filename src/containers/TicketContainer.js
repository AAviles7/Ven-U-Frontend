import React from "react";
import Event from "../components/Event";
import TicketForm from "../components/TicketForm";
import {
  Grid,
  Card,
  Container,
  Transition,
  Item,
  Header,
  List,
} from "semantic-ui-react";

const eventsData = "http://localhost:4000/events/";
const venueData = "http://localhost:4000/venues/";

class TicketContainer extends React.Component {
  state = {
    event: '',
    events: [],
    selectedEvent: "",
    venues: [],
  };

  componentDidMount() {
    const options = {
      headers: {
        Authorization: `Bearer ${this.props.user.jwt}`,
      },
    };
    fetch(eventsData, options)
      .then((res) => res.json())
      .then((events) => this.setState({ events }));

    fetch(venueData, options)
      .then((res) => res.json())
      .then((venues) => this.setState({ venues }));
  }

  selectEvent = (event) => {
    this.setState({ selectedEvent: event });
  };

  render() {
    return (
      <Container>
        <Item.Group>
          <Grid celled>
            <Grid.Row>
              <Grid.Column width={12} id="ticketForm">
                  <TicketForm event={this.props.location.customNameData} />
              </Grid.Column>
              <Grid.Column width={4} id="eventList">
                <Header as="h3" textAlign="center">
                  Events
                </Header>
                <List divided relaxed size="large">
                  {this.state.events.map((event) => ( <Event event={event} /> ))}
                </List>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Item.Group>
      </Container>
    );
  }
}

export default TicketContainer;
