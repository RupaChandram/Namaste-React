### 1) What is NPM?

    => NPM does not stand for node package manager. Full form is not mentioned anywhere officially.
    => But People call it as node package manager.
    => It allows us to install and  manages packages. 
    => In react, We can initailize the react through the command "npm init"
    => If you use the command "npm init -y" then it will skip lots of option.

### 2) What is `Parcel/Webpack`? Why do we need it?

    => Parcel is a bundler. Bundler is a tool that gives many facilities like optimizing the code, caching etc.

    Need :

    => When developing a site or web application, it’s good practice to separate your code into smaller, more manageable chunks. 
    => In production, requesting all of your resources individually can slow down your application. 
    => A bundler is used to solve this latency issue by combining and merging your code into a single file. 
   

### 3) What is `.parcel-cache`?

    => .parcel-cache in parcel stores information about your project when parcel builds it, so that when it rebuilds, 
    it doesn't have to re-parse and re-analyze everything from scratch. 
    => It's a key reason why parcel can be so fast in development mode.

    

### 4) What is `npx` ?

   => The npx stands for Node Package Execute
   => It means execute using npm. Npx is a tool that use to execute packages.
   => A package can be executable without installing the package. It is an npm package runner so if any packages aren’t already installed it will install them automatically.
   => Eg: In npx you can create a react app without installing the package: `npx create-react-app myApp`


### 5) What is difference between `dependencies` vs `devDependencies`?
    
    => dependencies : Packages that are required in your project.
    => devDependencies : Packages that are used for only development environment. 

### 6) What is Tree Shaking?

    => In production builds, Parcel statically analyzes the imports and exports of each module, and removes everything that isn't used. This is called "tree shaking" or "dead code elimination". 
    => Tree shaking is a term commonly used within a JavaScript context to describe the removal of dead code.
    => In modern JavaScript applications, we use module bundlers (e.g., webpack or Parcel) to automatically remove dead code 
    when bundling multiple JavaScript files into single files. 
    => This is important for preparing code that is production ready, for example with clean structures and minimal file size.

### 7) What is Hot Module Replacement?

    => Hot Module Replacement (HMR) improves the development experience by automatically updating modules in the browser at runtime without needing a whole page refresh. 
    => This means that application state can be retained as you change small things. 
=   => Parcel's HMR implementation supports both JavaScript and CSS assets.

### 8) List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words.

    1. Tree Shaking
    2. Hot Module Replacement
    3. Minifications
    4. Caching
    5. Image Optimization

    1. Tree Shaking:

    => In production builds, Parcel statically analyzes the imports and exports of each module, and removes everything that isn't used. This is called "tree shaking" or "dead code elimination". 

    2. Hot Module Replacement

    => Hot Module Replacement (HMR) improves the development experience by automatically updating modules in the browser at runtime without needing a whole page refresh. 
    => This means that application state can be retained as you change small things. 
    => Parcel's HMR implementation supports both JavaScript and CSS assets.
    => Flile watcher algorithm has been used to achieve this feature.

    3. Minification:

    => Minification reduces the file size of your output bundles by removing whitespace, renaming variables to shorter names, and many other optimizations.
    => By default, minification is enabled when using the parcel build command. 
    => You can use the --no-optimize CLI flag to disable minification and other optimizations if needed.

    4. Caching:

    => Because of caching, build process takes less time than actual time.
    => Consistent hashing algorithm is used by caching feature of parcel

    5. Image Optimization:
    
    => Image is heaviest thing to load on the server
    => Parces gives the facility to optimize the image as well

### 9) What is `.gitignore`? What should we add and not add into it?

    => A .gitignore is a file specifies intentionally untracked files that Git should ignore.
    => We should add files that we don't want git to track
   
    => What to add in .gitignore: 
        - node_modules
        -.parcel-caching
        - Log files
        - Files with API keys/secrets
        - credentials, or sensitive information
        - Useless system files like .DS_Store on macOS
        - Generated files like dist folders
        - Dependencies which can be downloaded from a package manager

    => What not to add .gitignore: 
        - never add package-lock.json, package.json
        - never add files that are necessary for your application to run

