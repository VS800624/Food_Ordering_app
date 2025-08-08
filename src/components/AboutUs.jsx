import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class AboutUs extends React.Component{
    constructor(props){
        super(props)

        console.log("Parent Constructor")
    }

    componentDidMount(){
        console.log("Parent Component Did Mount")
    }
    
    render() {
        console.log("Parent Render")
         return (
    <div>
        <h1>About Class Component</h1>
        <div>LoggedIn User
            <UserContext.Consumer>
                {/* {(data) => console.log(data)} */}
                {({loggedInUser}) => <h1 className="font-bold">{loggedInUser}</h1>}
            </UserContext.Consumer>
        </div>
        <h2>This is Namaste Web Series</h2>
       {/* <User name={"First Child Saini (function)"}/> */}
       <UserClass name={"First Child (Class)"} location={"Dehradun Class"}/>
       {/* <UserClass name={"Second Child"} location={"US"}/> */}
    </div>
)
    }
}

// const AboutUs = () => {
//     return (
//     <div>
//         <h1>About</h1>
//         <h2>This is Namaste Web Series</h2>
//        {/* <User name={"First Child Saini (function)"}/> */}
//        <UserClass name={"First Child Saini (Class)"} location={"Dehradun Class"}/>
//     </div>
// )
// }


export default AboutUs;


/* 1:23:00 Video 8
- Parent Constructor
- Parent render

 - First Child Constructor
 - First Child render
 
 - Second Child Constructor
 - Second Child render

 <DOM UPDATED - IN SINGLE BATCH>

 - First Child componentDidMount
 - Second Child componentDidMount
 
-Parent componentDidMount


*/ 