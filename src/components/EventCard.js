import React from 'react'
import { Card, Icon, Image, Button, Divider, Reveal } from 'semantic-ui-react'

const EventCard = ({ eventt, selectEvent, venueImage }) => {
    let thisVenue = venueImage(eventt)
    return(
        <Card>
            <Reveal animated='move'>
                <Reveal.Content visible>
                    <Image src={eventt.image}/>
                </Reveal.Content>
                <Reveal.Content hidden>
                    <Image src={thisVenue.image}/>
                </Reveal.Content>
            </Reveal>

            <Card.Content>
                <Card.Header>{eventt.name}</Card.Header>
                <Card.Meta>
                    <span className='presented_by'>{eventt.presented_by}</span>
                </Card.Meta>
                <Card.Description>
                    {eventt.summary}
                </Card.Description>
                <Divider />
                <Button animated='vertical' onClick={() => selectEvent(eventt)}>
                    <Button.Content visible>Event Details</Button.Content>
                    <Button.Content hidden>
                        <Icon name='arrow right' />
                    </Button.Content>
                </Button>
                <Divider hidden />
                <Button animated>
                    <Button.Content visible>Purchase Tickets</Button.Content>
                    <Button.Content hidden>
                        <Icon name='ticket' />
                    </Button.Content>
                </Button>
            </Card.Content>
            <Card.Content extra>
                <b>
                    <Icon name='dollar sign'/>
                    {eventt.price}
                </b><br></br>
                <b>
                    {'Minimum age to enter: '+eventt.age_restriction}
                </b><br></br>
                <b>
                    {'Status: '+eventt.status}
                </b>
            </Card.Content>
        </Card>
    )
}

export default EventCard