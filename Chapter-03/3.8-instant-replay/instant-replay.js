/*
Given the same data (state and properties), the application will look exactly the same, 
no matter what changed before or after this particular data state.
*/

/*
While using your app, people can click a button to report the bug without needing to explain what happened.
The bug report can just send you back a copy of this.state and this.props, 
and you should be able to recreate the exact application state and see the visual result
*/

/*
An “undo” could be another feature, since React renders your app the same way given the same props and state. 
The “undo” implementation is somewhat trivial: you just need to go back to the previous state.
*/

/*
Record each state change in the Excel component and then replay it.
When the change occurred is not that important, so “play” the app state changes at 1-second intervals
*/

logSetState() // Method which first logs the new state to a this.log array and then calls setState().
/*Everywhere in the code you called setState() should now be changed to call logSetState(). 
First, search and replace all calls to setState() with calls to the new function

All calls to…
this.setState(...);
…become:
this.logSetState(...);

Now let’s move on to the constructor. You need to bind the two new functions, 
log SetState() and replay(), declare this.log array, and assign the initial state to it.

*/

