import React from "react";

// remember that the object destructuring of video below just allows us to access the video directly on variable
// 'video' rather than having to use 'props.video'... this is especially helpful if a value is used multiple
// times in a component as it can help you avoid lots of extra typing
const VideoDetail = ({ video }) => {
    // when our component first mounts, we will likely not have the results back from our initial axios
    // call to YouTube yet, meaning that the state of selectedVideo in App.js will be null...
    // that's why we include code like this block below to handle a situation when no video exists yet.
    // as soon as the inital axios results come back, App.js's state is updated with a selectedVideo
    // object and a list of video objects; since this component uses the App.js state of 'selectedVideo',
    // this component will be automagically rerendered as soon as this state change is complete, thus 
    // reloading and showing us the video details info when data is present... if you forgot why we need
    // the next three lines, comment them out and see what happens!
    if (!video) {
        return <p>Loading spinner goes here...</p>
    }

    const videoId = video.id.videoId;
    const videoUrl = `https://www.youtube.com/embed/${videoId}?rel=0`;

    return (
        <>
            {/* The syntax wrapped around the JSX inside the return is what React calls a fragment; it
            allows us to wrap multiple adjacent JSX elements so that the component still only returns
            a single block of HTML, but it also does so without actually adding an extra div to the
            HTML just for the sake of placating React... in some cases, using a div instead of a 
            fragment might be preferable if you truly did want an extra div wrapper for structural/
            styling purposes */}
            <div className="embed-responsive embed-responsive-16by9">
                {/* note the use of 'className' in lieu of 'class' to indicate CSS classes inside
                JSX; this is necessary since 'class' is a reserved keyword in JavaScript */}
                <iframe className="embed-responsive-item" src={videoUrl} allowFullScreen></iframe>
            </div>
            {/* JSX curly braces (see below) are how we inject JavaScript values, call built-in methods or
            our own custom methods, map through arrays, evaluate conditionals via ternaries/short-circuit 
            operators, etc */}
            <h2>{video.snippet.title}</h2>
            <p>{video.snippet.description}</p>
        </>
    )
}

export default VideoDetail;