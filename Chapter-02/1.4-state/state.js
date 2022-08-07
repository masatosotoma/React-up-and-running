/*

The goal was just to give you an idea of the building blocks of composing your UI.

React has the concept of state, which is any data that components want to use to render themselves
When state changes, React rebuilds the UI in the DOM without you having to do anything.

After you build your UI initially in your render() method (or in the rendering function in case of a function component)  
all you care about is updating the data. 
You don’t need to worry about UI changes at all. 
After all, your render method/function has already provided the blueprint of what the component should look like.

Similarly to how you access properties via this.props, 
you read the state via the object this.state. To update the state, you use this.setState(). 
When this.setState() is called, React calls the render method of your component (and all of its children) and updates the UI.

The updates to the UI after calling this.setState() are done using a queuing mechanism that efficiently batches changes. 
Updating this.state directly can have unexpected behavior and you shouldn’t do it.

As with this.props, consider the this.state object read-only, 
not only because it’s semantically a bad idea, but because it can act in ways you don’t expect. 
Similarly, don’t ever call this.render() yourself—instead, 
leave it to React to batch changes, figure out the least amount of work, and call render() when and if appropriate.

*/