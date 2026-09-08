import {LOGO_URL} from "../utils/constants.js";
import {CART_URL} from "../utils/constants.js";
import {useState,useEffect} from "react";
import {Link} from "react-router-dom";

export const Header = () => {

    const [btnChange,setButtonChange] = useState("login");

    // console.log("Header called");
    // if no array dependency => useEffect is called every render -- header , useEfffect each time called
    // if array dependency is empty = [] => useEffect called on initial render(just once) - useEffect once , header each time
    // if dependency array is = [btnChange] => called everyTime btnChange updated 

    // useEffect(()=>{
    //     console.log("useEffect called");
    // },[btnChange]);


    return (
        <div className = "header">

            <div className = "logo">
                <img src = {LOGO_URL}/>
            </div>

            <div className = "NavbarItems">
                <ul>
                  <li><Link to="/"> Home </Link></li>
                  <li><Link to="/about"> About </Link></li>
                  <li><Link to="/contact"> Contact Us</Link></li>

                  <button className="login" onClick={
                     ()=>{ btnChange == "login" ? setButtonChange("logout") : setButtonChange("login")}
                      } > {btnChange}
                  </button>

                  <li> <img src= {CART_URL}/> </li>

                </ul>

            </div>

        </div>
    )
};

