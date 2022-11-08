import React from 'react';

const DateBox = (props) => {
    return (
        <div style={{ border: "solid black 1px", width: `${props.width}%`, height: `${props.height}%`, top: `${props.y}%`, position: "absolute", left: `${props.x}%`, textAlign: 'center', backgroundColor: "#62C0DE", opacity: 1 }}>
            {props.id}
        </div>
    );
};

export default DateBox;