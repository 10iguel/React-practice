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
        return <Spinner/>

    }
}


ReactDOM.render(
    <App/>,
    document.getElementById('root')
)


// First practices with react

//
// const App = () => {
//     return (
//         <div className="ui container comments">
//             <ApprovalCard>
//                 <div>
//                     <h4>Warning!</h4>
//                     Are you sure you want to do this
//                 </div>
//             </ApprovalCard>
//
//             <ApprovalCard>
//                 <CommentDetail children="Miguel" time="Today at 4:15pm" comment="This is bad"
//                                avatar={faker.image.avatar()}/>
//             </ApprovalCard>
//             <ApprovalCard>
//                 <CommentDetail children="Man" time="Today at 4:15" comment="This is not good"
//                                avatar={faker.image.avatar()}/>
//             </ApprovalCard>
//             <ApprovalCard>
//                 <CommentDetail children="Hymn" time="Today at 4:05" comment="Holly Jolly"
//                                avatar={faker.image.avatar()}/>
//             </ApprovalCard>
//         </div>
//
//
//     )
// }

