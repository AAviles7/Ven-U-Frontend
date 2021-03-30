import React from 'react'
import { Container, Image } from 'semantic-ui-react'

const EventDetails = ({ event }) => {
    return(
        <Container>
           <Image src={event.image} wrapped ui={false} />
        </Container>
    )
}

export default EventDetails