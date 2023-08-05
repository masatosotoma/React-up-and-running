/*wrap all the nodes in another component such as a <div> 
(and add a space between the “Hello” and “World” while you’re at it):*/

function Example() {
  return (
    <div>
      <span>Hello</span> 
      {' '}
      <span></span>
    </div>
  );
}
