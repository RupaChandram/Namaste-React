import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Before JSX, elements are difficult to create. It would become a huge mess. 
 * Below is an example of creating 3 lists.
 * It's not redable. 
 * Difficult to write.
 * Lengthy
 * That's why JSX comes into the picture.*/

const heading = React.createElement('h1',
    {
        id: "title",
        key:"101"
    },
    "Laying The Foundation");

const heading2 = React.createElement(
   "h2",
   {
       id: "h2",
       key: "102"
   },
   [React.createElement('ul',
    {
        id: "ul",
        key:"ul1"
    },
    React.createElement('li',
    {
        id: "list1",
        key:"1011"
    },
    "Babel"), React.createElement('li',
    {
        id: "list2",
        key:"1012"
    },
    "Key"), React.createElement('li',
    {
        id: "list3",
        key:"1013"
    },
    "Build Scipts"))]
 );
 
 const container = React.createElement(
   "div",
   {
     id: "container",
   },
   [heading, heading2]
);

// React.createElement => object => HTML(Dom)
console.log('container', container);
 
const root = ReactDOM.createRoot(document.getElementById("root"));
 
 root.render(container);