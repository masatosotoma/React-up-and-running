import clone from "../modules/clone";

let originalData = null;
function reducer(data, action) {
  if (action.type === "sort") {
    const { column, descending } = action.payload;
    return clone(data).sort((a, b) => {
      if (a[column] === b[column]) {
        return 0;
      }
      return descending
        ? a[column] < b[column]
          ? 1
          : -1
        : a[column] > b[column]
        ? 1
        : -1;
    });
  }
  if (action.type === "save") {
    data[action.payload.edit.row][action.payload.edit.column] =
      action.payload.value;
    return data;
  }
  if (action.type === "startSearching") {
    originalData = data;
    return originalData;
  }
  if (action.type === "doneSearching") {
    return originalData;
  }
  if (action.type === "search") {
    return originalData.filter((row) => {
      return (
        row[action.payload.column]
          .toString()
          .toLowerCase()
          .indexOf(action.payload.needle.toLowerCase()) > -1
      );
    });
  }
}

export default reducer;
