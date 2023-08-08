/*
The style attribute takes an object value, not a semicolon-separated string as in reg‐ ular HTML. 
And the names of the CSS properties are camelCase, not dash-delimited:*/

// Error: The `style` prop expects a mapping from style properties to values
function InvalidStyle() {
  return <em style="font-size: 2em; line-height: 1.6" />;
}

// OK
function ValidStyle() {
  const styles = {
    fontSize: "2em",
    lineHeight: "1.6",
  };
  return <em style={styles}>Valid style</em>;
}

// inline is also OK
// note the double curly braces:
// one for the dynamic value in JSX, one for the JS object
function InlineStyle() {
  return <em style={{ fontSize: "2em", lineHeight: "1.6" }}>Inline style</em>;
}
