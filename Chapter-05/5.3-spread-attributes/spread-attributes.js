/*
JSX borrows a feature from ECMAScript called the spread operator 
and adopts it as a convenience when defining properties.
Imagine you have a collection of attributes you want to pass to an <a> component:
*/

const attr = {
  href: "https://example.org",
  target: "_blank",
};

// you can always do it like so:

return <a href="attr.href" target={attr.target}></a>;

/*you can accom‐ plish this in just one line:*/
return <a {...attr}>Hello</a>;
