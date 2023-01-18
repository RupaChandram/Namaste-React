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
* link: [React Fiber](https://github.com/acdlite/react-fiber-architecture)

### Diffing algorithm
* How is React so fast? So amenable? So receptive? The answer lies in the diffing algorithm
* React uses a method called the diffing algorithm to compare the old DOM to the new. 
* Diffing is a heuristic algorithm based on two assumptions:
  1. Two elements of different types will produce different trees.
  2. The developer can hint at what elements will remain stable across renders with a key prop. (This is why React is always warning us to include keys in our props).
* link: [Diffing algorithm](https://javascript.plainenglish.io/reacts-diffing-algorithm-1a64cfefa4e0)

### Importance of src folder
* It's not necessary to create src folder in your app.
* Everything can be done inside your project folder
* But we need to wrap our code into a proper folder structure.
* That gives us better modular approach.
* That is how your code becomes modular and findable
* Otherwise when there are thousand files in your app, Sometimes your app goes very big with hunderds of files. so it becomes very difficult to find things out.
* This is the common convention which is used in the industry. It's not required but we always practice so that all developers can relate to it and pick it up the file organization. 

### Is there any recommended way to structure the folder?
* React doesn’t have opinions on how you put files into folders. That said there are a few common approaches popular in the ecosystem you may want to consider.
  1. Grouping by features or routes: One common way to structure projects is to locate CSS, JS, and tests together inside folders grouped by feature or route.
```
common/
  Avatar.js
  Avatar.css
  APIUtils.js
  APIUtils.test.js
feed/
  index.js
  Feed.js
  Feed.css
  FeedStory.js
  FeedStory.test.js
  FeedAPI.js
```
  2. Grouping by file type
 ```
  api/
  APIUtils.js
  APIUtils.test.js
  ProfileAPI.js
  UserAPI.js
components/
  Avatar.js
  Avatar.css
  Feed.js
  Feed.css
  FeedStory.js
  FeedStory.test.js
  Profile.js
  ProfileHeader.js
  ProfileHeader.css
```
* Avoid too much nesting
* If you’re just starting a project, don’t spend more than five minutes on choosing a file structure. Pick any of the above approaches (or come up with your own) and start writing code! You’ll likely want to rethink it anyway after you’ve written some real code.
* link : [File Structure](https://reactjs.org/docs/faq-structure.html)

### steps to create component
* Create a file.
* Write your code inside that file.
* Export that file.
* import in other component.

### How to export
* Two ways of exporting
  * Default export
    ```js 
    export default TitleComponent;
    ```
    call : ``` import HeaderComponent from "../src/components/header-component/header"; ```

  * Named export
  ```js
  export const TitleComponent = () => (
    <a href="/" >
        <img className="logo" src={logo} alt="Logo" />
    </a>)
    ```
  
  call : ``` import {HeaderComponent} from "../src/components/header-component/header"; ```
   `{HeaderComponent}` is not an object destructuring.

*  if you want to export everything from a file then use *
eg: `import * as obj from "../src/components/header-component/header";`
use: <obj.Header/>
That's why we write <React.Fragment><React.Fragment/>

* if you want to import 2 or 3 things from a file.

eg: `import {TltleComponent, HeaderComponent} from "../src/components/header-component/header";`

* If you want to use named and default together

eg: `import TltleComponent, {HeaderComponent} from "../src/components/header-component/header";`

* You can rename (namespace) but don't do it. It's a best practice to have same name as exported name.

eg: `import NewHeader from "../src/components/header-component/header";`

* You can write .js or .jsx or .ts or .tsx in the path

eg: `import Header from "../src/components/header-component/header.js";`
eg: `import Header from "../src/components/header-component/header.jsx";`

* When you are in the same file you don't need to export.

### State
* Every component in a react maintans a state
* You can put the variable with its state, if you want to change a variable in react.

### useState hook
* Written by facebook developer.
* To create local state vaiable, we use useState.
* Returns an array and first element would be your variable name.
* import from react library with named export.
* React can't keep tracking of each variable. React will track the state variables then react will destroy existing one automatically rerender the component with the help of reconcilliation (diffing algorithm). It means When you creating the variable using useState, React watches this variable or keeps a track of that variable and whenever you changes the variable then component rerenders.
* There is one way data binding in react not two way like angular so we need useState.
* Good for optimization

Normal variable in JS

```js
const searchText="KFC";
```
Variable in React

```js
import {useState} from "react";
const [searchText,setSearchText]=useState("KFC");//[variable name, function to update the variable]
```
### Hooks
* just a normal function. That's why we call it as `useState()` but it has specific function for it.
* import it as named export

### Flow of Search function with useState
* When you click on search button, it sees the current search text. let's say "King".
* It pass "King" as well as list of all the restaurant to my filterData().
* My filterData() find out the data if exists in restaurant list.
* filterData gives filtered restaurant list to onClick function.
* Then I set my data to my restaurants
* Then component rerenders.

### References
* [Reconcilliation](https://reactjs.org/docs/reconciliation.html)
* [React Fiber](https://github.com/acdlite/react-fiber-architecture)
* [Diffing algorithm](https://javascript.plainenglish.io/reacts-diffing-algorithm-1a64cfefa4e0)
* [File Structure](https://reactjs.org/docs/faq-structure.html)
* [useState](https://reactjs.org/docs/hooks-state.html)