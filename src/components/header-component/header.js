import logo from "../../../assets/images/hunger-box.png"
import { useState } from "react"

export const TitleComponent = () => (
    <a href="/" >
        <img className="logo" src={logo} alt="Logo" />
    </a>
)

export const HeaderComponent = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
   
    return(
    <div className="header">
            <TitleComponent />      
            <div className="nav-items" key="user">
                <ul style={{color: "#3d4152"}}>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                     {isLoggedIn? (<li className="login" onClick={()=>{setIsLoggedIn(false)}} >Login</li>) : (<li className="login" onClick={()=>{setIsLoggedIn(true)}}>Logout</li>) }
                </ul>
            </div>      
        </div>
    )
}
export default HeaderComponent;