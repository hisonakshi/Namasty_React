import { RestauntCard } from "./Restaurant";
import { useState, useEffect } from "react";
import { Shimmer } from "./Shimmer";

export const Body = () => {
    //For filtering top rated restaurant 
    const [listOfRestaurant, setListOfRestaurant] = useState([]);

    //For Search bar on button click 
    const [searchText,setSearchText] = useState("");

    const[filteredRestaurant,setFilterRestaurant] = useState([]);


    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.2453332&lng=77.8645651&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();

        console.log(json);

        // setListOfRestaurant(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants)
        // setFilterRestaurant(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants)

        setListOfRestaurant(
            json?.data?.cards?.
            find((card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            ?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
        );

        setFilterRestaurant(
            json?.data?.cards?.
            find((card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            ?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
        );
    };

    return listOfRestaurant.length === 0 ? ( <Shimmer /> ) : (
        <div className="body">
            <div className = "filter">
                <div className = "search">
                    <input type="text" className="search-box" value={searchText} onChange={(e)=>{ setSearchText(e.target.value) }} />

                    <button className="search-btn" onClick={ ()=> {
                        // Filter the restaurant cards & Update the UI

                        const filterMethod = listOfRestaurant.filter((res)=>{
                            return res.info.name.toLowerCase().includes(searchText.toLowerCase());

                        })

                        setFilterRestaurant(filterMethod);

                    }} >Search</button>

                </div>

            <button
                className="filter-btn" onClick={() => {
                    const filterRestaurant = listOfRestaurant.filter(
                        (res) => res.info.avgRating > 4
                    );

                    setFilterRestaurant(filterRestaurant);
                }}
            >
                Top rated Restaurant
            </button>


        </div>

            <div className="res-container">
                {filteredRestaurant.map((restaurant) => (
                    <RestauntCard
                        resData={restaurant}
                        key={restaurant.info.id}
                    />
                ))}
            </div>

        </div>
    );
};