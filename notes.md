### Topics that are covered: 
* Recap of previous chapter
  * config-driven-ui
  * useState()
  * Virtual DOM
  * Diffing Algorithm
  * React Fiber
  * Why react is fast?
  * Hooks
* Monolithic architecture
* Microservices archtecture
* How different projects get connected?
* how do we call the api in JS
* useEffect hook
* async
* optional chaining
* Shimmer Effect
* UX/UI
* Conditional Rendering
* filter states varibles
* How do you avoid rendering component?
  * early render
* References


### Recap:
- Created food ordering app kind of swiggy app
- We can see the list of restaurant.
- Implemented Config-driven UI: powerful way of building web app. Every big companies uses this.
- useState for restaurant

### config-driven-ui
- config is nothing but a json object. Either we get that config from the backend or we pass the hardcoded config in a proper manner in frontend app.
- any config can power the app. 
- Generally we get config from api call
- Eg: config.js

### useState()
- Hooks are normal JS function
- FB developer gives extra functionality to this function
- Whenever there is something changes on the UI, we need local state to handle that.
- eg. If I have created one title and we want to change the title on the click button then it won't give proper output if we have create normal variable. React doesn't track normal variable. We need to create state variable for that.
- This can update the title but then we need to keep our ui in the sync with the data. We need to keep the ui in sync with state.
- For that sync, we need state.

- use:
    - import with named import

```js
import {useState} from 'react';
```
 -  Array destructuring: React retuns array for useState. Gives 2 things
    1. state variable
    2. function that would modified the state variable
 - you can pass intial value to put in this variable

```js
const [title,setTitle]=useState("Food Villa");
<button onClick={()=>setTitle("HungerBox")}>click</button>
```
 - flow:
    - Intial value is Food Villa
    - Once we click on the button setTitle() gets called.
    - it changes the value with reconcilliation
    - it rerenders the component. Check with console log inside the component.
    - just update the title only 

### Virtual DOM
- Representation of actual DOM
- Elements are represented by a tree.
- kind of JS object.
- Whenever there is change in the state, tree get modified and react will rerender 

### Diff algo
- Reconcilliation uses diff algo
- current tree is compared with the updated tree
- whatever the difference is there that is reflected on the DOM

### React Fiber
- updated reconcilliation algorithm

### Why react is fast?
- fast DOM manipulation because of diff algo/react fiber

### Hooks
- Normal javascript function.
- written by facebook developer.
What we are going to explore:

### Monolithic architecture
- In old days, there used to be single huge application. 
- Eg: In 1 project- same project for ui, same for backend, api etc
- deploy: omggggg. for single button changes, it needs to be deploy whole project. Such a big mess.
- So this type of application is known as monolithic

### Microservices archtecture
- Instead of having 1 project, now we can have small small projects.
- eg: separate project for authentication, separate for sms, separate for backend, logs, apis even databaseds can have replica.
- advantage: easier to maintain, easy to deploy, easy to check, separation of concern, single responsibilities, can be used different language like ui-react,log-golang, authentication- python etc.

#### HungerBox is ui- microservice

### How different projects get connected?
- mapped with different port numbers with same domain name sometimes with different domain names as well
### how do we call the api in JS
- fetch :  function of Window object, pre built, browser api, pass api and call the api.
- promises
- ajax
### Make the api call
- let's take an example : I have a body componenet where I have listed the restaurants and there is a filter function on button click
inside the body component then we should not call the api inside the component because on every click it will rerendere the component and if you have called your api inside that component then on every click, api will be called. Basically, components get rerender on every small change.
- when to call: As when my page loads, call an api and fill the data.
- don't call inside component because for every change it get's executed.

loads--> api--> render the page(bad approach)
loads ---> render ----> api---> update ui (good approach)
- use useEffect hook 

### useEffect hook
- hook (function)
- use as function by passing 2 parameters 
    1. another function(callbacks): this callback function would be not called immediately but whenever my useEffect would be called.
    2. dependency array: when you don't to rerender on every changes then pass dependency.
     
- import it via named import from react library
- there are 2 times when component rerenders either state changes or props changes.
- whenever it rerenders ,useEffect() gets called
- When you don't want to get called in every rerender then pass the dependecy array

