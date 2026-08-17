
import React from "react";
import ReactDOM from "react-dom/client";
/*
<div id="parent">
  <div id="child1">
     <h1>I am h1 tag </h1>
     <h2>I am h2 tag </h2>
  </div>

   <div id="child2">
     <h1>I am h1 tag </h1>
     <h2>I am h2 tag </h2>
   </div>
</div>
*/


const heading = React.createElement("h1",{id : "parent"},[
//Child - 1
    React.createElement("div",{id : "child"},[
        React.createElement("h1",{},"I am h1 tag"),
        React.createElement("h2",{},"I am h2 tag"),
    ]),
// Child - 2
    React.createElement("div",{id : "child"},[
        React.createElement("h1",{},"I am h1 tag"),
        React.createElement("h2",{},"I am h2 tag"),
    ]),

  ],
);

    const root = ReactDOM.createRoot(document.getElementById("container"));
    root.render(heading);