import { useNavigate, useSearchParams } from "react-router-dom"
import "./Verify.css"
import { Context } from "../../StoreContext";
import { useContext, useEffect } from "react";
import axios from "axios";

const Verify = () => {
    const [searchParams] = useSearchParams();
    const success = searchParams.get("success")
    const orderId = searchParams.get("orderId")
    const {url} = useContext(Context);
    const navigate = useNavigate()
    const verifyPayment = async ()=>{
        const response = await axios.post(url+"/api/order/verify",{success,orderId});
        if (response.data.success) {
            navigate("/myorders");
        }
        else{
            navigate("/");
        }
    }
    useEffect(()=>{
        verifyPayment();
    })
  return (
    <div>
      <div className="verify">
        <div className="spinner">

        </div>
      </div>
    </div>
  )
}
  
export default Verify
