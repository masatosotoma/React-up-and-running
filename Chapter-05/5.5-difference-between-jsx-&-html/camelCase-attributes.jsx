/*
All attributes in JSX need to be camelCase. This is a common source of confusion 
when starting out— you might type onclick and notice that nothing happens 
until you go back and change it to onClick:
*/

// Warning: Invalid event handler property `onclick`. Did you mean `onClick`?
const a1 = <a onclick="reticulateSplines()" />; // OK
const a2 = <a onClick={reticulateSplines} />;

//Exceptions to this rule are all data- and aria- prefixed attributes, for which JSX does not require camelCase.