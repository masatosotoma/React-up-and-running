//Remember the edit state for brevity:
const edit = this.state.edit;

//Check if the edit is set and if so, whether this is the exact cell being edited:

if (edit && edit.row === rowidx && edit.column === columnidx) {
  // ...
}

//If this is the target cell, let’s make a form and an input field with the content of the cell:

cell = (
  <form onSubmit={this.save}>
    <input type="text" defaultValue={cell} />
  </form>
);

/*
As you see, it’s a form with a single input and the input is prefilled with the text content. 
When the form is submitted, the submission event is trapped in the save() method.
*/