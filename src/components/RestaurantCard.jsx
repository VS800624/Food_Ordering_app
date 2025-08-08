import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    sla,
  } = resData?.info;

  const {loggedInUser} = useContext(UserContext)
  return (
    <div className="w-[250px] rounded-lg bg-gray-200 mx-[20px]  hover:border hover:border-black hover:cursor-pointer hover:bg-slate-900 ">
      <div className="p-[5px] font-semibold rounded-lg">
        <div className="h-[200px]">
            <img
            className=" w-full h-full rounded-lg"
            src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}
            alt=""
            />

        </div>
        <h3 className="font-bold py-2 text-[1.1rem]">{name}</h3>
        <h4>{cuisines}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla?.slaString}</h4>
        {/* <h5>User: {loggedInUser}</h5> */}
      </div>
    </div>
  );
};

 //Higher Order Component

 // its input is RestaurantCard nad output is RestaurantCardPromoted

 export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
      return  (
        <div>
          <label htmlFor="" className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
          <RestaurantCard {...props}/>
        </div>
      )
    }
 }

export default RestaurantCard;