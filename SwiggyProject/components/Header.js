import {LOGO_URL} from "../utils/constants.js";
import {CART_URL} from "../utils/constants.js";
import {useState} from "react";

export const Header = () => {

    const [btnChange,setButtonChange] = useState("login");

    return (
        <div className = "header">

            <div className = "logo">
                <img src = {LOGO_URL}/>
            </div>

            <div className = "NavbarItems">
                <ul>
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact Us</li>

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

