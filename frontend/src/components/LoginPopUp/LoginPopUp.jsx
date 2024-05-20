import {useContext, useState } from "react";
import "./LoginPopUp.css";
import { assets } from "../../assets/assets";
import { Context } from "../../StoreContext";
import axios from "axios";
const LoginPopUp = ({setshowLogin}) => {
  const {url,setToken} = useContext(Context);
  const [currState,setCurrState] = useState("LogIn");
  const [data,setData] = useState({
    name:"",
    email:"",
    password:""
  })
  const onchangeHandler =(event)=>{
  const name = event.target.name;
  const value = event.target.value;
  setData(data=>({...data,[name]:value}))
  }
  const onLogin = async (event)=>{
      event.preventDefault();
      let newURL = url;
      if (currState === 'LogIn') {
        newURL += '/api/user/login'
      }
      else {
        newURL += '/api/user/register'
      }
      const response = await axios.post(newURL,data);
      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token",response.data.token);
        setshowLogin(false);

      }
      else{
        alert(response.data.message)
      }
  }
  return (
    <div className="login-popUp">
      <form className="login-popUp-container" onSubmit={onLogin}>
        <div className="login-popUp-title">
            <h3>{currState}</h3>
            <img onClick={()=>setshowLogin(false)} src={assets.cross_icon} alt="cross" />
        </div>
        <div className="login-popoup-inputs">
            {currState === "LogIn" ?<></>:<input type="text" name="name" 
            onChange={onchangeHandler} value={data.name} placeholder="Your name" required />}
            <input type="email" name="email" onChange={onchangeHandler} value={data.email} placeholder="Your email" required />
            <input type="password" name="password" onChange={onchangeHandler} value={data.password} placeholder="Your password" required />
        </div>
        <button type="submit">
            {currState === 'SignUp'?'Create Account':'LogIn'}
        </button>
        <div className="loginPopUp-condition">
            <input type="checkbox"  required/>
            <p>By agreeing this, I agree to the terms of use & privacy policy</p>    
        </div>
            {currState==='LogIn'?<p>Create a New account? <span onClick={()=>setCurrState("SignUp")}>Click Here</span></p>:<p>Already have an account? <span onClick=
            {()=>setCurrState("LogIn")}>Login Here</span></p>}
      </form>
    </div>
  )
}

export default LoginPopUp
