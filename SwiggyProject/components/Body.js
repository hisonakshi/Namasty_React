import {RestauntCard} from "./Restaurant";
import {resList} from "../utils/API_data.js";
import {useState} from "react";

export const Body = () => {

   const[ListOfRestaurant , setListOfRestaurant] = useState(resList);

    return(
        <div className = "body">
            <button className = "filter-btn"
            onClick={()=>{
                const filterRestaurant = ListOfRestaurant.filter( (res) => res.info.avgRating > 4);
                setListOfRestaurant(filterRestaurant);
            }}>Top rated Restaurant
            </button>

            <div className = "res-container"> 
               { ListOfRestaurant.map((restaurant) => (
                    <RestauntCard resData={restaurant} key={restaurant.info.id}/>
                ))
               }
            </div>

        </div>
    )
}