```js
useEffect(() => {
  console.log('hi');

},[searchText])
```
It would be depends on searchText. Whenever searchText changes, it gets executed.

```js
useEffect(() => {
  console.log('hi');

},[])
```
If I keep the dependency array empty then it will execute just once `after initial render` because it is not dependent on anything

- empty dependency array===> once after rerender
- dependency array [searchText]===> once after initial render + everytime when searchText gets changed.

### async
- The keyword async before a function makes the function return a promise
```js
async function myFunction() {
  return "Hello";
}
myFunction().then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
);
```
### optional chaining
- The optional chaining (?.) operator accesses an object's property or calls a function. If the object accessed or function called is undefined or null, it returns undefined instead of throwing an error.
```js
const adventurer = {
  name: 'Alice',
  cat: {
    name: 'Dinah'
  }
};

const dogName = adventurer.dog?.name;
console.log(dogName);
// Expected output: undefined

console.log(adventurer.someNonExistentMethod?.());
// Expected output: undefined
```
### Shimmer Effect
- Basic skeleton that we load before loading the actual data
- generally used in the place of loading icon like spinning loader.
- Shimmer effects are loading indicators used when fetching data from a data source that can either be local or remote. It paints a view that may be similar to the actual data to be rendered on the screen when the data is available.

### UX/UI
- Let's take an example. Earlier people use the loading icon like spinner or progress bar before the data load.
- Suddenly ui changes with data.
- This is bad user experience design
- Human brain likes images (Human psycology)
- We don't want lot of fluctuation in the UI
- Psycologis figured out to load empty boxes. This is known as ux design principle.
### Ternary operator
- The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy. This operator is frequently used as an alternative to an if...else statement.
```js
const age = 26;
const beverage = age >= 21 ? "Beer" : "Juice";
console.log(beverage); // "Beer"
```
### Conditional rendering
- link:
  - https://reactjs.org/docs/conditional-rendering.html
  - https://www.digitalocean.com/community/tutorials/7-ways-to-implement-conditional-rendering-in-react-applications

- Conditional rendering is a term to describe the ability to render different user interface (UI) markup if a condition is true or false. 
- In React, it allows us to render different elements or components based on a condition.
- you can conditionally render JSX using JavaScript syntax like if statements, &&, and ? : operators.
- Few types of conditional rendering
  1. if statements 
```js
{ if(errorMsg) { (

{errorMsg}
) } }

```
  2. && operator : if the condition is true, display the right-side code else display nothing.
{ errorMsg &&

{errorMsg}
}
  3. ? : operator - If allRestaurants is empty, then show Shimmer Component else render RestaurantCard Components
```js
const BodyComponent = () => { 
    return (allRestaurants.length===0)?<Shimmer/> : (
    <>
    <h1>Restaurant rendered</h1>
    </>
   )
}
```
### filter states 
- We need two states for this because earlier I created only one state variable and the problem is when I was doing 1st search and le's say I have 20 restaurants then it was searching form 20 restaurnats and give let's say 5 restaurants but when I was doing second search, it was searching from 5 restaurants not 20. that's why we need a copy of restaurant
- Two states : [allRestaurant,setAllRestaurnat], [filteredRestaurant, setAllRestaurant]
- When I load the page then I need to show all restaurant but we have to display always filtered restaurants so we need to set fetched data to filtered restaurant and all restaurants.
- Need to filter from allRestaurants so we have to pass allRestaurants on search function.

### How do you avoid rendering component
- through optional chaining
```
 return (allRestaurants?.length===0)?<Shimmer/> : (<h1>Hello<h1>)
```
- through if
- early return : When we returning 
```js
if(!allRestaurants) return null; //not render component
```
### Reconcilliation
- written in the React core
- diff algo does the saame work in react native
### ReactDom
-  to update the dom
### References
- [conditional rendering](https://reactjs.org/docs/conditional-rendering.html)
- [7 ways to implement coditional rendering](https://www.digitalocean.com/community/tutorials/7-ways-to-implement-conditional-rendering-in-react-applications)
- [optional chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
- [aync await](https://javascript.info/async-await)
- [Ternary operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
