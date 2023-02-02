import { useState,useEffect } from "react";
import { GET_RESTAURANTS } from "../config/config";
import { filterData } from "./helper";

const useRestaurants = () => {
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [errorMsg, setErrorMsg] = useState(''); 

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
        const data = filterData(searchText, allRestaurants);
        setFilteredRestaurants(data); 
        
    if (data.length === 0) {
      setErrorMsg('No matches found ');
    }
  } else {
      if(errorMsg) setErrorMsg('');
      setFilteredRestaurants(allRestaurants);
    }
}
    return {
        'allRestaurant': allRestaurants,
        'filteredRestaurants': filteredRestaurants,
        'searchData': searchData,
        'errorMsg':errorMsg
        
    }
}

export default useRestaurants;