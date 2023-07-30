//Whitespace in JSX is similar to HTML but not identical. For example, if you have this JSX:

function Example1() {
  return (
    <h1>
      {1}plus{2}is {3}
    </h1>
  );
}

/*
When React renders it in the browser (you can inspect the resulting HTML 
in the browser’s dev tools), the generated HTML looks like this:*/

<h1>1 plus 2 is 3</h1>;

/*
This is effectively an h1 DOM node with five children, 
which are text element nodes with content: “1”, 
“plus”, “2”, “is” and “3”, which renders as “1 plus 2 is 3.” 
*/

//in this next example:

function Example2() {
  return (
    <h1>
      {" "}
      {1}
      plus
      {2} is {3}
    </h1>
  );
}

//it will end up with:

<h1>1plus2is3</h1>;

/*all the whitespace is trimmed, so the end result displayed in the browser is “1plus2is3.” 
You can always add space where you need it with {' '} 
or turn the literal strings into expressions and add the space there. 
In other words, any of these work:*/

function Example3() {
  return (
    <h1>
      {/* space expressions */} {1} plus {2} is {3}
    </h1>
  );
}
function Example4() {
  return (
    <h1>
      {/* space glued to string expressions */} {1}
      {" plus "}
      {2}
      {" is "}
      {3}
    </h1>
  );
}
