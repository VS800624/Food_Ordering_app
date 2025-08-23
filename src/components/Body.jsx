import { useContext, useEffect, useState } from "react";
import { resList } from "../utils/mockData";
import RestaurantCard , {withPromotedLabel} from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

// not using keys (not acceptable) <<<<<< index as key <<<<<<<< unique id (best practice)

const Body = () => {
  //Local State variable -> Super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([])
  const [searchText, setSearchText] = useState("")

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard)

  const {loggedInUser ,setUserName} = useContext(UserContext)

  // const arr = useState(resList)
  //  const [listOfRestaurants, setListOfRestaurants] = arr;
  // const listOfRestaurants = arr[0];
  // const setListOfRestaurants = arr[1];

  //Normal JS variable
  // let listOfRestaurants = [];

  //Whenever state variables update,  react triggers a reconciliation cycle(re-renders the components)
  console.log("Body Rendered")

  useEffect(() => {
    // console.log("useEffect Called")
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.32750&lng=78.03250&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING "
    );

    const json = await data.json();
    console.log(json);
    // Optionally Chaining
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  };

  const onlineStatus = useOnlineStatus()

  if (onlineStatus === false ) return <h1>Looks like you're offline!! Please check your internet connection</h1>

  // console.log("Body Rendered")

  //Conditional Rendering
  //  if (listOfRestaurants.length === 0) {
  //   return (
  //     <div className="grid grid-cols-4 mx-[30px] gap-[40px]">
  //       {Array(8)
  //         .fill("")
  //         .map((_, index) => (
  //           <Shimmer key={index} />
  //         ))}
  //     </div>
  //   );
  // }

  return listOfRestaurants.length === 0 ? (
    <div className="grid grid-cols-4 mx-[30px] gap-[40px]">
      {Array(8)
        .fill("")
        .map((_, index) => (
          <Shimmer key={index} />
        ))}
    </div>
  ) : (
    <div className="">
      <div className="px-[10px] m-[10px] flex">
        <div className="p-[16px]" >
          <input data-testid= "searchInput" className="border border-solid" type="text" value={searchText} onChange={(e) => {
            setSearchText(e.target.value)
          }}/>
          <button className="px-[16px] py-[6px] rounded-[4px] bg-blue-400 m-4" onClick={() => {
            //Filter the restaurant cards and update the UI
            console.log(searchText)
            // const filteredRestaurant = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
            // setFilteredRestaurant(filteredRestaurant)
            const filteredRestaurant = listOfRestaurants.filter((res) =>
            [...searchText.toLowerCase()].every(letter =>
              res.info.name.toLowerCase().includes(letter)
            )
          );
          setFilteredRestaurant(filteredRestaurant)
          }}>Search</button>
        </div>
        <div className="m-4 p-4">
        <button
          onClick={() => {
            // filter logic here
            let filterList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.3
            );
            setFilteredRestaurant(filterList);
            console.log(filterList)
          }}
          className="px-[16px] py-[6px] rounded-[4px] bg-red-400 flex items-center"
        >
          Top Rated Restaurants
        </button>
        </div>
        <div className="m-4 p-4">
          <label htmlFor="username">Username: </label>
          <input type="text" className="border p-2" 
          value={loggedInUser}
           onChange={(e) => setUserName(e.target.value)}/>
        </div>
      </div>
      <div className="flex flex-wrap mx-[30px] gap-[40px]">
        {/* passing props */}
        {/* <RestaurantCard
          resName="Meghana Foods"
          cuisine="Biryani, North India, Asian"
        /> */}
        {filteredRestaurant.map((restaurant, index) => {
          return (
           <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}
           >
            {/* If the restaurant is promoted then add a promoted label to it */}
            {restaurant.info.promoted ? (
              <RestaurantCardPromoted resData={restaurant}/>
            ): (<RestaurantCard  resData={restaurant} />)}
            </Link> 
          ); 
        })}
      </div>
    </div>
  );
};

export default Body;
