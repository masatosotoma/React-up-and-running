/*
call the Array.prototype.filter()
method on the array of data, and return a filtered array with the elements that match
the search string. The UI still uses this.state.data to do the rendering, but
this.state.data is a reduced version of itself.
*/

/*
You need a reference to the data before the search, so that you don’t lose the data forever.
This allows the user to go back to the full table or change the search string to get different matches. 
Let’s call this reference this.preSearchData.

the save() method will need an update, so both places are updated
should the user decide to edit the data, regardless of whether it’s been filtered or not
*/

/*
When the user clicks the “search” button, the toggleSearch() function is invoked.
This function’s task is to turn the search feature on and off. It does its task by:

• Setting the this.state.search to true or false accordingly
• When enabling the search, “remembering” the current data
• When disabling the search, reverting to the remembered data
*/

//Here’s how this function can be written:

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

  //Here is the function
  toggleSearch() {
    if (this.state.search) {
      this.setState({
        data: this.preSearchData,
        search: false,
      });
      this.preSearchData = null;
    } else {
      this.preSearchData = this.state.data;
      this.setState({
        search: true,
      });
    }
  }

  /*The last thing to do is implement the search() function, which is called every time something in the search row changes, 
  meaning the user is typing in one of the inputs. Here’s the complete implementation, followed by some more details:*/

  search(e) {
    /*You get the search string from the change event’s target (which is the input box). 
    Called it “needle” as we’re looking for a needle in a haystack of data:*/
    const needle = e.target.value.toLowerCase();

    /*If there’s no search string (the user erased what they typed), the function takes the original, 
    cached data, and this data becomes the new state:*/
    if (!needle) {
      this.setState({ data: this.preSearchData });
      return;
    }
    /*If there is a search string, filter the original data and set the filtered results as the new state of the data:*/
    const idx = e.target.dataset.idx;
    const searchdata = this.preSearchData.filter((row) => {
      return row[idx].toString().toLowerCase().indexOf(needle) > -1;
    });
    this.setState({ data: searchdata });
  }
}


/*To implement the feature, all you needed to do was:
• Add search UI
• Show/hide the new UI upon request
• The actual “business logic”: a simple array filter() call
As always, you worry only about the state of your data and let React take care of rendering
(anand all the associated grunt DOM work) whenever the state of the data changes.
*/