## Theory Assignment: Chapter - 05 Let's Get Hooked (08/01/2023)
### What is the difference between named export and default export and * as export ?
Import & Export Modules are ES6 features that allows us to write reusable code.

* Named Export : 
  * Placing the keyword export before the component/variable/object/module anything that you want to export. 
  * There can be more than one named component in a file. 
  * While importing the Component name must be enclosed within {}.
  * Example :
  ```js
  export const TitleComponent = () => (
    <a href="/" >
        <img className="logo" src={logo} alt="Logo" />
    </a>)
  ```
  
  call : ``` import {HeaderComponent} from "../src/components/header-component/header"; ```
   `{HeaderComponent}` is not an object destructuring.

* Default Export :
  * Each component file can have only one export default. 
  * While importing just the Component name can be used (without any {})
  * Example :  
  ```js 
    export default TitleComponent;
    ```
    call : ``` import HeaderComponent from "../src/components/header-component/header"; ```
  
* Import Maps : 
  * While importing, the component can be given an alias name and then in that file, that component is referred only using that alias name.
  * Eg: as Named Export
```js  
  export const Footer = () => {
  return (
    <div className="footer-div">
      <span className="footer-text">Developed with <span className="red-heart">&#x2764;</span> by Harshitha</span>
    </div>
  )};
```
  How to import:
```js
import { Footer as MainFooter } from "./components/Footer";
```
  * Eg: as default export with namespace doesn't support.

* `*` as

  * import * as It is useful when we import all the components/modules functions from a file.
  * Eg: `import * as MainHeader from "./components/Header";`
  * In app.js, while importing use import * from MainHeader from './components/Header' . <MainHeader.Title></MainHeader.Title> is used to render Title Component in AppLayout Component.
  * Eg: <React.Fragment></React.Fragment>

### What is the importance of config.js file
* config.js file can be used to store the hardcoded values in one file, so that when the value needs to be modified, it can be easy to do the modification in one file.
* Example : All API Base URLs, CDN links, config data from backend, default values needed in the app are could be placed in config.js file.

### What are React Hooks ?
* React Hooks are new addition to React from React 16.8 version. Earlier, state and other component features could be handled only using Class Components. 
* But with version 16.8, React introduced a new pattern called Hooks. With React Hooks, we can use state, and other React features, in a functional component empowering functional programming in React.
* Hooks are JavaScript functions that manage the state's behaviour and side effects by isolating them from a component.
* React provides a bunch of standard in-built hooks like useState(), useEffect(), usecontext(), useReducer(), usecallback, useMemo(), useRef(), useLayoutEffect(), useDebugValue() and other additional hooks.

### Why do we need useState() hook ?
* useState() is one of the basic hooks functions which creates a state and assigns the initialState value passed in the parameter. It also provides a setState function, the state can be updated only using this function.
```const [state, setState] = useState(initialState);```
* During initial render, the returned state (state) is the same as the value passed as the first argument (initialState).
* The setState function is used to update the state. It accepts a new state value and enqueues a re-render of the component.
```setState(newState)```
* During subsequent re-renders, the first value returned by useState will always be the most recent state after applying updates.
* If we want to use the prev state value instead of the first value , we can pass a function to setState, it receives previous state and returns updated state.