import DateBox from "./components/DateBox";
import dateData from "./entry.json";
import { convertArray } from "./functions/functions.js";

function App() {
  const array = convertArray(dateData) // Converting our JSON file array into a readable JSON array with usefull data
  console.log(array)
  return (
    <div>
      <p style={{ position: "absolute", verticalAlign: "top", padding: 0, margin: 0 }}>09:00</p>
      <div style={{ left: 40, position: "absolute", width: "calc(100% - 40px)", height: "100%" }}>
        {
          array.map(e => <DateBox start={e.humanStart} duration={e.humanDuration} key={e.id} id={e.id} y={e.y} height={e.height} x={e.x} width={e.width} />)
        }
      </div>
      <p style={{ position: "absolute", verticalAlign: "bottom", padding: 0, margin: 0, bottom: 0 }}>21:00</p>
    </div>
  );
}

export default App;
