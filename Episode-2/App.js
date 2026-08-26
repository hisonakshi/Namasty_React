import React from "react";
import ReactDOM from "react-dom/client";

//for Creating React Element with CORE REACT

// const heading = React.createElement("h1",{id : "heading"},"hello from core react");
// const root = ReactDOM.createRoot(document.getElementById("container"));
// root.render(heading);


//With JSX -- html - like syntax
// how this work <<-- JSX ==> React.createElement ==> ReactElement-JS Object ==> HTMLElement(render)
const jsxHeading = <h1>Hello world from JSX :- html-like syntax</h1>;
const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(jsxHeading);