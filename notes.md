### Topics that are covered: 
- CORS Plugin
- HOOKS
- useEffect
- Component inside component
- useState inside if else
- useState in for loop
- useState
- Can I use more that than one useEffect
- How should we import images?
- When to use extra packages
- Formik
- React Router
- emmet to generate component
- Name of other routers
- Routing Configuration
- Error Page
- Disadvantage of anchor tag
- SPA
- Two types of routing /rendering
- Link
- Children in routing
- Outlet
- Dynamic Routing
- Break your component into small logic
- Destructuring
- Object.values()
- Important Points
- References

 ### CORS Plugin
 - Alllow CORS: Acces-Control-Allow-Origin
  
  ### HOOKS
  - Hooks are functions that allows us to use state and life cycle methods inside functional components.
  ### useEffect
  - React gave us this hook
  - useEffect is called after the component renders.
  - Reason why we use:
   - Basically if we want some piece of code to be executed after the rendering of the component then we can put that code inside the useEffect().
  - It has 2 params
   - Callback : gets called after component rendered
   - dependency array
- syntax:
```js
useEffect(()=>{
   getRestaurants(); ----> It will be called after rendering of component.
},[]);
```
- second param of useEffect:
   - 1. Empty array
```js
useEffect(()=>{
   getRestaurants(); ----> It will be called after rendering of component.
},[]);
```
      - How many time will it be called : only once after initial render of component
   - 2. state variable in dependency array
```js
useEffect(()=>{
   getRestaurants(); 
},[searchText]);---> state variable in dependency array
```
      - Whenenver seaarchText changes, it would be called after rendering of the my component
      - sequence:
         Component will render---> useEffect() will be called ---> if any changes in state variable, will render again
      - our app sequence
         initial render of component---> useEffect() is called--> setRestaurant() will be executed --> component rerenders --> fill the data in the component
   - 3. What if we don't have array
```js
useEffect(()=>{
   getRestaurants(); 
});---> No dep array (It will be called after each render of the component)
```
      - This a valid code.
      - It means we don't have dependency array
      - It is not dependent on anything.
      - useEffect() behavior is to get called after the component render. Every time my component will render then my useEffect will render. 

### Component inside component
- Never create component isnside component. 
- You can compose but never create
- Reason : Because at every render, it will create component unnecessarily.

### useState inside if else
```js
if(){
   const [search, setSearch]=useState("");
}
```
- Don't put useState inside if block.
- Reason : 
   - useState has it's own variable (local).
   - React doesn't like inconsistency
   - In this case react won't know whether `search` will ever be there or not.
   - Not an optimized code.
### useState in for loop 
```js
for(){
   const [search, setSearch]=useState("");
}
```
- Never write useState in for loop
- Reason:
   - React doesn't like inconsistency
   - It should exactly konw how many search text will be there
   - Not a good way. You should not create lots of ssearchText
   - Suppose you initialize with 0 and looping till 10 then it will 10 searchText but it doesn't make any sense to create 10 searchText. Never do that

### useState
- It's a hook which react gives you to create local state variable inside your functional component.
- Never write useState outside your functional component

### Can I use more that than one useEffect
- yes, completely fine.
```js
const Body =()=>{

   useEffect(()=>{
   getRestaurants(); 
},[]);

useEffect(()=>{
   getRestaurants(); 
},[searchText]);
}
```
### How should we import images?
- Best way to keep the images inside assets.
- assets shoud be inside src.
```
src 
 |
 ----> assets
         |
         ----> images
                  |
                  ----->cart.png
                  ----->logo.png

```
steps:
1. `import Logo from "../assets/images/logo.png"`
2. use in img tag
```js
const Title=()=>{
<img src={Logo} alt="logo"/>
}
```
- You can load images via CDN 
   - Great place to host images through CDN.
   - Reason:
      - CDN is faster
      - Caches images
      - Returns it very fast
      - 100% up time
      - optimizes things
### When to use extra packages
- Using npm package (npm i react-shimmer) 
 - For everything, we should not import packages.
