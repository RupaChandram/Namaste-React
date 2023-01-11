## Topics to be covered
    - Initialize npm
    - Types of dependencies
    - browserlists
    - Pollyfill
    - .gitignore
    - Super powers of parcel
    - Tree shanking
    - Webpack
    - Build performant web scalable app
    - command to run the project
    - Babel
    - JSX
    - node_module (package.json)
    - React Component
    - Function components
    - Composing Component
    - React Reconcilliation
    - link
    
## Notes :

### Command to initialize npm
    
    => npm init
    => It creates package.json
    => Package.json is like configuration that npm uses to manage dependencies.

### Two types of dependencies 
    
    1. devDependencies
    => We need them for development environment only.

    2. dependencies
    => dependencies that required by our project.
    
### browserlists

    => Helps to transform our code and make our code for different kind of browsers.
    => It is mentioned as :

        "browserlists":{
            "last 2 chrome browsers"
        }
    
    => In the above example, it doesn't mean our code will work only on chrome browsers. It will work in other browsers as well but might miss few features. It does give guarantee for other browsers.
    => By mentioning last 2 chrome browsers means it will definately compatible with last two chrome browsers.

### Pollyfill
     
    => A code which is replacement for a newer browser.
    => For eg: If your promises function is not understandable by your broweser then your code gets converted into the compatible function for your browser. That is pollyfill.
    => Babel does conversion. Babel uses browserlists.
    => Babel manage the track of which version of our code is working on  

### .gitignore

    => git init initializes your repo.
    => .gitignore is a file that is used to ignore those file that we do not want to push into the repo.
    => Once we initialize the git we will automatically get .gitignore file.

### Superpower of parcel

    => HMR (Hot module replacement)
    => Minification
    => image optimization
    => File watcher
    => Caching while development
    => Code splitting
    => Compression
    => Cleaning the code
    => Tree shaking
    => Create a server
    => Building
    => Super fast build algorithm
    => Compatible with older version of browsers
    => HTTP on dev
    => manage port number
    => Consistent Hashing algorithm
    => No configuration
    
### Tree Shaking

    => Tree shaking means to remove unwanted code.
    => Eg. If you are using one library and that library has 10 functions and if your project uses only 2 function then parcel will ignore 8 of them. This process is known as tree shaking
    => It just tree shakes (fancy term)
    
### Webpack

    => It's a bundler like parcel.
    => Configuration is bit difficult than pacel.
    => Do the almost same thing that parcel does.

### Build performant web scalable app

    => There are lot of thing that React optimizes for us but bundler also does many things like image optimization, tree shaking etc.

### command to run the project

    => npx parcel index.html
    
### Build the script

    => Scripts give the facility to run the command in an easy way.
    => We can create our own scripts by modifying scripts in package.json

         "scripts" :{
            "start" :"parcel index.html"
         }

    => now command to run the project : 
        npm run start
        or npm start

### Command to build the project

    => npx parcel build index.html

        
         "scripts" :{
            "build" :"parcel build index.html"
         }

    => now command to build the project : 
            npm run build
            or npm build

### babel remove console log plugin

   => Note: Parcel won't remove console.log. You can do it with babel plugin.
   => link: [babel remove console log plugin](https://www.npmjs.com/package/babel-plugin-transform-remove-console)

### Key

    => Key is an attribute to indentify uniquely. 
    => React keeps track of uniqueness using keys not through ids.
    
### Babel 

    => Just a JS library package.
    => Used for transformation. Making the code compatible with mentioned browsers.
    => Compiler for next generation browser.
    => It creates abstract syntax tree (AST).
    => JSX is converted into React.createElement via babel.
    => Babel comes along with parcel's dependecies. No need to install separately.
    => link: [Babel](https://babeljs.io/)
    => Eg: const heading=<h1>Hello</h1> => const heading= React.createElement("h1",null,"Hello");


### JSX

    => There is no  official documentation where it is written that JSX is Javascript xml.
    => But People call it as javascript xml.
    => JSX is an HTML like syntax inside javascript.
    => There is little differences between JSX syntax and HTML syntax
    => Eg: In html we use class but in jsx we use className.
    => Our browser does not understand the code of JSX but Babel does.
    => JSX uses createElement behind the scene and gives an object.
    => Benefits using jsx:
        - Developer Experience
        - Syntactical sugar
        - Readability
        - Less code
        - Mantainability
        - No repeatition
        - No XSS attack by sanitization

### node_module (package.json)
    
    => There are one package.json present inside node_modules.
    => Versions of all transitve dependencies(dependencies of dependencies and so on) are present in that package.json

### React Component

    => Components are independent and reusable bits of code. 
    => They serve the same purpose as JavaScript functions, but work in isolation and return HTML.
    => Components come in two types:
        - Class components : Old way of writing code
        - Function components: New way of writing the code

### Function components

    => Functional is nothing but a JS function that returns JSX or component or react composition.
    => Names of component starts with capital letter.
    => Not compulsory but good practice to use it.

###  Composing Component
    
    => Component inside component

### React Reconcilliation

    => Uses diff algorithm
    

#### links

   * [Babel](https://babeljs.io/)
   * [Attribute Type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attr-type)
   [JS Module](https://learn.namastedev.com/s/courses/6389e7a3e4b012dc9ad879ff/take)
   [Babel Playground](https://babeljs.io/repl#)
   [React Without JSX](https://reactjs.org/docs/react-without-jsx.html)















    
