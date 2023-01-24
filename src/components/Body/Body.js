import RestaurantCard from "../RestaurantCard/RestaurantCard"
import { GET_RESTAURANTS } from "../Config/config"
import { useState,useEffect } from "react";/** Named Export*/
import Shimmer from "../Shimmer/Shimmer";
import {Link} from "react-router-dom"

const filterData = (searchText, restaurants) => {
  return restaurants.filter(restaurant => restaurant?.data?.name?.toLowerCase().includes(searchText.toLowerCase()));
}


const Body = () => { 
  console.log(useState());
  const [searchInput, setSearchInput] = useState();
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [errorMsg, setErrorMsg] = useState(''); 
  
  //empty dependency array => Once after render
  // dependency [searchText] =>once after initial render + everytime after rerender (change in searchText )
  useEffect(() => {
    getRestaurants();
}, [])
  
  async function getRestaurants() {
    try {
      const data = await fetch(GET_RESTAURANTS);
      const json = await data.json();

      setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
      setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }
    catch(err){
      console.log(err);
    }
  }
    

    const searchData = (searchText, allRestaurants ) => ()=> {  
    if(searchText !== '') {
    const data = filterData(searchText,allRestaurants);
    setFilteredRestaurants(data); 
    if (data.length === 0) {
      setErrorMsg('No matches found ');
    }
  } else {
      if(errorMsg) setErrorMsg('');
      setFilteredRestaurants(allRestaurants);
    }
  }

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