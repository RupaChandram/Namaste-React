import offline from '../../assets/images/offline.jpg'
const NetworkError = () => {
    return( <div className="offline-container">
                <img className="offline" src={offline} alt="OFFLINE" />
                <div className="offline-description">
                    <div className="description"><h2>Ooppsssssss...!!!! Looks like you are offline.</h2></div>
                    <div className="description"><h3>Please check your internet connection....!!!!</h3></div>     
                {/* <ChromeDinoGame /> */}
        </div>
    </div>)
}

export default NetworkError;