import logo from "../../assets/images/hunger-box.png"
import { useState } from "react";
import { Link } from 'react-router-dom';

export const Title = () => (
    <a href="/" >
        <img className="logo" src={logo} alt="Logo" />
    </a>
)

export const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
   
    return(
    <div className="header">
            <Title />      
            <div className="nav-items" key="user">
                <ul>
                    <li><Link style={{color: "#38171F" ,opacity:"0.9"}} to="/">Home</Link></li>
                    <li><Link style={{color: "#38171F" ,opacity:"0.9"}} to="/about">About</Link></li>
                    <li><Link style={{color: "#38171F" ,opacity:"0.9"}} to="/contact">Contact</Link></li>
                     {isLoggedIn? (<li><Link style={{color: "#38171F" ,opacity:"0.9"}}onClick={()=>{setIsLoggedIn(false)}} >Login</Link></li> ) : (<li><Link style={{color: "#38171F",opacity:"0.9"}}to="/login" className="login" onClick={()=>{setIsLoggedIn(true)}}> Logout </Link></li> ) }
                </ul>
            </div>      
        </div>
    )
}
export default Header;