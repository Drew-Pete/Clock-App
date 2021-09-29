import { render } from "@testing-library/react";
import React from "react";
import './clock.css';

export default function Tick(props){

    const style = {
        width: '1%',
        height: (props.index % 5 === 0) ? '8%' : '4%',
        backgroundColor: 'rgb(51, 51, 63)',
        position: 'absolute',
        left: '50%',
        transform: (props.index % 5 === 0) ? 'translate(100%, -625%)' : 'translate(100%, -1250%)',
        transformOrigin: (props.index % 5 === 0) ? '50% 625%' : '50% 1250%',
        transform: 'rotate(' + (props.index * 6) + 'deg)',
    };

    return(
        <div style={style} ></div>
    );
    
}