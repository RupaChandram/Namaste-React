### Topics to be covered
* Command to run react app
* JSX
* Functional Component
* React Element
* Use of {}
* Is JSX, ES6, TS mandatory?
* use functional component
* React.Fragement
* inline style
* How to give inline style in JSX
* Three ways of writing css in react
* Can I use React.Fragment inside React.Fragment
* join()
* JSON Viewer plugin
* Config-driven UI
* Optional chaining
* props
* Functional component
* parameter and argument
* Spread operators
* map
* Difference between map() and forEach()
* virtual DOM
* Why do we need virtual DOM?
* Reconcilliation
* Why is react fast?
* Why do we use keys?
* React Fiber
* Can we use index as keys?
* References

### Command to run react app

* npm start

### JSX

* People call it as Javascript xml, although it's not mentioned officially anywhere

*  JSX ------> React.createElement() -----> React element ----> Object to be rendered in the DOM

* Babel converts JSX to createElement
* Babel - Compiler, Transpiler
* We only can have 1 parent over here. If you want then you have to wrap into the div.
* If you don't want extra div then React.fragment comes into the picture. 

### Functional Component

* Normal function that returns some piece of code.
* () is not mandatory. Use it for multiple lines of code.  
* Name start with capital letter
* Eg:

```js
        const Header = function () {
            return (
                <div>
                    <h1 id="heading1">Laying The Foundation</h1>
                    <h2 id="heading2">Nested Header Functional Component</h2>
                    <h3 id="heading3">h1,h2,h3 inside div with title</h3>
                </div>
            )
        }
```

### React Element

* React element is an object.
* name starts with small letter.
* call it in {} in other Functional Componet 
* Eg: 
```js
const header = (
                <div>
                    <h1 id="heading1">Laying The Foundation</h1>
                    <h2 id="heading2">Nested Header Functional Component</h2>
                    <h3 id="heading3">h1,h2,h3 inside div with title</h3>
                </div>
            )
```

### Use of {}

* we can write any piece of javascript inside {} but it should be Javascript expression not JS statement. 
* we can pass react element there
* We can write comment inside {} as well

* dynamically specify the src or alt
```js
export default function Avatar() {
  const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
  const description = 'Gregorio Y. Zara';
  return (
    <img
      className="avatar"
      src={avatar}
      alt={description}
    />
  );
}
```
* Inline Styling

