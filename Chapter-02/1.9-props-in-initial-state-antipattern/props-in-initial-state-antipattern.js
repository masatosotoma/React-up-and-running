/*
it’s tempting to use this.props to set the initial
this.state:
*/

// Warning: Anti-pattern
this.state = {
 text: props.text,
};

/*
This is considered an antipattern.
You use any combination of this.state and this.props as you see fit to build your UI in your render() method. 
But sometimes you want to take a value passed to your component and use it to construct the initial state. 
There’s nothing wrong with this, except that the callers of your component may expect the property 
(text in the preceding example) to always have the latest value, and the preceding code would violate this expectation. 
*/