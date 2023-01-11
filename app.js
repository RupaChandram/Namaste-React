import React from "react";
import ReactDOM from "react-dom/client";
import Logo from "./assets/images/logo.png";
import User from "./assets/images/user.png"

//Assignment 1
/* Nested header element with h1,h2,h3 using React.createElement() inside div with class-title */

const heading1 = React.createElement('h1', { id: "heading1" }, "Laying The Foundation");
const heading2 = React.createElement('h2', { id: "heading2" }, "Nested Header using React.createElement()");
const heading3 = React.createElement('h3', { id: "heading1" }, "h1,h2,h3 inside div with title");

const main = React.createElement('div', { className: "title" },[heading1,heading2,heading3] );

/* Nested header element with h1,h2,h3 using JSX */

const jsxElem = (
    <div>
        <h1>Laying The Foundation</h1>
        <h2>Nested Header using JSX</h2>
        <h3>h1,h2,h3 inside div with title</h3>
    </div>
    
)

/* Nested header element with h1,h2,h3 using JSX React Element and pass attributes */

const attributedJSX = (
    <div className="title">
        <h1 id="heading1">Laying The Foundation</h1>
        <h2 id="heading2">Nested Header using JSX with Attributes</h2>
        <h3 id="heading3">h1,h2,h3 inside div with title</h3>
    </div>
    
)

/* Nested header element with h1,h2,h3 using Functional Component */

const Header = function () {
    return (
        <div>
            <h1 id="heading1">Laying The Foundation</h1>
            <h2 id="heading2">Nested Header Functional Component</h2>
            <h3 id="heading3">h1,h2,h3 inside div with title</h3>
        </div>
    )
}

// Assingment 2
/**
 * add a logo on the left
 * add a search bar in the middle
 * add a user icon on the right
 * add css to make it nice */

const HeaderComponent = () => (
    
    <div className="header">
            <div className="logo">
            <img src={Logo} key="logo" alt="Logo" />
            </div>
            <div className="search">
                <input type="text" key="search" className="searchbar" placeholder="search here" />
            </div>         
            <div className="user" key="user">
                <img src={User} alt="user" key="user-img" />
            </div>      
    </div>
)

const Main = () => (
    <div className="main">
        <HeaderComponent />
        {main}
        <Header />
        {jsxElem}
        {attributedJSX}
    </div>       
)
 
const root = ReactDOM.createRoot(document.getElementById("root"));
 
 root.render(<Main />);