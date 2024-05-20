// import React from 'react';
import { useState } from 'react'
import { assets } from '../../assets/assets'
import './Navbar.css'
import {Link, useNavigate} from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../StoreContext';

const Navbar = ({setshowLogin}) => {
  const [menu,setMenu] = useState("home");
  
  const {getCartTotalAmount,token,setToken} =  useContext(Context);
  const navigate = useNavigate();
  const logout = ()=>{
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
    console.log("Successfully log out");
  }
  return (
    <div className='navbar'>
     <Link to='/'> <img className='logo' src={assets.logo} alt="logo" /> </Link>
      <ul className="navbar-menu">
        <Link to="/" onClick={()=>{setMenu("home")}} className={menu==="home"?"active":""}>Home</Link>
        <a href='#explore-menu'  onClick={()=>{setMenu("menu")}} className={menu==="menu"?"active":""}>Menu</a>
        {/* <a href=''  onClick={()=>{setMenu("Mobile-app")}} className={menu==="Mobile-app"?"active":""}>Mobile-app</a> */}
        <a href='#footer' onClick={()=>{setMenu("Contact")}} className={menu==="Contact"?"active":""}>Contact</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="search" />
        <div className="navbar-search-icon">
            <Link to='/cart'><img src={assets.basket_icon} alt="basket" /></Link>
            <div className={getCartTotalAmount()===0?"":"dot"}></div>
        </div>
        {
          !token?<button onClick={()=>setshowLogin(true)}>LogIn</button>
          :<div className='navbar-profile'>
            <img src={assets.profile_icon} alt="profile-img" />
            <ul className='nav-profile-drop-down'>
              <li onClick={()=>{navigate('/myOrders')}}><img src={assets.bag_icon} alt="bag"/><p>Orders</p></li>
              <hr />
              <li onClick={logout}><img src={assets.logout_icon} alt="logout"/><p>LogOut</p></li>
            </ul>
          </div>
        }
        
      </div>
    </div>
  )
}

export default Navbar
