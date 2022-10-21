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
