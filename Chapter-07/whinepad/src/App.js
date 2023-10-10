import "./App.css";
import Excel from "./components/Excel";

const headers = localStorage.getItem('headers')
const data = localStorage.getItem("data");
if (!headers) {
  headers = ["Title", "Year", "Rating", "Comments"];
  data = [["Red whine", "2021", "3", "meh"]];
}

function App() {
  return (
    <div className="Excel">
      {" "}
      <Excel
        headers={["Name", "Year"]}
        initialData={[
          ["Charles", "1859"],
          ["Antoine", "1943"],
        ]}
      />{" "}
    </div>
  );
}
export default App;
