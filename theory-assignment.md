### Theory Assignment : 08 (Let's Get Classy)

### How do you create Nested Routes react-router-dom cofiguration
- If you want to render children inside children 
- steps with example: 
1. create profile component
```js
const Profile = () => {
    return (
        <div>
            <h2>Profile rendered...</h2>
       </div>
   ) 
}
export default Profile;
```
2. create children of children route
```js
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <Error />,
        children: [
            {
                path: "/about",
                element: <About />,
                children: [{
                    path: "profile",
                    element:<Profile/>
                }]
            },
            
        ],
    }
]);
```
3. Pass outlet component for child component
```js 
import { Outlet } from "react-router-dom";

const About = () => {
    return (
        <div className="container">
            <h1>About page is coming soon...</h1>
            <Outlet />
        </div>
    )
}
export default About;
```
- Note :
   - Never use `/profile` for children of children (nested route). slash means concate with root not the relative path. Instead of `/profile`, use `profile`.
   - Outlet is replaced by child component. So, you can directly use child component instead of <Outlet /> there

### Read abt createHashRouter, createMemoryRouter from React Router docs.
- createHashRouter and createMemoryRouter are another ways of doing routing in react.
- [createHashRouter](https://reactrouter.com/en/main/routers/create-hash-router)
- [createMemoryRouter](https://reactrouter.com/en/main/routers/create-memory-router)

### What is the order of life cycle method calls in Class Based Components.

### Why do we use componentDidMount?
- Component life cycle method.
- The componentDidMount() method allows us to execute the React code when the component is already placed in the DOM (Document Object Model). 
- This method is called during the Mounting phase of the React Life-cycle i.e after the component is rendered.
- All the AJAX requests and the DOM or state updation should be coded in the componentDidMount() method block. 
- We can also set up all the major subscriptions here but to avoid any performance issues, always remember to unsubscribe them in the componentWillUnmount() method.
### Why do we use componentWillUnmount? Show with example.
- The componentWillUnmount() method allows us to execute the React code when the component gets destroyed or unmounted from the DOM (Document Object Model). 
- This method is called during the Unmounting phase of the React Life-cycle i.e before the component gets unmounted.
- All the cleanups such as invalidating timers, canceling network requests, or cleaning up any subscriptions that were created in componentDidMount() should be coded in the componentWillUnmount() method block.
- Tip: Never call setState() in componentWillUnmount() method.
- Eg: 
```js
componentDidMount(){
  setInterval(()=>{
    console.log("hello")
  },1000);
}
```
- It will call `componentDidMount()` every second.
- cons:
  - If you will leave the page, it will still gets called.
  - This is the problem of SPA.
  - Because it's not reloading of refreshing.
  - Performance loss.
  - Needs to be cleaned with the help of `componentWillUnmount()`
- How to clean :
1. Assign the funtion to the variable.
```js
componentDidMount(){
  this.timer=setInterval(()=>{
    console.log("hello")
  },1000);
}
```
2. use `componentWillUnmount()`.
```js
componentWillUnmount(){
  clearInterval(this.timer);
}
```

### (Research) Why do we use super(props) in constructor?
- Super() function is to call the constructor of the parent class. 
- It is used when we need to access a few variables in the parent class.
- If super() is not used, then it will throw error in the console. 
`Reference Error : Must call super constructor in derived classes before accessing 'this' or returning from derived constructor` 
- When you try to use props passed on parent to child component in child component using this.props.name, it will still work without super(props). Only super() is also enought for accessing props in render method.
- The main difference between super() and super(props) is the this.props is undefined in child's constructor in super() but this.props contains the passed props if super(props) is used.
### (Research) Why can't we have the callback function of useEffect async?
```js
// ❌ Don't do this!
useEffect(async () => {
  const users = await fetchUsers();
  setUsers(users);

  return () => {
    // this never gets called, hello memory leaks...
  };
}, []);
```
- Because React’s useEffect hook expects a cleanup function returned from it which is called when the component unmounts. 
- Using an async function here will cause a bug as the cleanup function will never get called.
- So what do we do?
```js
// Ship it
useEffect(() => {
  (async () => {
    const users = await fetchUsers();
    setUsers(users);
  })();

  return () => {
    // this now gets called when the component unmounts
  };
}, []);
```
or 
```js
// Ship it
useEffect(() => {
  const getUsers = async () => {
    const users = await fetchUsers();
    setUsers(users);
  };

  getUsers(); // run it, run it

  return () => {
    // this now gets called when the component unmounts
  };
}, []);
```

### References:

- [React Life Cycle Method Diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
- [createHashRouter](https://reactrouter.com/en/main/routers/create-hash-router)
- [createMemoryRouter](https://reactrouter.com/en/main/routers/create-memory-router
- [Code Link](https://bitbucket.org/namastedev/namaste-react-live/src/master/)
- [asyn useEffect](https://ultimatecourses.com/blog/using-async-await-inside-react-use-effect-hook#:~:text=Why%3F,function%20will%20never%20get%20called.)