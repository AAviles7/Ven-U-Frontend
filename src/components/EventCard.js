import React from 'react'
import { Card, Icon, Image, Button, Divider } from 'semantic-ui-react'

const EventCard = ({ event, selectEvent }) => {
    return(
        <Card >
            <Image src={event.image} wrapped ui={false}/>
            <Card.Content>
                <Card.Header textAlign='center'>{event.name}</Card.Header>
                <Card.Meta textAlign='center'>
                    <span className='presented_by'>{event.presented_by}</span>
                </Card.Meta>
                <Card.Description textAlign='center'>
                    {event.summary}
                </Card.Description>
                <Divider />

                <Button fluid animated='vertical' onClick={() => selectEvent(event)}>
                    <Button.Content visible>Event Details</Button.Content>
                    <Button.Content hidden>
                        <Icon name='arrow right' />
                    </Button.Content>
                </Button>

                <Divider hidden/>
                
                <Button fluid animated>
                    <Button.Content visible>Purchase Tickets</Button.Content>
                    <Button.Content hidden>
                        <Icon name='ticket' />
                    </Button.Content>
                </Button>

            </Card.Content>
            <Card.Content extra textAlign='center'>
                <b>
                    <Icon name='dollar sign'/>
                    {event.price}
                </b><br></br>
                <b>
                    {'Minimum age to enter: '+event.age_restriction}
                </b><br></br>
                <b>
                    {'Status: '+event.status}
                </b>
            </Card.Content>
        </Card>
    )
}

export default EventCard