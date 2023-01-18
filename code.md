### Coding Assignment: Chapter - 05 Let's get hooked (08/01/2023)

### Food ordering app

In this chapter, we implemented few more features and enhancements to the app :
1. To clean up the code through file organisation.
2. To use import export functionality.
3. To create search bar and make it work through useState hook.
4. To create config.js/constants file where all the hard coded things would be kept.

* In the last chapter, we kept all the components in the single file that is `app.js`. To keep all the components in the single file is a huge mess. We should think about modularity, DRY principle, single responsibilty etc. 
* In this chapter, we move components to a separate file each serving a single responsibility.
* We kept all the components inside src folder. That is how your code becomes modular and findable.
* It's not necessary to create `src` folder but this is the common convention which is used in the industry so that all developers can relate to it and pick it up the file organization.  
* Once you separate the components, you need to import and export the files. Check out to my theory-assignment.md file to learn about export import.
* Then implemented the search bar box.
* We tried to implement two-way dat binding through useState where user can communicate with app through a search input box and display only list of restaurants that matched the search.
* Identify where your state should live. In this case, state should live in bode-component.


### Folder Structure
- src
    - components
        - Header-component
            -header.js
        - body-component
            - body.js
        - footer-component
            - footer.js
        - restaurant-card-component
            restaurant-card.js
        - config
            config.js/constants.js
### Functionalities that are implemented
* Kept search bar inside the body-component that will Search for a restaurant.
* Below the search box, all the restaurants will be displayed in restaurant-list
* If no matches found, display error message `no matches found`.
* Restaurant-list will be consisting of restaurant cards with card-img, card-title, card-tags, rating and distance.
* If rating > 3, then rating bg must be green and if rating < 3, rating bg must be orange.

### useState
* Think about set of mutable state that your app needs (DRY - Don't repeat yourself).
* Mutable state (changable) in `HungerBox` till now is search box, restaurant data and error message to be displayed under the input box if no results are matched.
* React won't give two-way data binding functionality with normal variable. We need to make it as state variable so that React can track it whenever it changes.
* 3 state variable that are create 
    1. restaurant: restaurant list would be updated based on search input.
    2. searchInput: searchInput is a state because its value is changed by the user with typing for some restaurant name to search
    3. errorMsg : If no matched restaurants are found, the error msg is displayed and it must be updated (removed) when some match is found. Hence errorMsg is also a state.
### Inverse data-flow
* Till now , React is one-way binding ( data flow in one direction only and whatever typed in the input box will be ignored intentionally )
* Two-way data binding can be done - whenever the input is changed, setState() is called to update the state

In short, useState() is a basic hook which creates a state and assigns a initial value to it. Whenever, the state is to be modified, setState() is used to set the new state.