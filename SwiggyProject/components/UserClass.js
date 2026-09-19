// CHILD COMPONENT 
import React from "react";

export class UserClass extends React.Component{
    constructor(props){                          {/* How to use PROPS */}
        super(props);

        this.state = {                         // How to use hooks - useState
            count:0
        }
        console.log("Child Constructor");
    }

  componentDidMount(){                                     //one imp fun. to make API CALL
    console.log("Child component did mount");
  }

    render(){
        console.log("Child Render");

        const {name,location} = this.props;
        const{count} = this.state;

        return (
            <div className="user-card">
                <h2>Count : {count}</h2>
                <button onClick={() =>          // How to update the count value
                    {this.setState({count:this.state.count + 1,})} 
                }> Increase Count </button>

                <h3>Name: {name}</h3>            
                <h3>Location: {location}</h3>
                <h4>Contact: @abc.com</h4>
            </div>
        );
    }
}