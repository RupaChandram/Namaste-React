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
const list1 = React.createElement(
  "li",
  {
    id: 'list1'
  },
  `Command to initialize the npm : npm init `
);
const list2 = React.createElement(
  "li",
  {
    id: 'list2'
  },
  `Command to install parcel : npm install parcel `
);
const list3 = React.createElement(
  "li",
  {
    id:'list3'
  },
  `Command to install react : npm install react `
)
const list4 = React.createElement(
  "li",
  {
    id: 'list4'
  },
  `Command to install react-dom : npm install react-dom `
);
const list5 = React.createElement(
  "li",
  {
    id:'list5'
  },
  `Command to ignite the app through parcel : npx parcel index.html`
)
 const heading3= React.createElement(
   "ul",
   {
     id: "description",
   },
   [list1,list2,list2,list4,list5]
);

 const container = React.createElement(
   "div",
   {
     id: "container",
   },
   [heading, heading2,heading3]
);
 
const root = ReactDOM.createRoot(document.getElementById("root"));
 
 root.render(container);