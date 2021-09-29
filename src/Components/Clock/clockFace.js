import { render } from "@testing-library/react";
import React from "react";
import './clock.css';
import Hand from "./clockHand";
import Tick from "./ticks";



export default function ClockFace(props) {

    const clockStyle = {
        backgroundColor: 'rgba(99, 99, 122, .6)',
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        border: '5px solid rgb(51, 51, 63)',
        display: 'flex',
        transformOrigin: '50% 50%',
        position: 'absolute',
    }

    var ticks = [];
    for(var i = 0; i < 60; i++) {
        ticks.push(<Tick index={i} />);
    }

    return(
        <div style={clockStyle}>
            {ticks}
            {props.children}
        </div>
    );
    
}
