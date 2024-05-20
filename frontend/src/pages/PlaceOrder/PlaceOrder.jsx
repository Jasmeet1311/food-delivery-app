import "./Place-order.css";
import { useContext, useEffect, useState} from "react";
import {useNavigate} from 'react-router-dom';
import { Context } from "../../StoreContext";
import axios from "axios";
const PlaceOrder = () => {
  const { getCartTotalAmount,food_list,cartItem,url,token} = useContext(Context);
  const [data,setData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipCode:"",
    country:"",
    phone:"",
  })
  const onChangeHandler = (event)=>{
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data,[name]:value}))
  }
  const placeOrder = async (event)=>{
    event.preventDefault();
    let orderItems = [];
    food_list.map((item)=>{
      if (cartItem[item._id]>0) {
        let itemInfo = item;
        itemInfo["quantity"]=cartItem[item._id];
        orderItems.push(itemInfo);
      }
    })
    let orderData = {
      address:data,
      items:orderItems,
      amount:getCartTotalAmount()+2
    }
    let response = await axios.post(url+"/api/order/place",orderData,{headers:{token}})
    if (response.data.success) {
      const {session_url} = response.data;
      window.location.replace(session_url);
    }
    else{
      alert("Error");
    }
  }
  const navigate = useNavigate();
  useEffect(()=>{
      if (!token) {
        navigate("/cart");
      }
      else if(getCartTotalAmount()===0){
        navigate('/cart');
      }
  },)
  return (
    <form onSubmit={placeOrder} className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder="First Name" name="firstName" onChange={onChangeHandler} value={data.firstName} required />
          <input type="text" placeholder="Last Name" name="lastName" onChange={onChangeHandler} value={data.lastName} required/>
        </div>
        <input type="email" placeholder="Email" name="email" onChange={onChangeHandler} value={data.email}  required/>
        <input type="text" placeholder="Street" name="street" onChange={onChangeHandler} value={data.street} required/>
      <div className="multi-fields">
        <input type="text" placeholder="City" name="city" onChange={onChangeHandler} value={data.city} required/>
        <input type="text" placeholder="State" name="state" onChange={onChangeHandler} value={data.state} required/>
      </div>
      <div className="multi-fields">
        <input type="text" placeholder="Zip code" name="zipCode" onChange={onChangeHandler} value={data.zipCode}  required/>
        <input type="text" placeholder="Country" name="country" onChange={onChangeHandler} value={data.country} required/>
      </div>
      <input type="text" placeholder="Phone" name="phone" onChange={onChangeHandler} value={data.phone} required/>
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div className="card-total-details">
            <p>Sub Total</p>
            <p>${getCartTotalAmount()}</p>
          </div>
          <hr />
          <div className="card-total-details">
            <p>Delivery Fee</p>
            <p>${getCartTotalAmount()===0?0:2}</p>
          </div>
          <hr />
          <div className="card-total-details">
            <b>Total</b>
            <b>${getCartTotalAmount()===0?0:getCartTotalAmount()+2}</b>
          </div>
          <button type="submit">PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
