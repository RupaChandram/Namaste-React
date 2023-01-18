### Chapter 02-Igniting the app 
### Build our own react app without using `npx create react-app`
* how to initialize npm : npm init -y (skip the question if you add -y)
    * npm init will ask you a lot of questions like package version, description, entry point, test command, github repository.  
* how to install parcel : `npm install -D parcel`
    * -D/--save-dev means : We are installing parcel as a dev dependency
* How to install react : npm install react
* How to install react-dom : npm install react-dom

### Ignite app
* command: `npx parcel index.html`
    npx:execute using npm

### Import React, React-dom
`import React form 'react';`
`import ReactDOm from react-dom/client`

* Needs to give type="module" in the script tag.
`<script type="module" src="app.js"></script>`

### Commands:
    Command to initialize the npm : npm init 
    Command to install parcel : npm install parcel
    Command to install react : npm install react
    Command to install react-dom : npm install react-dom
    Command to ignite the app through parcel : npx parcel index.html
    Command to run your browser on https mode: npx parce index.html --https



