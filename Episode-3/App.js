import React from "react";
import ReactDOM from "react-dom/client";

// React element 
const element = <h2>I am React Element</h2>

//React Functional Component 

const sum = 100;
const title = (
    <h3>Namasty react {sum}</h3>
);

const Title =()=>{ 
    return (
    <h3>Namasty react !! </h3>
    )
};

function HeadingComponent(){
    return(
      <div>
         {title} 
         {/* {Title()}  <Title/>  */} <Title></Title>
         {element}
         {sum} <br/> {100 +67}
         <h1>hello React component</h1>
         <h2>This is my first component</h2>
      </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(<HeadingComponent/>);
