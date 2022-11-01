import React from 'react';

const DateBox = (props) => {
    return (
        <div style={{ border: "solid black 1px", width: `${props.width}vw`, height: `${props.height}vh`, top: `${props.y}vh`, position: "absolute", left: `${props.x}vw`, textAlign: 'center', backgroundColor: "#62C0DE" }}>
            {props.id}
        </div>
    );
};

export default DateBox;