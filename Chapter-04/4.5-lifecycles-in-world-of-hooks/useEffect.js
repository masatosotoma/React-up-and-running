//The built-in hook that replaces both of the lifecycle methods above is React.use Effect().

/*
The hook useEffect() takes two arguments:
• A callback function that is called by React at the opportune time
• An optional array of dependencies
*/

//• If the values of the dependent variables have not changed, there’s no need to invoke the callback.
useEffect(() => {
  //logs only if 'data' or 'headers' have changed
  console.log(Date.now());
}, [data, headers]);

//• If the list of dependencies is an empty array, the callback is called only once, simi‐ larly to componentDidMount().
useEffect(() => {
  //logs once, after initial render, like 'componentDidMount()'
  console.log(Date.now());
}, []);

//• If the dependencies are omitted, the callback is invoked on every rerender
useEffect(
  () => {
    //called on every re-render
    console.log(Date.now());
  } /* no dependencies here*/
);
