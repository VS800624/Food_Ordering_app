import React from "react"

// video8 1:45:00
// video8 2:06:00 for more deeper knowledge of class based component 
class UserClass extends React.Component {

    constructor(props) {
        super(props);
        console.log(props)

        this.state = {
            // count: 0,
            // count2: 2,
            userInfo: {
                name: "Dummy",
                location: "Default",
            }
        } 
        console.log(this.props.name + "Child Constructor")
    }

    async componentDidMount(){
        console.log(this.props.name + "Child Component Did Mount")

        //Api Calls 
        const data = await fetch("https://api.github.com/users/akshaymarch7");
        const json = await data.json()

        this.setState({
            userInfo: json
        })
        console.log(json)

        // this.timer = setInterval(() => {
        //     console.log("Namaste React OP")
        // }, 1000);
    }

    componentDidUpdate() {
        // clearInterval(this.timer)
        console.log("Component Did Update")
    }

    // componentDidUpdate() {
    //     if (
    //         this.state.count !== prevState.count 
    //     ) {
    //         //code
    //     }
    //     if (
    //         this.state.count2 !== prevState.count2 
    //     ) {
    //         //code
    //     }
    // }
    
    componentWillUnmount() {
        console.log("Component Will Unmount")
    }
    
    render() {
        // const {name, location} = this.props
        // const {count, count2} = this.state
        const {name, location, avatar_url} = this.state.userInfo
        console.log("Child Render")
        return <div className="p-[10px] border-[1px] border-solid border-black">
                {/* <h1>Count : {count}</h1> */}
                {/* <button onClick={() => {
                    //Never update state variable directly
                    this.setState({
                        count: this.state.count + 1,
                        count2: this.state.count2 + 1,
                    })
                }}>Count Increase</button> */}
                {/* <h2>Count2 : {count2}</h2> */}
                <img src={avatar_url} alt="" />
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: @akshay</h4>
            </div> 
    }
} 

export default UserClass;

/*
---Mounting Cycle---
- Constructor called (dummy)
- Render (dummy)
    -<HTML dummy>   
- Component Did Mount
    - <API call>
    - <this.setState> -> State variable is updated

---Update Cycle---
- render(API data)
  - <HTML (new API data)
- componentDidUpdate

*/



