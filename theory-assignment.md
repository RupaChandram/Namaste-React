### What is Microservices?
- Instead of having 1 project, now we can have small small projects.
- separate project for authentication, separate for sms, separate for backend, logs, apis even databaseds can have replica.
- advantage: easier to maintain, easy to deploy, easy to check, separation of concern, single responsibilities, can be used different language like ui-react, log-golang, authentication- python etc.

### What is Monolithic architecture?
- If all the functionalities of a project exist in a single codebase, then that application is known as a monolithic application. 
- We design our application in various layers like presentation, service, and persistence and then deploy that codebase as a single jar/war file. 
- This is nothing but a monolithic application, where “mono” represents the single codebase containing all the required functionalities. 
### What is the difference between monolithic and microservices?
|Sr. No.	| Key	| Monolithic architecture |	Microservices architecture |
|-----------|-------|-------------------------|----------------------------|
|1          |Basic| Monolithic architecture is built as one large system and is usually one code-base| Microservices architecture is built as small independent module based on business functionality|
|2|Scale|It is not easy to scale based on demand| It is easy to scale based on demand.|
|3|Database|It has shared database|Each project and module has their own database|
|4|Deployment|Large code base makes IDE slow and build time gets increase|Each project is independent and small in size. So overall build and development time gets decrease.|
|5|Tightly Coupled and Loosely coupled|It extremely difficult to change technology or language or framework because everything is tightly coupled and depend on each other|Easy to change technology or framework because every module and project is independent|
|6|Debugging	|With all code located in one place, it’s easier to follow a request and find an issue.	|Each microservice has its own set of logs, which makes debugging more complicated. Plus, a single business process can run across multiple machines, further complicating debugging.|
|7|Tech Adoption| Any changes in the framework or language affects the entire application, making changes often expensive and time-consuming.	| Any new tech changes can eaily be adopted as an independent service|
|8|Testing	|Since a monolithic application is a single, centralized unit, end-to-end testing can be performed faster than with a distributed application.	|Teams can experiment with new features and roll back if something doesn’t work. This makes it easier to update code and accelerates time-to-market for new features. Plus, it is easy to isolate and fix faults and bugs in individual |services.
### Why do we need a useEffect hook?

- By using this Hook, you tell React that your component needs to do something after render. 
- React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates. - In this effect, we set the document title, but we could also perform data fetching or call some other imperative API.

### Why is useEffect called inside a component?

- Placing useEffect inside the component lets us access the count state variable (or any props) right from the effect.
-  We don’t need a special API to read it — it’s already in the function scope. Hooks embrace JavaScript closures and avoid introducing React-specific APIs where JavaScript already provides a solution.

### Does useEffect run after every render?

- Yes! By default, it runs both after the first render and after every update. 
- Instead of thinking in terms of “mounting” and “updating”, you might find it easier to think that effects happen “after render”. React guarantees the DOM has been updated by the time it runs the effects.

### What is optional chaining?
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
### What is Shimmer UI?
- A shimmer screen is a version of the UI that doesn’t contain actual content. Instead, it mimics the page’s layout by showing its elements in a shape similar to the actual content as it is loading and becoming available (i.e. when network latency allows).

- A shimmer screen is essentially a wireframe of the page, with placeholder boxes for text and images.
### What is the difference between JS expression and JS statement
- Expressions can be assigned or used as operands, while statements can only be declared.
- Statements create side effects to be useful, while expressions are values or execute to values.
- Expressions are unique in meaning, while statements are two-sided in execution. For example, 1 has a certain value while go( ) may be executed or not.
- Statements are the whole structure, while expressions are the building blocks. For example, a line or a block of code is a statement.
- we can't put any js code inside {} in jsx of React. Only js expressions can be enclosed within {} of jsx.

- JS Statement
    1. "Rupa" -> String is a valid expression 
    2. 1234    -> Number is a valid expression 
    3. (isLoggedIn) ? "Logout" : "Login"    -> Ternary operator returning value is a valid expression
    4. [1,2,3,4].map(num => num*2)  -> array map function is a valid expression which returns a new array after transformation
    5. (1+2+3)   -> math operation is a valid expression

- JS Expression
    1. console.log("This is a js statement")  -> This does not return any value, just prints the content on screen.
    2. let name = "Rupa";  -> Variable assigment is a statement 
    3. if(true){
        console.log("true"); 
    } else {
        console.log("true"); 
    }   -> This does not return any value

    4. for(let i=0; i< 5; i++) {
        arr.push(i);
    } 
 
### What is conditional rendering, explain with a code example?
- Conditional rendering in React works the same way conditions work in JavaScript. 
- Use JavaScript operators like if or the conditional operator to create elements representing the current state, and let React update the UI to match them.
- Different types of conditional rendering
1. If operator
```js
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}
```
2. Inline If with Logical && Operator
```js
function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
  );
}
```
3. Inline If-Else with Conditional Operator
```js
render() {
  const isLoggedIn = this.state.isLoggedIn;
  return (
    <div>
      The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
    </div>
  );
}
```
### What is CORS?
- Cross-Origin Resource Sharing (CORS)
- Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. 
- CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. 
- In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.
- Use CORS plugin to avoid CORS errors(browser extension).
### What is async and await?
- async
    - There’s a special syntax to work with promises in a more comfortable fashion, called “async/await”. It’s surprisingly easy to understand and use.
    - 
```js 
async function f() {
  return Promise.resolve(1);
}

f().then(alert); // 1
```
    - So, async ensures that the function returns a promise, and wraps non-promises in it. Simple enough, right? But not only that. There’s another keyword, await, that works only inside async functions, and it’s pretty cool.
- await 
    - The keyword await makes JavaScript wait until that promise settles and returns its result.
```js
async function getUser() {

  // read our JSON
  let response = await fetch('/article/promise-chaining/user.json');
  let user = await response.json();
  return user;
}
```
### What is the use of `const json=await data.json();` in getRestaurants()
- fetch API call returns a promise response with header, in order to get the data in json format, we have to resolve that promise using data.json()
### References
- [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
- [Shimmer](https://tyler-technologies.github.io/design-guide-gallery/shimmer)
- [Conditional Rendering](https://reactjs.org/docs/conditional-rendering.html)