import React from "react";
import ReactDOM  from "react-dom/client";

const heading = React.createElement('h1', { id: "title" }, "Learn to ignite the app");
const heading2 = React.createElement(
   "h2",
   {
     id: "title",
   },
   "Parcel : The buldler"
 );
 
 const container = React.createElement(
   "div",
   {
     id: "container",
   },
   [heading, heading2]
);
 
const root = ReactDOM.createRoot(document.getElementById("root"));
 
 root.render(container);