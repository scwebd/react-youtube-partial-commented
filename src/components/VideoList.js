// remember that we always import React in ALL React components; even though this newer JS syntax doesn't
// appear to be utilizing the React functionality/variable at all, React is always being called behind
// the scenes in the form of React.createElement(); this occurs because our newer JS syntax that we see here
// is transpiled by Babel into ES5 JS behind the scenes
import React from "react";

// note how this VideoList component takes in an argument called 'props'... reminder that props always
// takes the form of an object that contains key/value pairs for all props/arguments passed in from
// the parent component when this component is called.
export const VideoList = props => {
    return (
        <ul>
            {/* props.children is the one prop we don't get to name in the parent component... reminder
            that props.children is whatever content is passed in between the opening and closing tags of
            a component; see App.js lines 73-78 for an example! */}
            {props.children}
        </ul>
    )    
}

// each of these consts is a 'named' export.. if we wanted to import this particular component in
// another file, we would do so like this:
// `import { VideoListItem } from './filePath'`
export const VideoListItem = () => {
    return (
        <li>Video List Item</li>
    )
}