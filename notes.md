### what are empty brackets(<></>)?
* React.Fragment
* React Fragment is a feature in React that allows you to return multiple elements from a React component by allowing you to group a list of children without adding extra nodes to the DOM.
* We can write multiple element without inserting extra div.
* It comes from our react library.
* How to use: <React.Fragment></React.Fragment>
* Shothand: <></>

### Virtual DOM
* Representation of actual dom.
* Representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM. 
* This process is called reconciliation.

### Reconciliation
* The algorithm React uses to diff one tree with another to determine which parts need to be changed.

### React Fiber
* Fiber is the new reconciliation engine in React 16. Its main goal is to enable incremental rendering of the virtual DOM.
* React Fiber is an ongoing reimplementation of React's core algorithm. It is the culmination of over two years of research by the React team
* [React Fiber](https://github.com/acdlite/react-fiber-architecture)
### diff algo