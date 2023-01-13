import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./assets/images/food-logo.png"
import cart from "./assets/images/cart.png"




const Title = ()=>(
    <h1 id="title" key="title">
        <b>RicePIE</b>
        {/* <img src={logo} alt="RicePie" /> */}
    </h1>
)

const HeaderComponent = () => (
    
    <div className="header">
            <Title />          
            <div className="nav-items" key="user">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
                <li><img src={cart} alt="" /></li>
               </ul>
            </div>      
    </div>
)

const Layout = () => (
    <div>
    {
    /**
     * Header
     *  - Logo
     *  - Nav Items
     *  - cart
     * Body
     *  -search bar
     *  -RestaurantList
     *      -RestaurantCard
     *      -Name 
     *      -Rating
     *      -Cousines
     * Footer
     *  - links
     *  - copyright
     */
    }
        <HeaderComponent />
        </div>
)
 
const root = ReactDOM.createRoot(document.getElementById("root"));
 
 root.render(<Layout />);