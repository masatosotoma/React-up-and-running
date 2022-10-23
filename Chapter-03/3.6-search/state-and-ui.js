/*
The first thing to do is update the constructor by:
1.Adding a search property to the this.state object to keep track of whether the search feature is on
2.Binding two new methods: this.toggleSearch() to turn search boxes on and off and this.search() to do the actual searching
3.Setting up a new class property this.preSearchData
4.Updating the incoming initial data with a consecutive ID to help identify the rows when editing contents of filtered data
*/

class Excel extends React.Component {
  constructor(props) {
    super();
    const data = clone(props.initialData).map((row, idx) => {
      row.push(idx);
      return row;
    });
    this.state = {
      data,
      sortby: null,
      descending: false,
      edit: null, // {row: index, column: index}
      search: false,
    };
    this.preSearchData = null;
    this.sort = this.sort.bind(this);
    this.showEditor = this.showEditor.bind(this);
    this.save = this.save.bind(this);
    this.toggleSearch = this.toggleSearch.bind(this);
    this.search = this.search.bind(this);
  }
}

/*The cloning and updating of the initialData changes the data used in the state by adding a sort of record ID. 
This will prove handy when editing data that was alreadyfiltered. 
You map() the data, adding an additional column which is an integer ID.*/

const data = clone(props.initialData).map((row, idx) => row.concat(idx));

/* The change also requires changes in the render() method, namely to use this record
ID to identify rows, regardless of whether we’re looking at all the data or a filtered subset of it*/

{
  this.state.data.map((row, rowidx) => {
    // the last piece of data in a row is the ID
    const recordId = row[row.length - 1];
    return (
      <tr key={recordId} data-row={recordId}>
        {row.map((cell, columnidx) => {
          if (columnidx === this.props.headers.length) {
            // do not show the record ID in the table UI
            return;
          }
          const edit = this.state.edit;
          if (edit && edit.row === recordId && edit.column === columnidx) {
            cell = (
              <form onSubmit={this.save}>
                <input type="text" defaultValue={cell} />
              </form>
            );
          }
          return <td key={columnidx}>{cell}</td>;
        })}
      </tr>
    );
  });
}

/*Updating the UI with a search button. Where before there was a <table>
as the root, now let’s have a <div> with a search button and the same table.*/

<div>
  <button className="toolbar" onClick={this.toggleSearch}>
    {this.state.search ? "Hide search" : "Show search"}
  </button>
  <table>{/* ... */}</table>
</div>;

/*the search button label is dynamic, to reflect whether the search is on or off (this.state.search is true or false).*/

/*the row of search boxes. You can add it to the increasingly large chunk of JSX, 
or you can have it composed up front and added to a constant which is to be included in the main JSX.
If the search feature is not on, you don’t need to render anything, 
so searchRow is just null. Otherwise a new table row is created where each cell is an input element.*/

const searchRow = !this.state.search ? null : (
  <tr onChange={this.search}>
    {this.props.headers.map((_, idx) => (
      <td key={idx}>
        <input type="text" data-idx={idx} />
      </td>
    ))}
  </tr>
);

/*Using (_, idx) is an illustration of a convention where an unused variable in a callback is named 
with an underscore _ to signal to thereader of the code that it’s not used.*/

/*The row of search inputs is just another child node before the main data loop (the one that creates all the table rows and cells). 
Include searchRow there:

<tbody onDoubleClick={this.showEditor}>
{searchRow}
{this.state.data.map((row, rowidx) => (....

*/
