import RestaurantCard from "../RestaurantCard/RestaurantCard"
import { GET_RESTAURANTS } from "../../config/config"
import { useState,useEffect } from "react";/** Named Export*/
import Shimmer from "../Shimmer/Shimmer";
import { Link } from "react-router-dom";
import {filterData} from "../../utils/helper"
import useRestaurants from "../../utils/useRestaurants";

const Body = () => { 
  const [searchInput, setSearchInput] = useState();
  
  const restaurants = useRestaurants();
  const allRestaurants = restaurants.allRestaurant;
  const filteredRestaurants = restaurants.filteredRestaurants;
  const searchData = restaurants.searchData;
  const errorMsg = restaurants.errorMsg;

  //early return
  if (!allRestaurants) return null;

  // Conditional Rendering
  // If restuarants is empty => Shimmer UI
  // If restaurants has data => Actual shimmer UI

    return (allRestaurants?.length===0)?<Shimmer/> : (
    <>
        <div className="search-container">
                <input type="text" className="search-input" placeholder="search here" value={searchInput} onChange={(e) => {
                    setSearchInput(e.target.value)
                } } />
                <button className="search-btn" onClick={searchData(searchInput, allRestaurants)}>search</button>
            </div>
            { errorMsg && 
      <div className="error-container" id="error">
        <span className="error-msg" id="error-msg">{errorMsg}</span>
      </div> 
    }
                    
       <div className="restaurant-list">
        {
            filteredRestaurants.map((restaurant) => {
                return  <Link className="link-styles" to={"/restaurant/" + restaurant?.data?.id} key={restaurant?.data?.id}><RestaurantCard {...restaurant.data} key={restaurant?.data?.id} /></Link>
            })
          }
          
            </div>
    </>
   )
}

export default Body;