- If you try to use extra packages, there is n number of packages would be included.
- Eg: [is-odd]: package to find out the number whether it's odd ot not. For this simple function, we should not include packages
- When there is simple thing, we can code. Don't packages.
- Shimmer in our case is dummy restaurant card.
- When the things get complex, we should import packages.

### Formik
- Great library for creation of form.
- Quotation: Build form in React without tear.

### React Router
- Latest version is 6.0
- command: `npm i react-router-dom` or `npm install react-router-dom`
- 207 packages

### emmet to generate component
- rafce + enter
 
 ### Name of other routers
 - Create Hash Router
 - Create Memory Router
 - Router Provider

### Routing Configuration
- create a configuration
- There are other routers but recommended way is Create Browser router
- steps:
1. import creatBrowserRouter from react-router-dom
2. Outside the component, call createBrowserRouter and assign it to a variable. 
3. It takes some configuration as an array of objects. Always create route below the component.
4. Import RouterProvider from react-router-dom
5. Use router object as a param of RouterProvider
- React Router Dom gives a great error router page.
- go to [app.js](https://github.com/RupaChandram/Namaste-React/blob/class-7-finding-the-paths/src/app.js) for reference.

### Error Page
- If there is a mistake in the route, it can catch error and display the error
```js

{
   path:"/".
   element:</Home>,
   errorElement:<Error/>
}
```
- Whatever you want to load, give it to element on certain path
- in case of error or wrong path, give it errorElement.
- Some more information of error page
   - import {useRouteError} from 'react-router-dom';---> Hook (function)
```js
const Error = () => {
    const err = useRouteError();
    console.log(err);
};
```
- useRouteError will give you the information what types of error you have.
- It won't show error in the console.

### Disadvantage of anchor tag
- When you click on anchor tag, it refresh the page
- Bad experience

### SPA
- Single Page Application
- In older days, for navigation purpose, pages reload or network reloads etc.
- SPA gives the facility to navigate to other pages easily without refresh the page.
### Two types of routing /rendering
1. Client-side : navigation happens without any network call.
2. Server-side : In server-side rendering, all pages comes from server via navigation.

### Link
- Don't use anchor tag for navigation purpose because it reloads the page when you click over tag.
- React Router Dom gives `Link`
```
import {Link} from 'react-router-dom';

```
- instead of `href`, use `to`.
```html
<Link to="" >About</Link>
```
- Remix developers developed Link tag.
- Link is using <a></a> behind the scene but with proper react function. React router dom keeps track of all these links
### Children in routing
```js
 {
        path: "/",
        element: <Layout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element:<Body/>
            },
        ]
 }
```
### outlet
- all the childern will go into the outlet according to the route.
- outlet is like a placeholder.
- Configuration based rendering
```html
<Header/>
<outlet/>
<Footer/>
```
### Dynamic Routing
```js
{
path     : "/restaurant/:resId",
element  : <RestaurantMenu />
}

```
- useParams:
   - prefix use means Hooks.
   - to read the param
      - import {useParam} from 'react-router-dom';
      - inside component
      `const {resId}=useParam();`
### Break your component into small logic
- more component is better according to logic
- Benefits:
   - Modular
   - Cleaner code
   - Testable
   - Maintainable
   - Reusable
### Destructuring
- https://www.geeksforgeeks.org/destructuring-of-props-in-reactjs/
### Object.values
- Gives the alue in array
- conversion of object to array
- The Object.values() static method returns an array of a given object's own enumerable string-keyed property values.
```js
const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};

console.log(Object.values(object1));
// Expected output: Array ["somestring", 42, false]
```
### Important points
- Never create component inside component: rendering problem, for simple changes it will render the components again and again.  
- Never write useEffect inside if condition
- Never write useEffect inside a for loop (consistency issue would happen)  
- React gives useState to give state to local variable so never use it outside the functional component.

### References
- [Naming Convention](https://hackernoon.com/structuring-projects-and-naming-components-in-react-1261b6e18d76)
- [createBrowserRouter](https://reactrouter.com/en/main/routers/create-browser-router)
- [Objec.values](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values)