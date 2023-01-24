
### Assignment : 07 (Finding the path)
### What are various ways to add images into our app? Explain with cose examples.
- We can render the images in two ways:

1. Via link (Paste cdn link over there)
```html
<img src="paste link over here" alt="Render image through cdn"/>
```
2. Via local file
```js
import Logo from "./logo.png";

export default function Header() {
  
  return <img src={Logo} alt="react logo" />
}
```
- asset folder is the correct place to keep the local images
```js
import logo from "../../assets/images/hunger-box.png";

export const Title = () => (
   
        <img className="logo" src={logo} alt="Logo" />
)

```
### What would happen if we do console.log(useState())?
- If we do `console.log(useState())` then we get an array.
- [undefined,f]
- first element represents state variable and second element is bound dispatchSetState function.

### How will useEffect behave if we don't add a dependency array?
- If we don't add a dependency array then it will not throw any error. It's a valid code.
- Not adding dependency array means useEffect is not dependent on anything.
- It will get executed after every render of component.

### What is SPA?
- SPA means single page application
- Page won't reload if we navigate to other pages.
- Dynamically updates the webpage with data from web server without reloading/refreshing the entire page. 
- All the HTML, CSS, JS are retrieved in the initial load and other data/resources can be loaded dynamically whenever required. 

### What is difference between Client Side Routing and Server Side Routing?
- In Server-side routing, every change in URL, http request is made to server to fetch the webpage, and replace the current webpage with the older one.

- In Client-side routing, during the first load, the webapp is loaded from server to client, after which whenever there is a change in URL, the router library navigates the user to the new page without sending any request to backend. All Single Page Applications uses client-side routing.