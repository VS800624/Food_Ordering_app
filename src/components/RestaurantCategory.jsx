import { useState } from "react"
import ItemList from "./ItemList"


const RestaurantCategory = ({data, showItems, setShowIndex}) => {
    // console.log(data)

    // const [showItems, setShowItems] = useState(false)
    
    const handleClick = () => {
        // setShowItems(!showItems)
        setShowIndex()
    }
    return (
        <div>
            {/* Header */}
            <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4 ">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                    <span>▼</span>   
                </div>
            {/* Accordion Body */}
            {showItems && <ItemList items={data.itemCards}/>}
            </div>
        </div>
    )
}


export default RestaurantCategory

// if the restaurantCategory  was controlling itself i.e. the showItems state it will be the uncontrolled component and if we take away this power and give it to its parent i.e lifting the state up and relying to its parent what to do now it is a controlled component now we are controlling it with its parent restaurant menu 