import {CDN_URL} from "../utils/constants.js";

export const RestauntCard = ({resData}) => {
    const { name,cuisines, locality, avgRating }=resData?.info;

    return(
        <div className="res-card">
           <img src={CDN_URL+ `${resData.info.cloudinaryImageId}`} alt={resData.info.name} />
            <h3>{name}</h3> 
            <h4>{cuisines.join(",")}</h4>
            <h5>{avgRating}</h5> <br/>
            <h5>{locality}</h5>
        </div>
    )
}