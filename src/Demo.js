import React, { useState } from 'react';
import PropTypes from 'prop-types';

let id = 0;

const Demo = ({num, /* str, logical, users */}) => {

    const [curValue, setCurValue] = useState(num);

    const handleClick = (e) => setCurValue(curValue + 1);

    return(
        <>
        <p onClick={handleClick}>Number: {curValue}</p>
      {/*   <p>Number: {num}</p>
        <p>String: {str}</p>
        <p>Logical: {logical}</p>
        <ul>
            {users.map(item => <li key={id++}>{item.name}</li>)}
        </ul> */}
        </>
    );
}

 Demo.defaultProps = {
    num: 0,
/*     str: 'no text',
    logical: false */
} 

Demo.propTypes = {
    num: PropTypes.number
    /* 
    num: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
    str: PropTypes.string,
    logical: PropTypes.bool,
    users: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        age: PropTypes.number
    })) */
};

export {Demo};