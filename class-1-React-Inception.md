### 1)What is Emmet?

*  Emmet is used to help the developers to write boiler-plate with shortcuts.
*  Emmet is like an add-on to the text-editors,IDE like extensions which helps to write code faster (or) boost development. 
*  For Example: In an empty html file, type "!" and hit enter it will create a boiler-plate of html.
*  link : https://docs.emmet.io/cheat-sheet/

#### 2)Difference between library and framework

    Library
    *  A Library is set of helper functions/objects/modules which your application code calls for specific functionality.
    *  When you use a library, you are in charge of the flow of the application. You are choosing when and where to call the library. 
    *  Eg:React

    Framework
    *  Framework is defined as open and unimplemented functions or objects which the user write to create a custom application.
    *  When you use a framework, the framework is in charge of the flow. It provides some places for you to plug in your code, but it calls the code you plugged in as needed.
    *  Eg:Angular

### 3)What is CDN and why do we use it?

*  Stands for Content Delivery Network
*  CDN is a network of servers linked together with the goal of delivering content as quickly, cheaply, reliably, and securely as possible
*  In simple term cdn is a library file that is injected to our code to access the content like HTML pages, javascript files, stylesheets, images, and videos. 

    Benefits of using a CDN:
    
        1. Improving website load times
                - By distributing content closer to website visitors by using a nearby CDN server (among other optimizations), visitors experience faster page loading times.

        2. Reducing bandwidth costs
                -Through caching and other optimizations, CDNs are able to reduce the amount of data an origin server must provide, thus reducing hosting costs for website owners.

        3. Increasing content availability and redundancy
                -Because of its distributed nature, a CDN can handle more traffic and withstand hardware failure better than many origin servers.

        4. Improving website security
                - A CDN may improve security by providing DDoS mitigation, improvements to security certificates, and other optimizations.


### 4)What is React? Why is React known as React?

*  React is a library. It's not a framework that is developed by Facebook developer
*  React is named React because of its ability to react to changes in data. When the data in a React component changes, React will automatically re-render the component so that it reflects the new data. This makes it easy to create performant user interfaces that always look up-to-date.


### 5)What is cross-origin tag?

*  The crossorigin attribute sets the mode of the request to an HTTP CORS Request.
*  Web pages often make requests to load resources on other servers. Here is where CORS comes in.
*  A cross-origin request is a request for a resource (e.g. style sheets, iframes, images, fonts, or scripts) from another domain.

    CORS:-
*  CORS is mechanism that used additional HTTP headers to tell the browsers whether the specific web app can share the resources with other web app.
*  Both the web app should have different origin and need to follow CORS
*  Preflight is being called before the actual call.
*  Additional Header in HTTP CORS request : [ACCEPT-Control-Allow-Origin]

### 6)Difference between React and ReactDom

*  React library is responsible for creating views/UI.
*  ReactDOM library is responsible to actually render UI in the browser.

### 7)What is difference between react.development.js and react.production.js files via CDN?
	
*  react.production.js - These files contains code which are minified and optimized for production ready usage.
*  react.development.js -These files contains code which are more readable and developer friendly for development usage.

### 8)What is async and defer?

    Without async/defer :-
*  In this scenario when script tag is encountered, HTML parsing is stopped then scripts will fetched and executed.
*  Once the execution of scripts overed then the HTML parsing is continued.

    async:-
*  While the HTML parsing goes on, the script are fetched from the network asynchronously.
*  As soon as script are fetched and are available in the browser, HTML parsing gets stopped then script are executed.
*  Once the script gets executed, then HTML parsing continues.

*  It will not guarantee the order of execution of scripts so useful when referencing script like google analytics.
*  Not useful when scripts are depend on each others.

    defer:-
*  HTML parsing continues to go on and the scripts are executed in parallel
*  HTML parsing  continues to go on and script are executed once the HTML parsing gets completed. 
