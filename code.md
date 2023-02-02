### Coding Assignment: Chapter 09 - Optimize the app
### Folder Structure
- Kept config folder outside the components folder because that is not a component.
- Created utils folder to keep the utilities inside it (utilities means reusable functions).
- Created a helper.js file and kept filter function over there with named export.
### Custom Hooks
- Created useRestaurantMenu hook that will return menu of the particular restaurant.
- Created useRestaurants hook that will return the object of restaurant's list, filtered restaurants,searchData function and error message.
- Created useOnline hook that will show the status that you are online or not.
- Implemeted Diono game when user is offline
    Steps:
        import ChromeDinoGame from 'react-chrome-dino';
        <ChromeDinoGame />
- But as we know, we should not import library for simple thing so just used simple image to show that you are offline (<NetworkError />).
### Online user 
- Added online user on header




