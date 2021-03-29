import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const EventCard = ({ event }) => {
    return(
        <Card>
            <Image src={event.image} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{event.name}</Card.Header>
                <Card.Meta>
                    <span className='presented_by'>{event.presented_by}</span>
                </Card.Meta>
                <Card.Description>
                    {event.summary}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <a>
                    <Icon name='dollar sign'/>
                    {event.price}
                </a><br></br>
                <a>
                    {'Minimum age to enter: '+event.age_restriction}
                </a><br></br>
                <a>
                    {'Status: '+event.status}
                </a>
            </Card.Content>
        </Card>
    )
}

export default EventCard