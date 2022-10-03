/*
The first thing to do is set up a simple event handler. 
On double-click, the component“remembers” the selected cell:

<tbody onDoubleClick={this.showEditor}></tbody>
*/

/*
showEditor(e) {
    this.setState({
        edit: {
            row: parseInt(e.target.parentNode.dataset.row, 10),
            column: e.target.cellIndex,
        },
    });
}

- The function sets the edit property of this.state. 
This property is null when editing is not occurring and then turns into an object with properties row 
and column, which contain the row index and the column index of the cell beingedited

- To figure out the column index, you use the same e.target.cellIndex as before, 
where e.target is the <td> that was double-clicked.

- There’s no rowIndex coming for free in the DOM, so you need to do it yourself via a data- attribute.
Each row should have a data-row attribute with the row index, which you can parseInt() to get the index back.
*/

/*
While dealing with the constructor, let’s bind the showEditor() and save() methods. 
The save() is the one to do the data update once the user is done editing. 
The updated constructor looks like this:

constructor(props) {
    super();
    this.state = {
        data: props.initialData,
        sortby: null,
        descending: false,
        edit: null, // {row: index, column: index}
    };
    this.sort = this.sort.bind(this);
    this.showEditor = this.showEditor.bind(this);
    this.save = this.save.bind(this);
}

The property data-row is something you need so you can keep track of row indexes.
You can get the index from the array index while looping

Let’s rename it and use rowidx and columnidx for clarity.
*/

/*The whole <tbody> construction could look like:

<tbody onDoubleClick={this.showEditor}>
    {this.state.data.map((row, rowidx) => (
        <tr key={rowidx} data-row={rowidx}>
            {row.map((cell, columnidx) => {
                // TODO - turn `cell` into an input if the `columnidx`
                // and the `rowidx` match the one being edited;
                // otherwise, just show it as text
                return <td key={columnidx}>{cell}</td>;
            })}
        </tr>
    ))}
</tbody>

the TODO says—make an input field when required. 
The whole render() function is called again just because of the setState() call that sets the edit property. 
React rerenders the table, which gives you the chance to update the table cell that was double-clicked.

*/
