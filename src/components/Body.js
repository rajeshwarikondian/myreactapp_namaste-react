import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  // local State variable - super powerful variable
  let [listOfRestaurant, setListOfRestaurant] = useState([])

  useEffect(() => {
    fetchData();
  }, []);

 const  fetchData = async() =>{
  const data = await fetch(
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  );

  const json = await data.json();

      // View the structure in the console to locate restaurants
  console.log(json);
  setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

 }

 //Conditional Rendering using ternary operator

 return listOfRestaurant.length === 0 ? (
    <Shimmer/> 
) : (
    <div className="body">
      <div className="filter">
        <button className="filter-btn"
        onClick={()=>{
              //FILTER LOGIC HERE
            const filteredList = listOfRestaurant.filter(
                (res) => res.info.avgRating > 4
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
