import React from "react";
import ReactDOM from "react-dom/client";
import * as Header from "./components/Header/Header";
import {Footer as Footer} from "./components/Footer/Footer"; /* Imported using Named Import Map */
import Body from "./components/Body/Body"; /* Imported using default export */
import {createBrowserRouter,Outlet,RouterProvider} from "react-router-dom"
import About from "./components/About/About";
import Error from "./components/Error/Error";
import Contact from "./components/Contact/Contact";
import RestaurantMenu from "./components/RestaurantCard/RestaurantMenu";
import Login from "./Login/Login";

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
        <Header.Header />
        <Outlet />
        <Footer />
    </React.Fragment>
)

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element:<Body/>
            },
            {
                path: "/about",
                element:<About/>
            },
            {
                path: "/contact",
                element:<Contact/>
            },
            {
            path     : "/restaurant/:resId",
            element  : <RestaurantMenu />
            },
            
        ],
    },
    {
                path: "/login",
                element:<Login/>
    }
]);
 
const root = ReactDOM.createRoot(document.getElementById("root"));
 
 root.render(<RouterProvider router={appRouter} /> );