### 10) What is the difference between `package.json` and `package-lock.json`'

    package-lock-json
        => locks the verion
        => It is automatically generated for those operations where npm modifies either node_modules tree or package.json.
        => You should not add the package-lock.json in gitignore because it tells the exact version that you used for dev env.
        => maintains each and everything that is present in the node_modules.
        => It allows future devs to install the same dependencies in the project.

    package.json
        => It records important metadata about the project.
        => It contains information such as name, description, author, script, and dependencies.
    
    The difference between these two, is that devDependencies are modules which are only required during development, while dependencies are modules which are also required at runtime.
    
    Link: https://www.becomebetterprogrammer.com/difference-between-package-json-and-package-lock-json/


### 11) Why should I not modify `package-lock.json`?

    => It is intended to be a generated file that is updated automatically based on the dependencies specified in the package.json file. 
    => The package-lock.json file is used to lock down the exact versions of the dependencies that are installed, and 
    changing the file manually could cause inconsistencies between the versions of dependencies specified in the package.json file
    and the versions that are actually installed.
    => Instead, you should modify the package.json file and then run npm install to update the dependencies and regenerate the 
    package-lock.json file.

### 12) What is `node_modules` ? Is it a good idea to push that on git?

    => node_modules is like a database for packages. Whatever we install through npm, it comes into the node_modules.
    => node_modules is a directory that contains the installed dependencies for a project.

    => It is not good to push node_modules into git repository
            - because it can cause problems when working with the repository on different machines. 
            - The node_modules directory can be very large, and it is not uncommon for it to contain hundreds or even thousands of files. 
            - This can make it difficult to clone the repository and can significantly increase the time it takes to sync changes.
            - Instead, use a package manager like npm or yarn to install the necessary dependencies when you set up the project on a new machine.

### 13) What is the `dist` folder?
    
    => The /dist folder contains the minimized version of the source code.
    => The code present in the /dist folder is actually the code which is used on production web applications. Along with the minified code, the /dist folder also comprises of all the compiled modules that may or may not be used with other systems.

### 14) What is `browserlists`

   => Browserslist is usually defined in the browserslist key in the package.json file. 
   => Browserslist is a configuration file that is used to specify which browsers and browser versions should be 
    targeted when building and testing a project. It is commonly used with tools like Babel and Autoprefixer to ensure that the 
    resulting code is compatible with the specified range of browsers.

### 15) Read about dif bundlers: vite, webpack, parcel

### 16) Difference between  `^ (caret)` and `~ (tilde)`

    Caret(^)
        => To upgrade the version or  Used for Approximately equivalent to version
        => It will update you to all future minor/patch versions, without incrementing the major version. ^2.3.4 will use releases from 2.3.4 to <3.0.0
        => It gives you backwards-compatible new functionality as well.
        => It will update to its latest version in numbers.

    Tilde(~)
        => It will update you to all future patch versions, without incrementing the minor version. ~1.2.3 will use releases from 1.2.3 to <1.3.
        => It gives you bug fix releases.
        => It will update in decimals.

### 17) Read about Script types in html (MDN Docs)

    => modules: This value causes the code to be treated as a JavaScript module. 
    => importmap:This value indicates that the body of the element contains an import map. 

### 18) Why do we use npm in our react app?

    => Because our react app is powered by a lot of packages like bundler etc so these helper packages are inside NPM

 ### 19) why do we use -D/--save-dev while installing packages sometimes?

    => -D means dev dependency. If you use -D or --save-dev for any package installation then it will come as a dev dependency
    => It is used for development environment only not for production environment


### References
    ● Creating your own create-react-app: https://medium.com/@JedaiSaboteur/creating-a-react-app-from-scratch-f3c693b84658
    ● Parcel Documentation: https://parceljs.org/getting-started/webapp/
    ● Parcel on Production: https://parceljs.org/features/production/
    ● BrowsersList: https://browserslist.dev