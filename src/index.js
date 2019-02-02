import React from "react";

// note that this is the only component that uses ReactDOM in our whole React app!
import ReactDOM from "react-dom";

// here we import the App component, which contains all of our other components nested inside it
import App from "./App";

// see notes on serviceWorker below...
import * as serviceWorker from "./serviceWorker";

// this link points to the css stored inside the bootstrap npm package we installed
import 'bootstrap/dist/css/bootstrap.min.css';



// we typically run ReactDOM.render only once per application... this method takes in a component to insert
// (which typically has many other components nested inside it!), and bundles up all the JavaScript and static
// assets necessary for the structure, functionality, and styling of the components nested within; this
// bundle of JS + other assets is then injected inside the HTML element specified in the second arg of the 
// function below, in this case #root
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
