import React from "react";
import ReactDOM from "react-dom/client";
//default export
import HeaderComponent from "../src/components/header-component/header";
import FooterComponent from "../src/components/footer-component/footer";
import BodyComponent from "../src/components/body-component/body"

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