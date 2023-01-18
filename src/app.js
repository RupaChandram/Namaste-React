import React from "react";
import ReactDOM from "react-dom/client";
import * as MainHeader from "../src/components/header-component/header"; 
import {FooterComponent as Footer} from "../src/components/footer-component/footer"; /* Imported using Named Import Map */
import BodyComponent from "../src/components/body-component/body"; /* Imported using default export */

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
        <MainHeader.HeaderComponent />
        <BodyComponent />
        <Footer />
    </React.Fragment>
)
 
const root = ReactDOM.createRoot(document.getElementById("root"));
 
 root.render(<Layout />);