```js
export default function TodoList() {
  return (
    <ul style={{
      backgroundColor: 'black',
      color: 'pink'
    }}>
      <li>Work on the alcohol-fuelled engine</li>
    </ul>
  );
}
```
[JSX with curley braces](https://beta.reactjs.org/learn/javascript-in-jsx-with-curly-braces)
### Is JSX, ES6, TS mandatory?

* Not mandatory

### use functional component

* {Title}
* <Title /> -self closing tag- most recommended way
* <Title></Title>

### React.Fragement

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
link: [Fragment](https://reactjs.org/docs/fragments.html)

### Inline Style

* Style in tag
```html
<h1 style="color:red">Hello</h1>
```

### How to give inline style in JSX

```js
const styleObj = {
    color: "red"
}
```

```js
const header = (
                <div style={styleObj}>
                    <h1 id="heading1">Laying The Foundation</h1>
                    <h2 id="heading2">Nested Header Functional Component</h2>
                    <h3 id="heading3">h1,h2,h3 inside div with title</h3>
                </div>
            )
```
other way

```js
const header = (
                <div style={{color: "red"}}>
                    <h1 id="heading1">Laying The Foundation</h1>
                    <h2 id="heading2">Nested Header Functional Component</h2>
                    <h3 id="heading3">h1,h2,h3 inside div with title</h3>
)
                
```
### Three ways of writing css in react

1. Inline styling
2. with className 
3. By using external library like Tailwind, Bootstrap etc.

### Can I use React.Fragment inside React.Fragment

* yes

### join()

* The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.


```js
const fruits=['grapes','apple'];
```

if you use fruits inside curley braces to evaluate, 

{fruits} => o/p => grapesapple

with join

```js
{fruits.join(", ")} 
```
o/p: grape, sapple

link: [join](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

### JSON Viewer plugin

* It will make your data prettier
* Add it in chorme browser

### Config-driven UI

* You bind the data dynamically to the UI 
* You control the UI using config 
* API, Backend use config

### Optional chaining

* The optional chaining (?.) operator accesses an object's property or calls a function. If the object accessed or function called is undefined or null, it returns undefined instead of throwing an error.

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
link: [optional chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)

### props

* props is a properties
* Through props, we can pass data inside the component.
* We can pass the data from parent component to child component.
* props behaves like passing argument into a function

### Functional component

* It's just a function at the end the of day.

### parameter and argument

```js
const add(param1,param2){
}

 add(argument1,argument2);
```

* You pass in arguments and recieve it in parameter.

### Spread operators

link: [spread](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

### map

* map is the best way to do functional programming.
* [map](https://github.com/RupaChandram/Namaste-JS/blob/main/ep-19-map-reduce-filter/notes.md)

### Difference between map() and forEach()
* Both are methods of Array
* Both are used to iterate the array
* The first difference between map() and forEach() is the returning value. The forEach() method returns undefined and map() returns a new array with the transformed elements. Even if they do the same job, the returning value remains different.
```js
const myAwesomeArray = [1, 2, 3, 4, 5]
const newArr = myAwesomeArray.forEach(x => x * x);
console.log(newArr)

const mapArr=myAwesomeArray.map(x => x * x)
console.log(mapArr)

```
* The second difference between these array methods is the fact that map() is chainable. This means that you can attach reduce(), sort(), filter() and so on after performing a map() method on an array.

That's something you can't do with forEach() because, as you might guess, it returns undefined.

```js
const myAwesomeArray = [1, 2, 3, 4, 5]
myAwesomeArray.forEach(x => x * x).reduce((total, value) => total + value)
//>>>>>>>>>>>>> Uncaught TypeError: Cannot read property 'reduce' of undefined
myAwesomeArray.map(x => x * x).reduce((total, value) => total + value)
//>>>>>>>>>>>>>return value: 55
```

### virtual DOM

```html

<head></head>
  <body>
    <Restaurant1 />
    <Restaurant2 /> <img>
  </body>
  <footer />

```
```
        O html
      /   \     \
    (h)   (b)   (F)
          / \ 
        R1   R2
              |
              img

```
* A representation of DOm is virtual DOM

### Why do we need virtual DOM?
* For Reconcilliation

### Reconcilliation
* React used the diff algorithm to find out the difference between trees(actual DOM and virtual DOM) and finds out what needs to be updated and just rerender the small portion.
* This process is known as Reconcilliation.

### Why is react fast?
* React uses something known as virtual Dom
* Virtual Dom is reresentation of your actual DOM. It's not your actual DOM.
React uses Reconcilliation.
* Reconcilliation is the process where we have a diff algorithm which finds out the difference between the trees
* It will rerender the only portion that is required which is found by diff algo.
* Works exactly as git diff.

### Why do we use keys?
* By giving the keys, diff algo knows exact place where needs to be rerender
* We have to give keys to make react smart.
* It can't accept duplicate keys
* Give it unique id

### React Fiber
* In version 16, the diff algorithm changes a bit.
* React introduced React Fiber
* New Reconcilliation engine.

### Can we use index as keys?
* We can use but it's not recommended.
* If you don't have unique thing then you can use index

no key(Not acceptable)<<<< index key(use only if you don't have anything)< unique key

### References
* [Code link](https://bitbucket.org/namastedev/namaste-react-live/src/master/)
* [React without JSX](https://reactjs.org/docs/react-without-jsx.html)
* [Virtual Dom](https://reactjs.org/docs/faq-internals.html)
* [Reconcilliation](https://reactjs.org/docs/reconciliation.html)
* [React Fiber](https://github.com/acdlite/react-fiber-architecture)
* [React without ES6](https://reactjs.org/docs/react-without-es6.html)
* [Index as a key is an anti pattern](https://robinpokorny.com/blog/index-as-a-key-is-an-anti-pattern/)
* [Difference between map and forEach](https://www.freecodecamp.org/news/4-main-differences-between-foreach-and-map/)
















