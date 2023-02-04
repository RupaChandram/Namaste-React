### Topics that are covered:
-  Quick Test
-  Hooks
-  Why should we break down the logic into a function?
-  Utility Functions
-  Modularity
-  Let's create a helper hook that will help us to get the restaurant details
-  How custom hook is different from functional component?
-  Why custom hook, why not normal function?
-  online event listener
-  offline event listener
-  Throttling
-  When exactly does React clean up an effect?
-  Bundler
-  Chunking or Code Splitting or Dynamic Bundling or Lazy Loading
-  React.Suspense
-  Important points:
-  References:

### Quick Test
- How many times ComponentDidMount is called?
    - 1
- How many times ComponentDidUpdate is called?
    - This will not be called everytime, this will be called when we change our state or when we upadate something.
- What are the two phases in react?
    - Render phase and commit phase
- What are the 3 states?
    - Mounting, Updating and Unmounting
- Suppose a component does not have any props, does not have any states then how many times update will happen?
    - 0
    - If there is no state, no props then there won't be any update.
    - Update happens when you change some data into the DOM
- Use of ComponentWillUnmount?
    - To cleanup 
### Hooks
- Hooks are nothing but a normal js functions that have access to states.

### Why should we break down the logic into a function?
- Modularity
- Readability
- Reusability
- Maintainable
- Testable
- Easy to debug

### Utility Functions
- Whenever you are creating reusable function, it should be in common place where we can keep our utility functions and import from there.
- Industry Practice
    - To create utils folder
    - Keep utilites inside them
- shared/common/utils -> You can give different name.

### Modularity
- To break down the code into meaningful pieces.
- To split into chunks and give them their own responsibilities.
### Let's create a helper hook that will help us to get the restaurant details
- Always add `use` as prefix to the name for hook
- Naming Convention for hook (camelCase)
    - Eg: useAdd, useRestaurant, useFilter
- Hook is a normal function
- Steps:
    - Declare with arrow function and export it
        - You can declare it as named export
        - But when you are creating one function in one file then the best practice is declare it with default export. Fuctions of constant file should be named export.
            1 file -> one hook -> default export
    - Write the logic inside it
```js
import { useEffect, useState } from "react"

const useOnline = () => {
    const [isOnline, setIsOnline] = useState(true);

    useEffect(() => {
       // logic
    }, []);
     
    return isOnline;
}

export default useOnline;
```
    - Use this custom hook into your component
```js
import useOnline from "./utils/useOnline";
```
### How custom hook is different from functional component?
- Functional Component returns JSX
- Hooks does not need to return JSX. It extract some logic out of it. It retirns some value like array, object etc
- Eg: useParam returns obj. useState returns an array etc.
- We can off load any functionality to it.
### Why custom hook, why not normal function?
- We can't create state there.
### online event listener
- It will check whether you are online or not
### offline event listener
- It will check whether you are offine or not
### Throttling
- Check connectivity in the browser
- You can switches to 3G, 2G, offline mode
### When exactly does React clean up an effect?
- cleanup acitivity happens in the return of useEffect which os optional 
- React performs the cleanup when the component unmounts. 
- However, as we learned earlier, effects run for every render and not just once. This is why React also cleans up effects from the previous render before running the effects next time. 

```js
useEffect(() => {
    
    return () => { /*cleanup */};
  }, []);

```
### Bundler
- The most important feature of bundler that is bundles your code.
- All JS files will become 1 js file after bundling process
- Steps throgh which we check one js file
    - Go to dev tool
    - click on js in the network tab
    - check the response

![Alt text](./src/assets/notes-images/bundler.png "Bundler response (1 js file)")

### Chunking or Code Splitting or Dynamic Bundling or Lazy Loading
- In simple terms, lazy loading is a design pattern. 
- It allows you to load parts of your application on-demand to reduce the initial load time. 
- For example, you can initially load the components and modules related to user login and registration. Then, you can load the rest of the components based on user navigation.
- Not suitable for small-scale applications.
- `Important`: Whenever you do lazy loading means your bundled js would not have that code which you applied for lazy loading.
- This is loading on demand.
- Advantages:
    - Reduces initial loading time by reducing the bundle size.
    - Reduces browser workload.
    - Improves application performance in low bandwidth situations.
    - Improves user experience at initial loading.
    - Optimizes resource usage.
- Implementation:
    - React.lazy()
        - React.lazy() allows developers to easily create components with dynamic imports and render them as normal components. 
        - When the component is rendered, it will automatically load the bundle that contains the rendered component.

```js
// Without React.lazy()
import AboutComponent from './AboutComponent ';

// With React.lazy()
const AboutComponent = React.lazy(() => import('./AboutComponent '));

const HomeComponent = () => (
    <div><AboutComponent /></div>
)
```
### React.Suspense
- When you render your component on demand, react tries to suspend it.
`On demand loading ---> upon render---> suspend loading`
- To handle such case, we use "Suspense"(It's a suspense what is going to come up)
- Steps:
- Named export
`import React, { Suspense } from "react";`
- Wrap up your lazy loaded code in suspense tag. Lazy import is promise.
`<Suspense><Instamart /></Suspense>`
- Suspense takes props if you want to pass anything before loading the component.
```js
<Suspense fallback={<Shimmer />}>
    <Instamart />
</Suspense>
```
### Important points:
- Links should be in constant file.
- Naming convention for image url in constant file: IMAGE_URL.
- Wwhenever you implement lazy loading, you need to import the component through lazy function. Do not do it directly.
- Never ever dynamically load your component inside your component.
### References:
[Lazy Loading](https://www.syncfusion.com/blogs/post/lazy-loading-with-react-an-overview.aspx#:~:text=Lazy%20loading%20is%20one%20of,implemented%20using%20third%2Dparty%20libraries.)

