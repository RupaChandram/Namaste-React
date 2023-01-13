### Command to run react app

* npm start

### JSX

* People call it as Javascript xml, although it's not mentioned officially anywhere

*  JSX ------> React.createElement() -----> React element ----> Object to be rendered in the DOM

* Babel converts JSX to createElement
* Babel - Compiler, Transpiler

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



