import React from 'react';
import ClockFace from './Components/Clock/clockFace';
import Hand from './Components/Clock/clockHand';

const speed = 1000;


export default class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            hour: 0,
            minute: 0,
            second: 0,

        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.getTime(),
            speed
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    getTime(){
        let time = this.state.date.toLocaleTimeString().split(':');
        

        this.setState({
            date: new Date(),
            hour: parseInt(time[0]) * 30,
            minute: parseInt(time[1]) * 6,
            second: parseInt(time[2].slice(0,3)) * 6,
        });
        // console.log(this.state.hour);
        // console.log(this.state.minute);
        // console.log(this.state.second);
    }

    render(){

        return( 
            <ClockFace>
                <Hand handType='hour' degrees={this.state.hour} />
                <Hand handType='minute' degrees={this.state.minute} />
                <Hand handType='second' degrees={this.state.second} />
            </ClockFace>
        );
    }
}