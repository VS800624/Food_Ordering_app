// import { useEffect, useState } from "react"


// const useRestaurantBody = () => {

//     const [listOfRestaurants, setListOfRestaurants] = useState([]);
//       const [filteredRestaurant, setFilteredRestaurant] = useState([])

//     //fetch data
//     useEffect(() => {

//         fetchData()
//     },[])

//     const fetchData = async () => {
//         const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.32750&lng=78.03250&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING ");

//         const json = await data.json()
//         console.log(json)

//         setListOfRestaurants(
//       json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
//     );
//     setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

//     return {
//             listOfRestaurants,
//             filteredRestaurant,
//             setFilteredRestaurant,
//         };
//     }
// }

// export default useRestaurantBody;