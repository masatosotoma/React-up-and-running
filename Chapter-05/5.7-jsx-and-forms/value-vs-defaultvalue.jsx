/*
In HTML, if you have 
<input id="i" value="hello" /> 
and then change the value by typing “bye,” you have:*/

const { func } = require("prop-types");

i.value; //"bye"
i.getAttribute("value"); //"hello"

/*
In React, the value property (accessible via event.target.value in an event handler) 
always has the up-to-date content of the text input. 
If you want to specify an initial default value, you can use the defaultValue prop.
*/

function changeHandler({ target }) {
  console.log("value: ", target.value);
  console.log("defaultValue", target.defaultValue);
}

function ExampleForm() {
  return (
    <form>
      <label>
        Type here: <input defaultValue="hello" onChange={changeHandler} />
      </label>
    </form>
  );
}
