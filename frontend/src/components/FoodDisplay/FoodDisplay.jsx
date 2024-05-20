// import React from 'react'
import { useContext } from "react"
import { Context } from "../../StoreContext";
import FoodItem from "../FoodItem/FoodItem";
import "./FoodDisplay.css"

const FoodDisplay = ({category}) => {
  const {food_list} = useContext(Context);
  return (
    <div className="food-display" id="food-display">
    <h2>Top Dishes</h2>
    <div className="food-display-list">
        {food_list.map((item,index)=>{
          if (category==="all" || category===item.category) {
            return <FoodItem key={index} id={item._id} name={item.name} price={item.price}
            description={item.description} image={item.image}/> 
          }
        })}
    </div>
    </div>
  )
}

export default FoodDisplay
