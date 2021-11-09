import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";


class App extends React.Component {

    //-> Constructor is equal of the definition of state

    // constructor(props) {
    //     super(props);
    //     console.log(this.state)
    //
    //     //THIS IS THE ONLY TIME we do direct assignment
    //     this.state = {lat: null, errorMessage: ''}
    // }
    // Lifecycle methods
    // componentDidMount() {
    //     console.log("My component was rendered to the screen")
    // }
    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     console.log('My component did update')
    // }
    //

    state = {lat: null, errorMessage: ''}

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),
            positionError => this.setState({errorMessage: positionError.message})
        )
    }

    //Render just the jsk!!!
    render() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage} </div>
        }
        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat}/>
        }
        return <Spinner message="Please allow the location"/>

    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)



