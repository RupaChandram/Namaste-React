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

        const Header = function () {
            return (
                <div>
                    <h1 id="heading1">Laying The Foundation</h1>
                    <h2 id="heading2">Nested Header Functional Component</h2>
                    <h3 id="heading3">h1,h2,h3 inside div with title</h3>
                </div>
            )
        }

### React Element

* React element is an object.
* name starts with small letter.
* call it in {} in other Functional Componet 
* Eg: 
const header = (
                <div>
                    <h1 id="heading1">Laying The Foundation</h1>
                    <h2 id="heading2">Nested Header Functional Component</h2>
                    <h3 id="heading3">h1,h2,h3 inside div with title</h3>
                </div>
            )

### Use of {}

* we can write any piece of javascript inside {}
* we can pass react element there
* We can write comment inside {} as well

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

### Inline Style

* Style in tag
* <h1 style="color:red">Hello</h1>

### How to give inline style in JSX

* const styleObj = {
    color: "red"
}

*  <ul style={styleObj}></ul>





