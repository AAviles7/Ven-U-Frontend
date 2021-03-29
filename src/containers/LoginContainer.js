import React from "react";
import LoginForm from "../components/LoginForm";
import NewAccForm from "../components/NewAccForm";

class LoginContainer extends React.Component {

    state = {
        user: null
    }

    updatedUser = (user) => {
        this.setState({ user })
    }

    
    render () {
        return (
               <LoginForm/> 
        )
    }

}

export default LoginContainer; 

