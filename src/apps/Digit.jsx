import React from 'react';
import PropTypes from 'prop-types';

const Digit = ({d, onClick}) =>{
    return(
    <button onClick={() => onClick(d)}>{d}</button>
    );
}

Digit.propTypes = {
    d: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired
}

export {Digit};