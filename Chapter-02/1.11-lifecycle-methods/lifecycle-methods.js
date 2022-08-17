/*
React offers several so-called lifecycle methods. 
You can use the lifecycle methods to listen to changes in your component as far as the DOM manipulation is concerned. 
The life of a component goes through three steps

1.Mounting
The component is added to the DOM initially

2.Updating
The component is updated as a result of calling setState() and/or a prop provided to the component has changed.

3.Unmounting
The component is removed from the DOM.

React does part of its work before updating the DOM. This is also called **the rendering phase**. 
Then it updates the DOM and this phase is called **a commit phase**.
*/

componentDidMount() 
/* it's called after the initial mounting and after the commit to the DOM.(if it exist)
Any initialization work that does not require the DOM should be in the constructor
Most of your initialization shouldn’t require the DOM
In this method you can, for example, measure the height of the component that was just rendered, 
add any event listeners, or fetch data from the server.*/

WillUnmount()
/*It's called right before the component is removed from the DOM
This is the place to do any cleanup work you may need. 
Any event handlers, or anything else that may leak memory, should be cleaned up here.*/

getSnapshotBeforeUpdate()
/*This method receives the previous properties and state as arguments. 
And it can return a “snapshot” value, which is any value you want to pass over to 
the next lifecycle method called componentDidUpdate().*/

componentDidUpdate(previousProps, previousState, snapshot)
/*This is called whenever the component was updated. 
Since at this point this.props and this.state have updated values, you get a copy of the previous ones*/

shouldComponentUpdate(newProps, newState)
/*You’re given the state-to-be, which you can compare with the current state 
and decide not to update the component, in which case its render() method is not called.*/