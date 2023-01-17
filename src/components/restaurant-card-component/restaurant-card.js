import { CLOUD_IMAGE_CDN } from '../config/config';

const RestaurantCard = ({ name, cuisines, lastMileTravelString, avgRating, cloudinaryImageId }) => {
    return (
        <div className="card">
            <img src={CLOUD_IMAGE_CDN+cloudinaryImageId} alt="" />
            <h3 className="name">{name}</h3>
            <h5 className="description">{cuisines.join(', ')}</h5>
            <h5 className="description"><span className= {(avgRating && avgRating > 3)? "card-rating bg-success" : "card-rating bg-danger"}>{avgRating}</span><span className="distance">{lastMileTravelString}</span></h5>
            
        </div>
    )
}

export default RestaurantCard;