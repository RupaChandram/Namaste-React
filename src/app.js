import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import * as Header from "./components/Header/Header";
import {Footer as Footer} from "./components/Footer/Footer"; /* Imported using Named Import Map */
import Body from "./components/Body/Body"; /* Imported using default export */
import {createBrowserRouter,Outlet,RouterProvider} from "react-router-dom"
import Error from "./components/Error/Error";
import Contact from "./components/Contact/Contact";
import RestaurantMenu from "./components/RestaurantCard/RestaurantMenu";
import Login from "./components/Login/Login";
import ProfileClass from "./components/Profile/ProfileClass";
import useOnline from "./utils/useOnline";
import NetworkError from "./components/Error/NetworkError";

const AboutComponent = lazy(() => import('./components/About/About'));
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
      
const Layout = () => {
    const isOnline = useOnline();
    if (!isOnline) {
        return <NetworkError />
    }
    return (
        <React.Fragment>
            <Header.Header />
            <Outlet />
            <Footer />
        </React.Fragment>
    )
}

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
                element: <Suspense fallback={<div> Please Wait... </div>}><AboutComponent /></Suspense>,
                children: [{
                    path: "profile",
                    element:<ProfileClass/>
                }]
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