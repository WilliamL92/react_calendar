import DateBox from "./components/DateBox";
import dateData from "./entry.json";
import { convertArray } from "./functions/functions.js";

function App() {
  const array = convertArray(dateData) // Converting our JSON file array into a readable JSON array with usefull data
  console.log(array)
  return (
    <div>
      {
        array.map(e => {
          return <DateBox start={e.humanStart} duration={e.humanDuration} key={e.id} id={e.id} y={e.y} height={e.height} x={e.x} width={e.width} />
        })
      }
    </div>
  );
}

export default App;
