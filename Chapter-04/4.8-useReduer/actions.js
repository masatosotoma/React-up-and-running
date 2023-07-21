/* 

The reducer function can take anything (a string, an object), 
but a common imple‐ mentation is an event object with:

• A type (e.g., click in the DOM world)
• Optionally, some payload of other information about the event

*/

/* 
Actions are then “dispatched.” When the action is dispatched, 
the appropriate reducer function is called by React with the current state and your new event (action).
*/

//With useState you have:
const [data1, setData] = useState(initialData);
//Which can be replaced with the reducer:
const [data2, dispatch] = useReducer(myReducer, initialData);

/* 
The data is still used the same way to render the component. 
But when something happens, instead of doing a bit of work followed by a call to setData(), 
you call the dispatch() function returned by useReducer(). 
From there the reducer takes over and returns the new version of data. 
There’s no other function to call to set the new state; 
the new data is used by React to rerender the component.
*/
