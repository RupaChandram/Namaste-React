import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./assets/images/hunger-box.png"
import cart from "./assets/images/cart.png"

const Title = () => (
    <a href="/" >
        <img className="logo" src={logo} alt="Logo" />
    </a>
)
const styleObj = {
    color: "red"
}

const HeaderComponent = () => {
    return(
    <div className="header">
         <Title />          
            <div className="nav-items" key="user">
            <ul style={styleObj}>
                    <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
                <li>Cart</li>
               </ul>
            </div>      
        </div>
    )
}

const BodyComponent = () => { 
    return <h1>Body</h1>;
}

const FooterComponent = () => { 
    return <h1>Footer</h1>;
}
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
      
const Layout = () => (
    <React.Fragment>
        <HeaderComponent />
        <BodyComponent />
        <FooterComponent />
    </React.Fragment>
)
 
const root = ReactDOM.createRoot(document.getElementById("root"));
 
 root.render(<Layout />);