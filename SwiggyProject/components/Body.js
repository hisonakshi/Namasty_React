import {RestauntCard} from "./Restaurant";

const resList = [
    {
      info: {
        id: "893407",
        name: "Tasty house",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/22/14d1d9d9-1b07-4028-be77-344e1818be65_893407.jpg",
        locality: "Khurja",
        areaName: "Murari Nagar",
        costForTwo: "₹300 for two",
        cuisines: ["Chinese", "Fast Food"],
        avgRating: 4,
        veg: true,
        avgRatingString: "4.0",
        totalRatingsString: "1.1K+",
        sla: {
          deliveryTime: 35,
          lastMileTravel: 2.1,
          serviceability: "SERVICEABLE",
          slaString: "35-45 mins",
          lastMileTravelString: "2.1 km"
        }
      }
    },
  
    {
      info: {
        id: "1203616",
        name: "A One Bakery",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/13/5f26b0f7-a8f2-46b2-afe2-1921411653d0_1203616.jpg",
        locality: "Murari Nagar",
        areaName: "Murari Nagar",
        costForTwo: "₹300 for two",
        cuisines: ["Bakery"],
        avgRating: 3.3,
        veg: true,
        avgRatingString: "3.3",
        totalRatingsString: "4",
        sla: {
          deliveryTime: 22,
          lastMileTravel: 1.5,
          serviceability: "SERVICEABLE",
          slaString: "20-25 mins",
          lastMileTravelString: "1.5 km"
        }
      }
    },
  
    {
      info: {
        id: "1379478",
        name: "Apni Rasoi",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/25/f9813881-8cc4-4f01-b3f4-cd9747ffb489_876116.jpg",
        locality: "Murari Nagar",
        areaName: "Murari Nagar",
        costForTwo: "₹300 for two",
        cuisines: ["North Indian", "Indian", "Punjabi"],
        veg: true,
        avgRatingString: "NEW",
        sla: {
          deliveryTime: 41,
          lastMileTravel: 2.8,
          serviceability: "SERVICEABLE",
          slaString: "40-45 mins",
          lastMileTravelString: "2.8 km"
        }
      }
    },
  
    {
      info: {
        id: "752777",
        name: "Dev Restaurant",
        cloudinaryImageId: "9553bd6fdd4a9c0a98eb364eb51467b3",
        locality: "Jhamka Chauraha Pahasu Road",
        areaName: "Murari Nagar",
        costForTwo: "₹200 for two",
        cuisines: ["Burgers", "Chinese", "Pizzas"],
        avgRating: 4.5,
        avgRatingString: "4.5",
        totalRatingsString: "179",
        sla: {
          deliveryTime: 26,
          lastMileTravel: 1.5,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "1.5 km"
        }
      }
    },
  
    {
      info: {
        id: "1379551",
        name: "Desi Vibe",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/13/a9004f50-80f8-465e-bc63-9bdf00e123e6_972125.jpg",
        locality: "Murari Nagar",
        areaName: "Murari Nagar",
        costForTwo: "₹300 for two",
        cuisines: ["North Indian", "Italian", "Chinese", "Middle Eastern"],
        veg: true,
        avgRatingString: "NEW",
        sla: {
          deliveryTime: 40,
          lastMileTravel: 2.8,
          serviceability: "SERVICEABLE",
          slaString: "40-50 mins",
          lastMileTravelString: "2.8 km"
        }
      }
    },
  
    {
      info: {
        id: "1390273",
        name: "Dev Fast Food",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/30/75217e60-b76f-4c8e-b102-37d6ce43c387_901310.jpg",
        locality: "Murari Nagar",
        areaName: "Murari Nagar",
        costForTwo: "₹300 for two",
        cuisines: ["Snacks", "Pizzas", "Fast Food", "North Indian", "Indian"],
        veg: true,
        avgRatingString: "NEW",
        sla: {
          deliveryTime: 31,
          lastMileTravel: 1.5,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "1.5 km"
        }
      }
    },
  
    {
      info: {
        id: "1377551",
        name: "The Cake Bake",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/11/05fab85e-0673-403d-98b5-258e45350992_954870.jpg",
        locality: "Murari Nagar",
        areaName: "Murari Nagar",
        costForTwo: "₹300 for two",
        cuisines: ["Bakery", "Indian", "Snacks"],
        veg: true,
        avgRatingString: "NEW",
        sla: {
          deliveryTime: 30,
          lastMileTravel: 1.5,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "1.5 km"
        }
      }
    },
  
    {
      info: {
        id: "1139620",
        name: "Zoomeno'd Pizza",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/15/aaf2e4eb-0db6-4ec5-9999-89b59bc7ace9_1139620.jpg",
        locality: "Murari Nagar",
        areaName: "Murari Nagar",
        costForTwo: "₹300 for two",
        cuisines: ["Snacks", "Pizzas", "Burgers"],
        avgRating: 4.4,
        veg: true,
        avgRatingString: "4.4",
        totalRatingsString: "201",
        sla: {
          deliveryTime: 28,
          lastMileTravel: 1.8,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "1.8 km"
        }
      }
    }
  ];

  
//Not using key (not acceptance) << use index as key [if no key available] << unique id(preferred as we use here)
export const Body = () => {
    return(
        <div className = "body">
            <div className = "search">Search</div>

            <div className = "res-container"> 
                {resList.map( (restaurant) => (
                    <RestauntCard 
                    key={restaurant.info.id}
                    resData ={restaurant}/>
            ))}    
            </div>

        </div>
    )
}