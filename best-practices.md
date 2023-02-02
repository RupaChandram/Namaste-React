### Best Practices

- Never create component inside component.
- Never write useEffect inside if block or for loop.
- Never use useState outside the component. 
- CDN is a great place to host images.
- Don't use packages for every small things.
- Keep images inside assets folder.
- Never use `/child` for children of children (nested route). slash means concate with root not the relative path. Instead of `/child`, use `children`(relative path).
- If you are creating new project, please don't write Class Based Component. Always prefer Function Based Component.
- Never call setState() in componentWillUnmount() method.
- Always prefer destructuring whenever you can.
- Don't do this.state{//code} multiple times for intitalization of multiple state variables.
- use setState. Do not mutate directly.`this.state.count=1`---> Don't do it
- We should keep our reusable functions (utilities) into a common place. Industry practice is to create `util` folder and to keep utilities inside `utils`.
- Create a custom hook with the `use` prefix. It's a react way to tell that you are creating a hook. 
- Good convention : for custom hook file, use camel case convention to name the file. For instance `useRestaurant.js`.
- When there is only one function in a hook file then declare it as default export.
- Helper function should be declared as named export.
- Always keep the urls in constant/config file. Naming convention : eg `CLOUD_IMAGE_CDN`.
- Keep the dummy data in the config file. 
- Never ever do lazy loading inside the component. Always do it at the top.

