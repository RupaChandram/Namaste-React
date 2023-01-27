import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import { GET_RESTAURANT_MENU,CLOUD_IMAGE_CDN,ITEM_IMG_CDN  } from "../Config/config";
import { MenuShimmer } from "../Shimmer/Shimmer";

const RestaurantMenu = () => {
    const { resId } = useParams();
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

    return !restaurant ? (
    <MenuShimmer />
    ) : (
    <div className="menu-container">
        <div className="restaurant-menu">
            <div className="restaurant-summary">
                <img className="restaurant-img" src={ CLOUD_IMAGE_CDN  + restaurant?.cloudinaryImageId } alt={restaurant?.name}/>
                <div className="restaurant-summary-details">
                        <h2 className="restaurant-title">{restaurant?.name}</h2>
                        <p className="restaurant-tags">{restaurant?.cuisines.join(", ")}</p>
                         <div className="restaurant-details">
                            <div className="restaurant-rating">
                                <svg className="svg" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path></svg>
                                <span>{restaurant?.avgRating}</span>
                                <div className="separation">|</div>
                                <span>{restaurant?.sla.slaString}</span>
                                <div className="separation">|</div>
                                <span>{restaurant?.costForTwoMsg}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                    <div className="restaurant-menu-content">
                        <div className="menu-items-container">
                            <div className="menu-title-wrap">
                                <h3 className="menu-title">Recommended</h3>
                                <p className="menu-count">{Object.keys(restaurant?.menu?.items).length} ITEMS</p>
                        </div>
                        <div className="menu-items-list">
                            { Object.values(restaurant?.menu?.items).map( item => 
                                <div className="menu-item" key={item?.id}>
                                <div className="menu-item-details">
                                    <h3 className="item-title">{item?.name}</h3>
                                    <p className="item-cost">{(item?.price > 0) ?
                                    new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR'}).format(item?.price/100 ): " " } </p>
                                    <p className="item-desc">{item?.description}</p>
                                </div>
                                <div className="menu-img-wrapper">
                                    { item?.cloudinaryImageId  && <img className="menu-item-img" src={ ITEM_IMG_CDN  + item?.cloudinaryImageId } alt={item?.name}/> }
                                    <button className="add-btn"> ADD +</button>
                                </div>
                                </div>
                            )}
                    
                        </div>
                    </div>
                </div>
                 <div className="cart-widget"></div>
                
        </ div>
    )
};

export default RestaurantMenu;
