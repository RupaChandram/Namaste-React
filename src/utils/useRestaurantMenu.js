import { useState,useEffect } from "react";
import { GET_RESTAURANT_MENU } from "../config/config";

const useRestaurantMenu = (resId) => {
    const [restaurant, setRestaurant] = useState(null); 
    
     useEffect(() => {
        getRestaurantInfo();
    }, []);
    
    const getRestaurantInfo = async () => {
        try {
            const response = await fetch(GET_RESTAURANT_MENU + resId);
            const json = await response.json();
            setRestaurant(json?.data)
        } catch (error) {
            console.log(error);
        }
    };   
    return restaurant;
}
export default useRestaurantMenu;