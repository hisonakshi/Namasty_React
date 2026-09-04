import { RestauntCard } from "./Restaurant";
import { useState, useEffect } from "react";
import { Shimmer } from "./Shimmer";

export const Body = () => {

    const [listOfRestaurant, setListOfRestaurant] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.2453332&lng=77.8645651&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();

        console.log(json);

        setListOfRestaurant(
            json?.data?.cards?.
            find((card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            ?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
        );

    };

    return listOfRestaurant.length === 0 ? ( <Shimmer /> ) : (
        <div className="body">

            <button
                className="filter-btn"
                onClick={() => {
                    const filterRestaurant = listOfRestaurant.filter(
                        (res) => res.info.avgRating > 4
                    );

                    setListOfRestaurant(filterRestaurant);
                }}
            >
                Top rated Restaurant
            </button>

            <div className="res-container">
                {listOfRestaurant.map((restaurant) => (
                    <RestauntCard
                        resData={restaurant}
                        key={restaurant.info.id}
                    />
                ))}
            </div>

        </div>
    );
};


