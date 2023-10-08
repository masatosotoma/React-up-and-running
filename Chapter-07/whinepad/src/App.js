import "./App.css";
import Excel from "./components/Excel";

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
