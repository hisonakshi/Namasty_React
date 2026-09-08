import {useState,useEffect} from "react";
import {Shimmer} from "./Shimmer";
import {useParams} from "react-router-dom";
import {MENU_API} from "../utils/constants.js"

export const RestaurantMenu = () => {

    const [resInfo,setResInfo] = useState(null);

    const {resId} = useParams();


    useEffect( () => {
        fetchMenu();
    },[])

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId);

        // const json = await data.json();
        const json = await data.text();

    // console.log(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card);
        console.log(json);
        setResInfo(json.data);
    };

        
    if(resInfo == null){
        return <Shimmer/>;
    } 

    // data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
    
    // const{name,cuisines,rating} = resInfo.cards[1].card.card.gridElements.infoWithStyle.restaurants.info;
    // const{itemCards} = resInfo.cards[1].groupedCard.cardGroupedMap.REGULAR.cards[1].card.card;

    return(
        <div className="menu">
            <h1>{resInfo.cards[2].card.card.info.name}</h1>
            {/* <h2>{cuisines}</h2>  */}
            <h2>cuisines</h2>  
            <ul>
                <li>hello</li>
                <li>world</li>
                <li>hehihehi</li>

                  {/* {itemCards.map((item) =>
                     (<li>item.card.info.name</li>))
                  }

                <li>{itemCards[2].card.info.name}</li> */}

            </ul>
        </div>
    )
}

// resInfo.data.cards[2].card.card.info.name