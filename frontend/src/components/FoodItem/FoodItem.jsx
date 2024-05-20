// import React from 'react'

import { useContext} from "react";
import { assets } from "../../assets/assets"
import "./FoodItem.css";
import { Context } from "../../StoreContext";

const FoodItem = ({id,name,price,description,image}) => {

  const {cartItem,addToCart,removeFromCart,url} = useContext(Context);
  return (
    <div className="food-item">
        <div className="image-container">
            <img className="food-image" src={url+"/images/"+image} alt="image" />
            {
              !cartItem[id]? 
              <img className="add" onClick={()=>addToCart(id)}  src={assets.add_icon_white} alt="img" />
              :<div className="food-item-counter">
                <img src={assets.remove_icon_red} onClick={()=>removeFromCart(id)} alt="image" />
                <p>{cartItem[id]}</p>
                <img id="plus" src={assets.add_icon_green} onClick={()=>addToCart(id)} alt="image"/>
              </div>
            }
        </div>
        <div className="food-item-info">
            <div className="food-item-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="rating" />
            </div>
            <p className="food-item-desc">{description}</p>
            <p className="price">${price}</p>
        </div>
      
      
      
    </div>
  )
}

export default FoodItem
