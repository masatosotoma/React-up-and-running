import "./App.css";
import Excel from "./components/Excel";

function App() {
  return (
    <div className="Excel">
      {" "}
      <Excel
        headers={["Title", "Year", "Rating", "Comments"]}
        initialData={[["Red whine", "2021", "3", "meh"]]}
      />{" "}
    </div>
  );
}
export default App;
