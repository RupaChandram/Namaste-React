### Coding Assignment: Chapter 06 -Exploring the world

### Food ordering app

- API integration
- useEffect()
- Error Handling with try catch
- Shimmer Effect
- Proper filter function : There was a problem with existing one. Search is working properly for the first time but when we search again without refresh it started fitering the data from first filtered data. Need to maintain two states (for all restaurants, for filtered restaurants)
- scale propery of css : When we hover over the card it will give good zoom in effect of the card.
- Show message when there is no restaurant found
- Toggling of Login and Logout button

### order of execution when I use initial data(restaurantList)
- When you are rendering from the first time, it will render with the initial data
- api called
- rerender the component
- update the dom
- render ===> useEffect ===> render with the data===> Dom manipulation

### Shimmer UI effect pseudo code
- if restaurant is empty, it should load Shimmer UI
- if restaurant has data, it should load actual data

#### At last, HungerBox is ui- microservice

