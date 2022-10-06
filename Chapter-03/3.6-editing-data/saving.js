/*
saving the content changes after the user is done typing and has submitted the form (via the Enter key):

save(e) {
    e.preventDefault();
    // ... do the save
    }
*/

/*
After preventing the default behavior (so the page doesn’t reload), 
you need to get a reference to the input field. The event target e.target is the form and its first and only child is the input:
*/

const input = e.target.firstChild;
//Clone the data, so you don’t manipulate this.state directly
const data = clone(this.state.data);

/*Update the piece of data given the new value and the column and row indices stored
in the edit property of the state
*/

data[this.state.edit.row][this.state.edit.column] = input.value;

//set the state, which causes rerendering of the UI:

this.setState({
  edit: null,
  data,
});
