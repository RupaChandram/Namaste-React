### Best Practices

- Never create component inside component
- Never write useEffect inside if block or for loop
- Never use useState outside the component. 
- CDN is a great place to host images.
- Don't use packages for every small things.
- Keep images inside assets folder.
- Never use `/child` for children of children (nested route). slash means concate with root not the relative path. Instead of `/child`, use `children`(relative path).
- If you are creating new project, please don't write CBC. Always prefer FBC.
- Never call setState() in componentWillUnmount() method.
- Always prefer destructuring whenever you can.
- Don't do this.state{//code} multiple times for intitalization of multiple state variables.
- use setState. Do not mutate directly.`this.state.count=1`---> Don't do it