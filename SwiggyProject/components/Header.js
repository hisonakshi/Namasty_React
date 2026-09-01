import {LOGO_URL} from "../utils/constants.js";
import {CART_URL} from "../utils/constants.js";

export const Header = () => {
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
                  <li> <img src= {CART_URL}/> </li>
                </ul>
            </div>

        </div>
    )
};

