import React from 'react'
import { Card, Icon, Image, Button, Divider } from 'semantic-ui-react'

const EventCard = ({ event, selectEvent }) => {
    let colorCheck = () => {
        switch(event.status){
            case 'On Schedule':
                return {color: '#003AFF'}
            case 'Delayed':
                return {color: '#A1B100'}
            case 'Cancelled':
                return {color: '#FF0000'}
            case 'Unavailble':
                return {color: '#A5A5A5'}
            case 'Sold-Out':
                return {color: '#AD00DC'}
        }
    }
    let color = colorCheck()
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
                    <Button.Content visible>Tickets</Button.Content>
                    <Button.Content hidden>
                        <Icon name='ticket' />
                    </Button.Content>
                </Button>

            </Card.Content>
            <Card.Content extra textAlign='center'>
                <b style={{color: '#00DC07'}}>
                    <Icon name='dollar sign'/>
                    {event.price}
                </b><br></br>
                <b>
                    {'Minimum age to enter: '+event.age_restriction}
                </b><br></br>
                <b style={color}>
                    {'Status: '+event.status}
                </b>
            </Card.Content>
        </Card>
    )
}

export default EventCard