import './App.css'
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import {Routes,Route} from 'react-router-dom';
import Footer from './components/Footer/Footer';
import { useEffect, useState } from 'react';
import LoginPopUp from './components/LoginPopUp/LoginPopUp';
import Verify from './pages/verify/Verify';
import MyOrders from './pages/myOrders/MyOrders';
// import { Context } from './StoreContext.jsx';
// import { food_list } from './assets/assets.js';
const App = () => {
  const [showLogin, setshowLogin] = useState(false);
  // const [token,setToken] = useState("");
  useEffect(()=>{
    if (showLogin) {
      document.body.style.overflow = 'hidden';
    }
    else{
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
  };
  },[showLogin]);
  return (
    <>
    {showLogin?<LoginPopUp setshowLogin={setshowLogin} />:<></>}
    <div className='app'> 
      <Navbar setshowLogin={setshowLogin}/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/order" element={<PlaceOrder/>}></Route>
        <Route path="/verify" element={<Verify/>}></Route>
        <Route path="/myOrders" element={<MyOrders/>}></Route>
      </Routes> 
    </div>
      <Footer/>
    </>
  )
}

export default App
