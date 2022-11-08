import DateBox from "./components/DateBox";
import dateData from "./entry.json";
import { convertArray } from "./functions/functions.js";

const CalendarContainer = () => {
    const array = convertArray(dateData) // Converting our JSON file array into a readable JSON array with usefull data
    return (
        <div>
            <p>09:00</p>
            <div style={{ paddingLeft: 30 }}>
                {
                    array.map(e => <DateBox start={e.humanStart} duration={e.humanDuration} key={e.id} id={e.id} y={e.y} height={e.height} x={e.x} width={e.width} />)
                }
            </div>
        </div>
    );
};

export default CalendarContainer;