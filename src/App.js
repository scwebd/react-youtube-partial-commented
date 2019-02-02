// importing React, then  using object destructuring to give us access to React.Component as variable Component
import React, { Component } from "react";
// specifying the particular components we will use from reactstrap (the Bootstrap grid functionality)
import { Container, Row, Col } from "reactstrap";
// importing our API file (which typically contains methods that interact with either external APIs,
// our own back-end routes to CRUD data, or both)
import API from "./utils/API";

// importing the components we created for SearchBar, VideoDetail, and Video List/VideoListItem;
// since these components are imported here, we can create instances of them nested within this component
import SearchBar from "./components/SearchBar";
import VideoDetail from "./components/VideoDetail";
import { VideoList, VideoListItem } from "./components/VideoList";


// creating an ES6 class called 'App' which is built on top of the React.Component functionality...
// extending from React.Component gives us access to React magic like state, automagic rerendering 
// of components based on state change, component lifecycle events like componentDidMount and render, etc.
class App extends Component {
    // this is where we set initial state values; remember that you store values in state so that,
    // when state is changed using this.setState(), the component(s) using that state automatically rerender
    state = {
        videos: [],
        selectedVideo: null
    }

    // we use this event to trigger things like initial API calls to populate data on our page on load...
    // componentDidMount is likely the lifecycle event you'll use most besides render, as it's the point
    // in the React lifecycle where we know we have a component (and a DOM) to change; just remember
    // that if you trigger an API/axios call in here like we do below, that call is asynchronous!
    componentDidMount() {
        // calling our reusable searchYouTube method to get our initial videos 
        this.searchYouTube("kittens in buckets");
    }

    // the searchYouTube method takes in a search term and uses it to trigger an axios call to the YouTube
    // API (see the ../utils/API file for more context)... once we get search results back, we're storing
    // the video array as this.state.videos and the first video from that array as this.state.selectedVideo;
    // note that state must ALWAYS be updated by using this.setState(), since when state is changed by
    // this.setState(), React automagically rerenders any components that reference that state value!
    // this means that your browser automatically reflects changes to state with no jQuery/DOM wizardry
    // on our part!
    searchYouTube = term => {
        API.searchVideos(term)
        .then(res => this.setState({ videos: res.data.items, selectedVideo: res.data.items[0] }))
        .catch(err => console.log(err));
    }

    // Inside of a class-based component, we wrap our the JSX/HTML return block inside a render method...
    render() {
        // inside of the return, we specify what this component should contain and how it should be structured
        return (
            <Container>
                {/* This is how we write comments inside JSX; outside of the return (like above) we can write normal comments */}
                <Row>
                    <Col>
                        {/* calling an instance of the SearchBar component we created... remember that, since 
                        components are just functions, we're essentially calling the SearchBar function here! */}
                        <SearchBar />
                    </Col>
                </Row>
                <Row>
                    <Col md="9">
                        {/* here we're returning an instance of our VideoDetail component; note that we're passing in a  
                        prop called 'video', which contains the current state of 'selectedVideo' each time the component
                        is rendered... remember that these props are really just arguments being passed into our function
                        (component), which allows us to pass in dynamic values to our components! */ }
                        <VideoDetail video={this.state.selectedVideo} />
                    </Col>
                    <Col md="3">
                        <VideoList>
                            {/* Later on we'll populate this VideoList component dynamically with our videos from the state object */}
                            {/* PS: since these four components are called in between the opening and closing tags of <VideoList />,
                            these values will be available inside the VideoList component as 'props.children' */}
                            <VideoListItem />
                            <VideoListItem />
                            <VideoListItem />
                            <VideoListItem />
                        </VideoList>
                    </Col>
                </Row>
            </Container>
        );
    }
}

// exporting the entire App component, which will be imported/returned in index.js
export default App;
