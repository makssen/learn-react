import React, { useState } from 'react';
import {Digit} from './Digit';

const Calc = () =>{

    const [sum, setSum] = useState(0);
    const arr = new Array(10).fill('');

    const handleClick = (d) => setSum(d + sum);

    return(
        <>
        <p>Sum: {sum}</p>
        {arr.map((item, i) => <Digit key={Math.random() * 100} d={i} onClick={handleClick} />)}
    </>
    );
}

export {Calc};