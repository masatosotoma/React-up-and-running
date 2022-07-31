/*
As you now know, you can use a number of HTML elements as React components via the React.createElement() method
Close look at the API
*/

ReactDOM.render(
    React.createElement('h1', null, 'Hello world!'),
    document.getElementById('app')
   );

/*
The first parameter to createElement is the type of element to be created
The second (which is null in this case) is an object that 
specifies any properties (think DOM attributes) that you want to pass to your element*/

React.createElement(
    'h1',
    {
    id: 'my-heading',
    },
    'Hello world!'
   )

/*
The third parameter ("Hello world!" in this example) defines a child of the component
The simplest case is just a text child (a Text node in DOM-speak) as you see in the preceding code
*/

//You can do the nested components like this below

React.createElement(
    'h1',
    {id: 'my-heading'},
    React.createElement('span', null, 'Hello'),
    ' world!'
   )