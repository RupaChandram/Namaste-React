## Assignment

### 1. What is JSX?
    
    => There is no  official documentation where it is written that JSX is Javascript xml.
    => But People call it as javascript xml.
    => JSX is an HTML like syntax inside javascript.
    => There is little differences between JSX syntax and HTML syntax
    => Eg: In html we use class but in jsx we use className.
    => Our browser does not understand the code of JSX but Babel does.
    => JSX uses createElement behind the scene and gives an object.
     
     JSX ------> React.createElement() -----> React element ----> Object to be rendered in the DOM

    => Benefits using jsx:
        - Developer Experience
        - Syntactical sugar
        - Readability
        - Less code
        - Mantainability
        - No repeatition
        - No XSS attack by sanitization

### 2. Superpowers of JSX

    - JSX as variables : markup (html-like) syntax can be set in a variable. This creates a react element (object).

    - Javascript expressions in JSX : JSX supports all js expressions by wrapping them in {}

    - Attributes in JSX : We can pass all the html attributes inside jsx tag (attributes must be CamelCased). Even, custom attributes can be created, but it must not use CamelCase.

    - Props in JSX : The values of each attribute can be passed as properties (props) to a react element. This is my favourite superpower of jsx, since it can handle dynamic data to create react elements.

### 3. Role of type attribute in script tag ? What options can I use there ?

    => type attribute of the <script> tag indicates the type of script.
    => Until HTML 4, type is a required attribute. The value of type can be any of the following :

        <script type="" src="app.js"></script>
    
    => In HTML5, type attribute is not mandatory. 
    => If type attribute is not present(default), or an empty string (type="") or javascript MIME type (text/javascript or application/ecmascript), it is treated as classic "javascript" file.

        <script type="module" src="app.js"></script>

    =>If the type attribute is set module, then the code in that js file is treated as module.

        <script type="importmap" src="app.js"></script>
    
    => If the type attribute is set importmap, the body of the element contains importmap ie an JSON object using which the browser can resolve the module specifiers while importing modules.

        <script type="{$anyothervalue}" src="app.js"></script>

    => If the type attribute contains any other value, then the code is treated as data block and will not be processed by the browser. A valid MIME type other than Javascript MIME type (Eg: image/png or text/css) must be mentioned. All the other attributes for this type will be ignored even the src attribute.

### 4. { TitleComponent } vs { <TitleComponent /> } vs { <TitleComponent> </TitleComponent> } in JSX

    => { TitleComponent } - This value in jsx is considered as jsx expression or variable. 
    => <Component /> - This is used to render the component
    => { <TitleComponent /> } - This value in jsx is meant for rendering a component (i.e) function that return jsx. This is self closing tag.
    => { <TitleComponent> </TitleComponent> } - This is same as { <TitleComponent /> } if there are no child inside TitleComponent. If there are children, then those values come inside { <TitleComponent>}  and </TitleComponent> }.

