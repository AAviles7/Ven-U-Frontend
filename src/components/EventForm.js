import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import { Divider, Header } from "semantic-ui-react";

let USER_URL = "http://localhost:4000/users/";
let VENUE_URL = "http://localhost:4000/venues/";
let EVENTS_URL = "http://localhost:4000/events/";


class EventForm extends Component {
  state = {
    artists: [],
    venues: [],
    name: "",
    start: "",
    end: "",
    summary: "",
    description: "",
    price: "",
    age_restriction: "",
    presented_by: "",
    image: "",
    artist: "",
    venue: "",
  };

  componentDidMount = async () => {
    const options = {
      headers: {
        Authorization: `Bearer ${this.props.user.jwt}`,
      },
    };
    fetch(VENUE_URL, options)
        .then(res => res.json())
        .then((venues) => this.setState({venues}) )
    
    fetch(USER_URL, options)
        .then(res => res.json())
        .then((users) => {
          let artists = users.filter((user) => user.artist === true);
          this.setState({ artists });
        } )
  };

  resetStates = () => {
    this.setState({
      name: "",
      start: "",
      end: "",
      summary: "",
      description: "",
      price: "",
      age_restriction: "",
      presented_by: "",
      image: "",
      artist: "",
      venue: "",
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // if (Object.values(this.state).includes("")) {
    //   alert("Please Fill out the ENTIRE form.");
    // } else {
    let newVenue = {
      name: this.state.name,
      start: this.state.start,
      end: this.state.end,
      summary: this.state.summary,
      descripttion: this.state.description,
      price: this.state.price,
      age_restriction: this.state.age_restriction,
      presented_by: this.state.presented_by,
      image: this.state.image,
      user_id:this.state.artist.id,
      venue_id: this.props.venue.id
    }
    let reqObj = {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(newVenue),
    };
    
    fetch(EVENTS_URL, reqObj)
      .then((res) => res.json())
      .then(() => {
        this.props.setSelected();
        this.props.selectVenue('')
    });
    event.target.reset()
    // }
  };
  
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
      <Divider hidden />
        <Header> {this.props.venue.name} </Header>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter name"
              onChange={(event) => this.setState({ name: event.target.value })}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPresentedBy">
            <Form.Label>Presented By</Form.Label>
            <Form.Control
              type="presented_by"
              placeholder="Enter presented by"
              onChange={(event) =>
                this.setState({ presented_by: event.target.value })
              }
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridStartTime">
            <Form.Label>Start Time</Form.Label>
            <Form.Control
              type="datetime-local"
              placeholder="Enter Start Time"
              onChange={(event) => this.setState({ start: event.target.value })}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEndTime">
            <Form.Label>End Time</Form.Label>
            <Form.Control
              type="datetime-local"
              placeholder="Enter End Time"
              onChange={(event) => this.setState({ end: event.target.value })}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridSummary">
            <Form.Label>Summary</Form.Label>
            <Form.Control
              placeholder="Please enter shortened summary about the event"
              onChange={(event) =>
                this.setState({ summary: event.target.value })
              }
              />
          </Form.Group>

          <Form.Group controlId="formGridPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              step="0.01"
              placeholder="Enter price"
              onChange={(event) => this.setState({ price: event.target.value })}
            />
          </Form.Group>
        </Form.Row>
        <Form.Group controlId="formGridDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="description"
            placeholder="Please enter detailed description about the event"
            onChange={(event) =>
              this.setState({ description: event.target.value })
            }
          />
        </Form.Group>

        <Form.Row>
          <Form.Group controlId="formGridAgeRestriction">
            <Form.Label>Age Restriction</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter minimum age"
              onChange={(event) =>
                this.setState({ age_restriction: event.target.value })
              }
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridImage">
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              type="url"
              placeholder="Enter image URL for the event"
              onChange={(event) => this.setState({ image: event.target.value })}
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridArtist">
            <Form.Label>Artist</Form.Label>
            <Form.Control
              as="select"
              defaultValue="Choose..."
              onChange={(event) =>
                this.setState({ artist: event.target.value })
              }
            >
              <option value="">Select Artist...</option>
              {this.state.artists.map((artist) => (
                <option value={artist.id}>{artist.name}</option>
              ))}
            </Form.Control>
          </Form.Group>

          {/* <Form.Group as={Col} controlId="formGridVenue">
            <Form.Label>Venue</Form.Label>
          </Form.Group> */}
        </Form.Row>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default EventForm;
