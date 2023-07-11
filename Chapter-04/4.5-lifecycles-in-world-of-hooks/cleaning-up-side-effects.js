/*
Equivalent to componentWillUnmount(), 
you use the return value from the callback function you pass to useEffect():
*/

useEffect(() => {
  // logs once, after initial render, like 'componentDidMount()'
  console.log(Date.now());
  return () => {
    // log when the component will be removed from the DOM
    // like 'componentDidMount()'
    console.log(Date.now());
  };
}, []);

//Example:
function Example() {
  useEffect(() => {
    console.log("Rendering <Example/>", Date.now());
    return () => {
      console.log("Removing <Example/>", Date.now());
    };
  }, []);
  return <p>I am an example child component</p>;
}

function ExampleParent() {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <button onClick={() => setVisible(!visible)}>
        Hello there,press me{visible ? "again" : ""}
      </button>
      {visible ? <Example /> : null}
    </div>
  );
}

//Clicking the button once renders a child component and clicking it again removes it.