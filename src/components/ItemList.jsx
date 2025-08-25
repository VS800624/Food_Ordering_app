import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
//   console.log(items);

const dispatch = useDispatch();

const handleAddItem = (item) => {
  // Dispatch am action
  dispatch(addItem(item)) // whatever you sent over state.items.push(action.payload) it will go inside action.payload

  
}

  return (
    <div>
      {items.map((item) => {
        return (
          <div
          data-testid="foodItems"
            key={item.card.info.id}
            className="p-2 m-2 border border-b-2 border-gray-200 text-left flex justify-between"
          >
            <div className="p-2 font-semibold w-9/12">
              <div>
                <span>{item.card.info.name}</span>
                <span>
                  {" "}
                  - ₹
                  {item.card.info.defaultPrice / 100 ||
                    item.card.info.price / 100}
                  /
                </span>
              </div>
              <p className="text-xs">{item.card.info.description}</p>
            </div>
            <div className=" w-3/12">
              <div className="absolute">
                <button className="p-2 bg-black text-white shadow-lg  mx-16 rounded-lg"
                onClick={() => handleAddItem(item)}
                 // onClick = {handleAddItem}  Passes the function handleAddItem without calling it immediately.
                 // onClick = {() => handleAddItem(item)}   Creates an arrow function that calls handleAddItem with item when the button is clicked.
                 // onClick = {handleAddItem(item)}  Immediately calls the function handleAddItem(item) when the component renders — not when clicked.
                >
                  Add +
                </button> 
              </div>
              <img
                src={CDN_URL + item.card.info.imageId}
                alt=""
                className="w-full h-full"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
