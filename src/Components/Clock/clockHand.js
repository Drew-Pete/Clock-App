import React from "react";
import './clock.css';

export default function Hand(props) {

    let rotation = {
        transform: 'rotate('+ props.degrees + 'deg)',
    };
    console.log(props.degrees);
    
    return(
        <div style={rotation} className={props.handType}></div>
    );
    
}
