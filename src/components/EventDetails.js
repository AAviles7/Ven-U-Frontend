import React from 'react'
import { Container, Image, Header, Divider, Button, Icon } from 'semantic-ui-react'

const EventDetails = ({ event, deselectEvent }) => {
    return(
        <Container>
            <Button.Group widths='2'>
                <Button animated='vertical' onClick={() => deselectEvent()}>
                    <Button.Content visible >Back</Button.Content>
                    <Button.Content hidden>
                        <Icon name='arrow left' />
                    </Button.Content>
                </Button>
                <Button animated='vertical'>
                    <Button.Content visible >Purchase Tickets</Button.Content>
                        <Button.Content hidden>
                            <Icon name='ticket' />
                        </Button.Content>
                </Button>
            </Button.Group>
            <Divider />
            <Image src={event.image}/>
            <Header as='h1' icon textAlign='center'>
            <Divider />
                <Header.Content>{event.name}</Header.Content>
                <Header sub>{'Presented by: '+event.presented_by}</Header>
                <Header sub>{'Date start: '+event.start+' => to date end: '+event.end}</Header>
                <Header sub>{'Price: $'+event.price}</Header>
                <Header sub>{'Age Restriction: '+event.age_restriction}</Header>
                <Header sub>{'Status: '+event.status}</Header>
                <Divider />
            </Header>
            <p>
                {event.description}
            </p>            
        </Container>
    )
}

export default EventDetails