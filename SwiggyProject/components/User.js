import {useState} from "react";

export const User = ({name,location}) => {

    const[count,setCount] = useState(0);
    return (
        <div className="user-card">
            <h2>Count : {count} </h2>
            <button onClick={()=>setCount(count+1)}>Increment</button>       {/* How to update the count value */}

            <h3>Name: {name}</h3>               {/* How to use PROPS */}
            <h3>Location: {location}</h3>
        </div>
    );
};