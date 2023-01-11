import React from "react";
import ReactDOM  from "react-dom/client";

const title = React.createElement('h1',
    {
        id: "title",
        key:"101"
    },
    "Laying The Foundation");

/**
 * You can write as React Element
 * you have to render like this root.render(heading);
 * 
 */

const reactelem =  (
        <div>
            <h1>React Element</h1>
            <h2>Not a functional Component</h2>
        </div>
    )


/**
 * if there age two elements inside return, it will throw an error
 * you need to wrap it inside div
 * Names start with capital letter
 * render like :root.render(<heading />);
 * You can write anything ind=side curly braces like passing function, vvariables, console log
 */

const Heading = () => {
    return (
        <div>
             {title}
            <h2>Functional Component using JSX Heading 1</h2>
            {reactelem}
            {Heading2()}
            <Heading2 />
            <Heading3 />
            {1+4}
        </div>
       )           
}

/**
 * You can write it without return
 * 
 */

const Heading2 = () => (
    <div>
        <h1>Functional Component Heading 2</h1>
        <h2>Without return</h2>
    </div>
);   

/**
 * You can write it as a normal function
 * 
 */

const Heading3 = function () {
    return (
        <div>
            <h1>Functional Component Heading 3</h1>
            <h2>As a normal function</h2>
        </div>
    )  
};   

 
const root = ReactDOM.createRoot(document.getElementById("root"));
 
 root.render(<Heading />);