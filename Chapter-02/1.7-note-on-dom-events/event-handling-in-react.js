/*

React uses synthetic events to wrap and normalize the browser events, which means no more browser inconsistencies. 

You can always rely on the fact that event.target is available to you in all browsers. 
That’s why in the TextAreaCounter snippet you only need event.target.value and it just works.

The syntax makes it easy to keep the UI and the event listeners together. 
It looks like old-school inline event handlers, but behind the scenes it’s not. 
Actually, React uses event delegation for performance reasons.

React uses camelCase syntax for the event handlers, so you use onClick instead of onclick.

If you need the original browser event for whatever reason, 
it’s available to you as event.nativeEvent, but it’s unlikely that you’ll ever need to go there.

*/