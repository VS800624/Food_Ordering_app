import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useContext, useEffect, useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  let btnName = "Login";
// video 6 time- 1:27:00 and 1:46:00 and 1:55:00
  const [btnNameReact, setBtnNameReact] = useState("Login")
  const onlineStatus = useOnlineStatus()

  // const data = useContext(UserContext)
  // console.log(data)
  const {loggedInUser} = useContext(UserContext)
  // console.log(loggedInUser)

  //Subscribing to the store using a Selector or reading the store using a selector
  const cartItems = useSelector((store) => store.cart.items) 
  console.log(cartItems)

  console.log("Header Render")

  //if no dependency array => useEffect is called on every render
  //if dependency array is empty = [] => useEffect is called on initial render (just one when the component render first time)
  //if  dependency array is  [btnNameReact] => called everytime btnNameReact is updated
  useEffect(() => {
    console.log("useEffect called")
  },[])
  
  return (
    <header className="flex items-center shadow-xl  mt-[10px] gap-[20px] justify-between border-1 border-solid border-black mx-[20px]">
      <div
        className="ml-[40px] 
         w-[110px] "
      >
        <img className="object-cover object-center" src={LOGO_URL} alt="" />
      </div>
      <nav className="">
        <ul className="flex  items-center justify-center mr-[40px] gap-[30px] h-[120px] text-[18px] font-semibold">
          <li>
            Online Status: {onlineStatus ? "✅" : "❌"}
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            {/* ({cartItems.length > 1 ? `${cartItems.length} items` : `${cartItems.length} item`}) */}
            <Link to="/cart">Cart - ({cartItems.length} items)</Link>  //
          </li>
          <button
            className="px-[20px] py-[8px] bg-blue-400 cursor-pointer"
            onClick={() => {
              btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login")
            }}
          >
            {btnNameReact}
          </button>
          <li className="px-4">{loggedInUser}</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
