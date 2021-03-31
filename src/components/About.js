import logo from "../img/logo.png";

const About = () => {
    return (
        <div className="text-center">
            <h1>Welcome to Ven-U!</h1>
            <br></br>
            <p>
                This is a Venue web app just for you! As an user, you are able to choose your favorite venue to host your event. You can also purchase a ticket to attend your favorite artist's event. Hope you have a great journey using our app and remember to come back to visit us again! :)
            </p>
            <br></br>
            <img src={logo}></img>
        </div>
    )
}

        
export default About; 
