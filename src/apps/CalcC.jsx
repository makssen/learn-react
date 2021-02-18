import React, { useState } from 'react';
/* import {Digit} from './Digit'; */
import {DigitC} from './DigitC'; 

const arr = new Array(10).fill('');

class CalcC extends React.Component{
    constructor(){
        super();
        this.state = {
            sum: 0
        }
    }

    handleClick = (d) =>{
        this.setState({sum: this.state.sum + d});
    }

    render(){
        return(
            <>
            <p>Sum: {this.state.sum}</p>
            {arr.map((item, i) => <DigitC key={Math.random() * 100} d={i} onClick={this.handleClick} />)}
        </>
        );
    }
}

export {CalcC};