// import React from 'react'
import { useContext } from 'react'
import './Cart.css'
import { Context } from '../../StoreContext';
import { useNavigate } from 'react-router-dom';
const Cart = () => {
  const {cartItem,food_list,removeFromCart,getCartTotalAmount,url} = useContext(Context);
  const navigate = useNavigate();
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
      <hr />
      {
        food_list.map((item,index)=>{
          if (cartItem[item._id] >0) {
            return (
              <>
              <div key ={index}className="cart-items-title cart-items-item">
                <img src={url+"/images/"+item.image} alt="img" />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartItem[item._id]}</p>
                <p>${item.price*cartItem[item._id]}</p>
                <p onClick={()=>{
                  removeFromCart(item._id)
                }} className='cross'>x</p>
              </div>
              <hr />
            </>
            )
          }
        })
      }
      </div>
      <div className="cart-bottom">
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
          <button onClick={()=>navigate("/order")}>PROCEED TO CHECKOUT</button>
        </div>
      {/* <div className="cart-promo-code">
        <div>
          <p>If you have a promo code, Enter it here.</p>
          <div className="cart-promo-code-input">
            <input type="text" placeholder='promo code'/>
            <button type="submit">Submit</button>
          </div>
        </div>
      </div> */}
      </div>
    </div>
  )
}

export default Cart
