import axios from "axios";
import { createContext, useEffect, useState } from "react";
// import { food_list } from "./assets/assets";
export const Context = createContext(null);
const StoreContextProvider = (props) => {
  const [cartItem, setCartItem] = useState({});
  const [token,setToken] = useState("");
  const [food_list,setFoodList] = useState([])
  const url ="https://food-delivery-app-backend-yjtb.onrender.com";
  const addToCart = async (itemId) => {
    if (!cartItem[itemId]) {
      setCartItem((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
    if(token) {
      await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
    }
  };
  const removeFromCart = async (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if(token) {
      await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
    }
  };
  const getCartTotalAmount = () => {
    let totalAmount = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount = totalAmount + itemInfo.price * cartItem[item];
      }
    }
    return totalAmount;
  };
  const fetchFoodList = async ()=>{
    const response = await axios.get(url+"/api/food/list");
    setFoodList(response.data.data)
  }
  const loadCartData =async (token)=>{
    const response = await axios.post(url+"/api/cart/get",{},{headers:{token}});
    setCartItem(response.data.cartData);
  }
  useEffect(()=>{
    
    async function loadData(){
      await fetchFoodList();
      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"));
        await loadCartData(localStorage.getItem("token"));
      }
    }
    loadData();
  },[])
  const contextValue = {
    food_list,
    cartItem,
    setCartItem,
    removeFromCart,
    addToCart,
    getCartTotalAmount,
    url,
    token,
    setToken
  };
  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};
export default StoreContextProvider;
