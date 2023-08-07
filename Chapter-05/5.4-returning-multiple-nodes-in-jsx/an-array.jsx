/*
as long as the nodes in the array have proper key attributes. 
Note the required commas after every element of the array
*/

function ArrayExample() {
  return [<span key="a">Hello</span>, " ", <span key="b">World</span>, "!"];
}

/*you can also sneak in whitespace and other strings in the array, 
and these don’t need a key. In a way, 
this is similar to accepting any number of children passed from the parent 
and propagating them over in your render function:*/

function ChildrenExample(props) {
  console.log(props.children.length); // 4
  return <div>{props.children}</div>;
}

ReactDOM.render(
  <ChildrenExample>
    <span key="greet">Hello</span> <span key="world">World</span>!
  </ChildrenExample>,
  document.getElementById("app")
);
