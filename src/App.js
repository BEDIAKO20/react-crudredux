import Forms from "./components/Forms"
import Students from "./components/students";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
    <Forms/>
    <div style={{ marginLeft: 40 }}>
      <Students/>
    </div>
  </div>
  );
}

export default App;
