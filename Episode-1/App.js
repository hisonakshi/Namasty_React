
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

const heading = React.createElement("h1", { id: "parent" }, [

  // Child 1
  React.createElement("div", { id: "child1", key: "child1" }, [
      React.createElement("h1", { id: "h1-1", key: "h1-1" }, "I am h1 tag"),
      React.createElement("h2", { id: "h2-1", key: "h2-1" }, "I am h2 tag"),
  ]),

  // Child 2
  React.createElement("div", { id: "child2", key: "child2" }, [
      React.createElement("h1", { id: "h1-2", key: "h1-2" }, "I am h1 tag"),
      React.createElement("h2", { id: "h2-2", key: "h2-2" }, "I am h2 tag"),
  ]),
]);

    const root = ReactDOM.createRoot(document.getElementById("container"));
    root.render(heading);