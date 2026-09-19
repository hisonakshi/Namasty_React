import { User } from "./User";
import { UserClass } from "./UserClass";
import {Component} from "react";

// Parent component 

export class About extends Component{

  constructor(props){
    super(props);

    console.log("Parent Constructor");
  }

  componentDidMount(){
    console.log("parent component did mount");
  }
  
  render(){
    console.log("Render");

    return (
              <div>
                  <h1>About Class Components</h1>
                  <h3>This is Namasty React series</h3>
                  <User name="Sonakshi" location="Delhi (Function)"  />
                  <UserClass name="Sonakshi" location="Delhi (Class Based)"  />
              </div>
          );
  }

}












// export const About = () => {
//     return (
//         <div>
//             <h1>About page</h1>
//             <h3>This is Namasty React series</h3>
//             <User name="Sonakshi" location="Delhi (Function)"  />
//             <UserClass name="Sonakshi" location="Delhi (Class Based)"  />
//         </div>
//     );
// };