import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  // local State variable - super powerful variable
  let [listOfRestaurant, setListOfRestaurant] = useState(resList)



 return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn"
        onClick={()=>{
              //FILTER LOGIC HERE
            const filteredList = listOfRestaurant.filter(
                (res) => res.info.avgRating > 4.3
              );
              setListOfRestaurant(filteredList)    
        }}
      
        >Top rated restaurant </button>
      </div>
      <div className="res-container">
        {listOfRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;

//not using keys (not accetable) <<< index as keys <<<<< unique id (best practice)
