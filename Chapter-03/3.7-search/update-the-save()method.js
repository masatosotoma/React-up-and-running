/*
There was only state.data to be cloned and updated, but now you also have the “remembered” preSearchData. 
If the user is editing (even while searching), now the two pieces of data need an update. 
That’s the whole reason for adding a record ID—so you can find the real row even in a filtered state.
*/

/*
Updating the preSearchData is just like in the previous save() implementation; just find the row and column. 
Updating the state data requires the additional step of finding the record ID of the row 
and matching it to the row currently being edited (this.state.edit.row).
*/

class Excel extends React.Component {
  save(e) {
    e.preventDefault();
    const input = e.target.firstChild;
    const data = clone(this.state.data).map((row) => {
      if (row[row.length - 1] === this.state.edit.row) {
        row[this.state.edit.column] = input.value;
      }
      return row;
    });
    this.logSetState({
      edit: null,
      data,
    });
    if (this.preSearchData) {
      this.preSearchData[this.state.edit.row][this.state.edit.column] =
        input.value;
    }
  }
}

