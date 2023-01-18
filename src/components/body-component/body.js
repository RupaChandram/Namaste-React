import RestaurantCard from "../restaurant-card-component/restaurant-card"
import { restaurantList } from "../config/config"
import { useState } from "react";/** Named Export*/

const filterData = (searchText, restaurants) => {
  return restaurants.filter(restaurant => restaurant.data.name.toLowerCase().includes(searchText.toLowerCase()));
}

const BodyComponent = () => { 
    const [searchInput, setSearchInput] = useState();
    const [restaurants, setRestaurants] = useState(restaurantList);
    const [errorMsg, setErrorMsg] = useState('');

    const searchData = (searchText, restaurants ) => ()=> {  
    if(searchText !== '') {
    const data = filterData(searchText,restaurants);
    setRestaurants(data); 
    if (data.length === 0) {
      setErrorMsg('No matches found ');
    }
  } else {
      if(errorMsg) setErrorMsg('');
      setRestaurants(restaurantList);
    }
  }
    return (
    <>
        <div className="search-container">
                <input type="text" className="search-input" placeholder="search here" value={searchInput} onChange={(e) => {
                    setSearchInput(e.target.value)
                } } />
                <button className="search-btn" onClick={searchData(searchInput, restaurants)}>search</button>
            </div>
            { errorMsg && 
      <div className="error-container" id="error">
        <span className="error-msg" id="error-msg">{errorMsg}</span>
      </div> 
    }
                    
       <div className="restaurant-list">
        {
            restaurants.map((restaurant) => {
                return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
            })
        }
            </div>
    </>
   )
}

export default BodyComponent;