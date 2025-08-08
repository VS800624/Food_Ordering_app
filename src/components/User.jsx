import { useEffect, useState } from "react";

const User = ({name}) => {
    const [count, setCount] = useState(0)
    const [count2] = useState(1)

    useEffect(() => {
        //Api Calls
        // const timer = setInterval(() => {
        //     console.log("Namaste React OP")
        // }, 1000);
        // console.log("useEffect")

        // return () => {
            // clearInterval(timer)
        //     console.log("useEffect Return")  -> unMounting phase
        // }
    }, [])
// console.log("render")
    
    
    return <div className="p-[10px] border-[1px] border-solid border-black">
        <h1>Count = {count}</h1>
        <h2>Count2 = {count2}</h2>
        <h2>Name: {name}</h2>
        <h3>Location: Dehradun</h3>
        <h4>Contact: @akshay</h4>
    </div>
}

export default User;

