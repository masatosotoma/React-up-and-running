/*
Instead of the class and for attributes (both reserved words in ECMAScript), 
you need to use className and htmlFor:
*/

// Warning: Invalid DOM property `class`. Did you mean `className`?
// Warning: Invalid DOM property `for`. Did you mean `htmlFor`?
const em = <em class="important" />;
const label = <label for="thatInput" />;
// OK
const em1 = <em className="important" />;
const label2 = <label htmlFor="thatInput" />;
