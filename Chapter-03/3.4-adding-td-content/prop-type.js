/*
Two popular options exist that allow you to write JavaScript with types: Flow and TypeScript.
1.You can use these to write React applications
2.prop types = limited to only specifying the types of props your component
*/

/*Prop types allow you to be more specific as to what data Excel takes 
and as a result surface an error to the developer early on. You can set up the prop types like*/

Excel.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string),
  initialData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
};
/*This means that the headers prop is expected to be an array of strings 
and initial Data is expected to be an array where each element is another array of string elements.*/

/*To make this code work you need to grab the library that exposes the PropTypes global variable, 
just like below:

$ curl -L https://unpkg.com/prop-types/prop-types.js > ~/reactbook/react/proptypes.js

Then, in the HTML, you include the new library together with the other ones:

<script src="react/react.js"></script>
<script src="react/react-dom.js"></script>
<script src="react/babel.js"></script>
<script src="react/prop-types.js"></script>
<script type="text/babel">
class Excel extends React.Component {
    ......
}
</script>

*/