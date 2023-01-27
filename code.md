### Coding Assignment: Chapter 08 - Let's get classy
### Created a Class Based Component 
- Created About as a class based component
### Created 3 class based child components 
  - Blog
  - Repo 
  - Profile
### Passed props from Parent to child
- About ----->(name as props) -----> Profile
- About ----->(name as props) -----> Blog
- Blog ------> (repo as props where repo is an object of Blog's state variable) -----> Repo
### Created a constructor
- In All Components, constructor are created. 
- Props are passed to its parent component through super(props) and if any state is needed for a component, it is created in constructor.
### Created a state variable inside child
- In Profile Component, State variable userInfo is created inside constructor
- In Blog Component, State variables blog and repoList are created inside constructor
### Used those setState to update it
- In Profile Component - After fetching the data from API, the state of userInfo is updated using this.setState()
- In Blog Component - After fetching the data from API, the state of both the states blog and repoList are updated using this.setState()
### What if there are multiple state variables?
- We can easily create multiple state variables through `setState`. Created 2 state variables in Blog component.
### Write a console.log for each lifecycle method. Play with the console logs to find out the correct order of their execution.
    - `Constructor` ---> `render()` ---> `componentDidMount()`--> `render()`--> `componentDidUpdate` --> `componentWillUnmount()`(if we leave the page)

### Create interval inside componentDidMount?
 - In Repo component, created setInterval to see the behavior of setInterval. 
 - When I moved to other page, it didn't stop the execution.
 - Used clearInterval in componentWillUnmount() to fix the issue caused by that interval