
/*
Modules split up the different pieces of functionality 
that make up your app into small, manageable files. In general, 
you should have a separate module for each concern; 
modules and concerns have a one-to-one relationship. 
Some modules can be individual React components; 
some can simply be utilities related, or unrelated to React entirely
*/

/*
The general template for a module is: declare requirements up top, 
export at the bottom, implement the “meat” in between. 
In other words, these three tasks:*/

/*
1. Require/import dependencies
2. Provide an API in the form of a function/class/object
3. Export the API
*/


//For a React component, the template could look like:

import React from 'react';
import MyOtherComponent from './MyOtherComponent';
function MyComponent() { return <div>Hello</div>;
}
export default MyComponent;