useEffect(() => {
  function keydownHandler() {
    // do things
  }

  document.addEventListener("keydown", keydownHandler);
  return () => {
    document.removeEventListener("keydown", keydownHandler);
  };
}, []);

/*Solves the problem of spreading related tasks all around the compo‐ nent. 
Here you can see how using hooks allows you to have the handler function, 
its setup, and its removal, all in the same place. */

/*As for the the first problem (having unrelated tasks in the same place), 
this is solved by having multiple useEffect calls, 
each dedicated to a specific task. 
Similarly to how you can have separate pieces of state instead of one grab-bag object, 
you can also have separate useEffect calls, 
each addressing a separate concern, as opposed to a single class method that needs to take care of everything: */

function Example() {
  const [data, setData] = useState(null);

  useEffect(() => {
    //event handlers
  });

  return <div>{data}</div>;
}
