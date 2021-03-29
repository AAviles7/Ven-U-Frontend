import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'

let USER_URL = 'http://localhost:4000/users/';

class NewAccForm extends Component {

    state = {
        name: '',
        username: '',
        password: '',
        age: '',
        email: '',
        artist: ''
    }

    resetStates = () => {
        this.setState({
            name: '',
            username: '',
            password: '',
            age: '',
            email: '',
            artist: ''
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        let newAcc = {
            username: this.state.username,
            password_digest: this.state.password,
            name: this.state.name,
            age: this.state.age,
            email: this.state.email,
            bio: '',
            artist: this.state.artist
        }

        let reqObj = {
            headers: {"Content-Type": "application/json"},
            method: "POST",
            body: JSON.stringify(newAcc)
        }

        fetch(USER_URL, reqObj)
            .then(res => res.json())
            .then(() => this.resetStates())

        event.target.reset()
    }


    render(){
        return(
            <Form onSubmit={this.handleSubmit}>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridName" >
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="name" placeholder="Enter a Name" onChange={(event)=>this.setState({name: event.target.value})}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="username" placeholder="Enter a Username" onChange={(event)=>this.setState({username: event.target.value})}/>
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control placeholder="Enter an Email" onChange={(event)=>this.setState({email: event.target.value})}/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control placeholder="Enter a Password" onChange={(event)=>this.setState({password: event.target.value})}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridAge">
                        <Form.Label>Age</Form.Label>
                        <Form.Control placeholder='Enter a Age' onChange={(event)=>this.setState({age: event.target.value})}/>
                    </Form.Group>
                </Form.Row>

                <Form.Group id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Artist" onChange={(event)=>this.setState({artist: event.target.checked})}/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Create Account
                </Button>
            </Form>
        )
    }
}

export default NewAccForm

// onChange={(event)=>this.setState({name: event.target.value})
// onChange={(event)=>this.setState({username: event.target.value})}
// onChange={(event)=>this.setState({password: event.target.value})}
// onChange={(event)=>this.setState({password: event.target.value})}
// onChange={(event)=>this.setState({age: event.target.value})}
// onChange={(event)=>this.setState({email: event.target.value})}
// onChange={(event)=>this.setState({artist: event.target.checked})}