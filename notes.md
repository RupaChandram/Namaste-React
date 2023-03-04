### Topics that are covered: 
- Introduction
- Why should we learn css, framework etc?
- Different kinds of writing css
- Can we use 2 libraries in a project?
- Installation and Configuation of Tailwind
- References
### Introduction
- Many companies use Base UI, Material UI, Bootstrap, scss for styling the component.
- Uber has its own UI for styling the component.
- [link](https://baseweb.design)

### Why should we learn css, framework etc?
- To write opimized css
- It saves time
- It is faster development than css

### Different kinds of writing css
1. The basic native css file.
  - We had an index.html file which had index.css inside it.
  - We were styling the component the components in one large index.css file.

2. SCSS/ SASS
  - Makes the css writing experience good.
  - Gives super powers  to our css.
  - Benefits
    - variables
    - nesting 
    - mixin
    - Reusablity
    - operators
    - parameters
    - partials
  - At the end, scss compiles to css, it is converted into css.
  - Just like jsx converts into html.
  - [link](https://github.com/RupaChandram/sass) 

3. Inline css
  - means putting styling in html tag.
  - `<h1 style={{color:"red"}}>Title</h1>`
  - faster than using className
  - But not a good way of writing css.
  - Drawbacks
    - Lost reusability
    - Repetition
    - Hard coded
    - Difficult to maintain
    - Heavy job for our browser (Processing would be heavy)
    - Always try to avoid css styling of inline
  
  4. Using library like material UI
  - Material UI is a library.
  - Fully loaded component library
  - It has lot of pre-built components
  - A lot of companies heavily rely on libraries
  - eg: Ant Design 5.0, Base Design, Chakra UI
  - pros of using libraries 
    - Consistent UI
    - easy to use
    - fast

### Can we use 2 libraries in a project?
- Yes, Because it's a node package at the end of the day
- But bad ways to use two libraries in a project
### Installation and Configuation of Tailwind
1. Terminal

npm install -D tailwindcss
npx tailwindcss init

2. tailwind.config.js

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
3. 
### References
- [Tailwind](https://tailwindcss.com/)
- [baseweb](https://baseweb.design )