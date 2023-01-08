
    //Through Javascript
        // const elem =document.createElement('h2');
        // elem.innerHTML="Hello heading test";
        //  const heading=document.getElementById('root');
        //  heading.appendChild(elem);

    //Through React
    
    const heading = React.createElement("h1", {}, "Heading 1");
    const heading2 = React.createElement("h1", {}, "Heading 2");
    const container = React.createElement("div", {}, [ heading,heading2 ]);
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(container);