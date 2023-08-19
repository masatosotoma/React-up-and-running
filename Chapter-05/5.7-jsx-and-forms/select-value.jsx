/*
When you use a <select> input in HTML, you specify preselected entries using <option selected>, like so:*/

//old school HTML
<select>
  <option value="stay">Should I stay</option>
  <option value="move" selected>
    or should I go
  </option>
</select>;

// In React, you specify value or defaultValue property of the <select> element:

function ExampleSelect() {
  return (
    <form>
      <select defaultValue="move" onChange={changeHandler}>
        <option value="stay">Should I stay</option>
        <option value="move">or Should I go</option>
      </select>
    </form>
  );
}

//Working with multiselects is similar, only you provide an array of preselected values:

function ExampleMultiSelect() {
  return (
    <form>
      <select defaultValue={["stay", "move"]} multiple={selectHandler}>
        <option value="stay">Should I stay</option>
        <option value="move">or should I go</option>
        <option value="trouble">If I stay it will be trouble</option>
      </select>
    </form>
  );
}

/*
when working with multiselects—you don’t get event.target.value in your change handlers. 
Instead, just as in HTML, you iterate over the event.target .selectedOptions. 
*/

function selectHandler({ target }) {
  console.log(Array.from(target.selectedOptions).map((option) => option.value));
}
