import React from "react";
import EventCard from "../components/EventCard";
import EventDetails from "../components/EventDetails";
import SearchFilter from "../components/SearchFilter";
import Venue from "../components/Veneu";
import { Grid, Card } from "semantic-ui-react";

const eventsData = "http://localhost:4000/events/";
const venueData = "http://localhost:4000/venues/";

class EventContainer extends React.Component {
  state = {
    events: [],
    selectedEvent: "",
    venues: [],
  };

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
    this.setState({ selectedEvent: event });
  };

  render() {
    return (
      <Grid celled id="eventPage">
        <Grid.Row>
          <Grid.Column width={16}>
            <SearchFilter />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row id="eventGrid">
          <Grid.Column width={4} id="venueContainer">
            <Venue venues={this.state.venues} />
          </Grid.Column>
          <Grid.Column width={12} id="eventContainer">
            <Grid celled="internally">
              <Card.Group itemsPerRow={3}>
                {this.state.selectedEvent === ""
                  ? this.state.events.map((event) => (
                      <EventCard
                        selectedEvent={this.selectedEvent}
                        event={event}
                      />
                    ))
                  : null}
              </Card.Group>
            </Grid>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default EventContainer;
