### Is JSX mandatory for react?
* No, JSX is not mandatory.
* Each JSX element is just syntactic sugar for calling React.createElement(component, props, ...children). So, anything you can do with JSX can also be done with just plain JavaScript.
* You can write JSX and see the actual transformation in babel.io.

### Is ES6 mandatory for react?
* No, it's also not mandatory. 
* But it's highly recommended to write code with ES6 features because A lot of React projects use ES6 features in React ecosystem. 

### {TitleComponent} vs {<TitleComponent/>} vs {/TitleComponent} in JSX
* {TitleComponent}
    * This value in jsx is considered as jsx expression or variable. You will get error if you want to render component like this.

    * You will get below error:
index.js:1 Warning: Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from rende Or maybe you meant to call this function rather than return it at Layout.

    * You can call it like below:

```js
{FooterComponent()}
```

* {<TitleComponent/>}
    * This value in jsx is meant for rendering a component (i.e) function that return jsx. This is self closing tag.

{ <TitleComponent> </TitleComponent> } - This is same as { <TitleComponent /> } if there are no child inside TitleComponent. If there are children, then those values come inside { <TitleComponent>}  and </TitleComponent> }.

### How can I write comments in jsx ?
* Two type of comments:
    * Single line comment
    * Multi line comment
    
    ```js
    const Header = () => {
   return ( 
      <h1>Namaste React</h1> { /* This is single line comment */}
      {/*
      *
      * This is multi line comments
      *
      */} 
   )
    ```

### What is <React.Fragment></React.Fragment> and <></> ?
*  Component which is exported by React
* Use : <React.Fragment></React.Fragment>
* JSX has only one parent. If you want more than 1 than you have to wrap into the div but why extra div?
* By React.Fragment, we won't get extra tag.
* It is like empty tag.
* But it ugly to write <React.Fragment></React.Fragment>
* Shorthand: <></> :)
* You can't pass attribute or id to this.
* Eg:

```js
render() {
  return (
    <React.Fragment>
      <ChildA />
      <ChildB />
      <ChildC />
    </React.Fragment>
  );
}
```
shorthand syntax:

```js

class Columns extends React.Component {
  render() {
    return (
      <>
        <td>Hello</td>
        <td>World</td>
      </>
    );
  }
}
```
### What is virtual DOM ?
* The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM. 
* This process is called reconciliation.
* link: [Babel](https://reactjs.org/docs/faq-internals.html)

### What is Reconciliation in react ?
* React uses diffing algorithm to diff one tree (actually dom) from another which determines what needs to be updated or re-renders the diff.
* In React, we pass props to a component, when any of the prop changes, a reconciliation process is triggered internally by react which traverses the whole component hierarchy to mark any changes required in the given component at a time.
* Reconciler vs Renderer => Reconciler does the work of computing which parts of the tree have changed. Renderer uses this info to actually update the rendered app.

### What is React Fiber ?
* New reconciliation engine in React 16. 
* The goal of React Fiber is to increase its suitability for areas like animation, layout, and gestures. 
* Its headline feature is incremental rendering: the ability to split rendering work into chunks and spread it out over multiple frames.

### Why do we need key in React ? When do we need keys in React ?
* A key is a special attribute you need to include when creating lists of elements. 
* Keys help React identify which items have changed, are added, or are removed. 
* Reconcilliation uses diff algo ---> diff algo happens through key instantly.
* Keys must be used when siblings are of different elements types.

### Can we use index as key in react ?
* A key is the only thing React uses to identify DOM elements. It is not recommend to use indexes for keys if the order of items may change. This can negatively impact performance and may cause issues with component state.

* But, nothing is better than anything. If we don't give a key, react by default assign id of that list item as it's key.

* NO key << INDEX as key <<<<<< Unique id as key from data

### What are props in React ? Ways to use props ?
* Props (properties) passed in Component are similar to the arguments passed in a js function call and received by that function as parameters.
* Every parent component can pass some information to its child components by giving them props. Props are similar to HTML attributes, but you can pass any JavaScript value through them, including objects, arrays, and functions.
* Types of Props :

    * Familar Props - HTML attributes like className, src, width, height passed in HTML  tag

    * Passing Props to Component - props are the only argument to your component. React component functions accept a single argument, a props object.

* Ways to pass props to component	Ways to receive the props in another component
    1. Add props to the JSX, just like you would with HTML attributes	All props are sent into a single props object
    <Profile name = { "Rupa"} age={28}   />	const Profile = (props) => { let name = props.name; let age = props.age; }
    2. Similar to the way mentioned in 1.	Props object can be destructed using {} to receive only the required props
    <Profile name = { "Rupa"} age={28}   />	const Profile = ({name, age}) => { }
    3. Using spread syntax	And props objects destructed using {}
    <Profile {...props}   />	const Profile = ({name, age}) => { }
    However, props are immutable which means unchangeable. When a component needs to change its props (for example, in response to a user interaction or new data), it will have to “ask” its parent component to pass it different props—a new object! Its old props will then be cast aside, and eventually the JavaScript engine will reclaim the memory taken by them.

12. What is Config driven UI ?
* Config-driven UI is one of the UI design pattern in which the UI is rendered based on the configuration parameter sent by the server (backend). 
* This is one of the popular pattern used in the industry now.React uses diffing algorithm to diff one tree (actually dom) from another which determines what needs to be updated and only re-renders the diff.
* In React, we pass props to a component, when any of the prop changes, a reconciliation process is triggered internally by react which traverses the whole component hierarchy to mark any changes required in the given component at a time.
* Reconciler vs Renderer => Reconciler does the work of computing which parts of the tree have changed. Renderer uses this info to actually update the rendered app.

### References
* [Babel](https://babel.io/)
* [Virtual Dom](https://reactjs.org/docs/faq-internals.html)


