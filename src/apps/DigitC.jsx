import React from 'react';
import PropTypes from 'prop-types';

class DigitC extends React.Component{

    render(){
        const {d, onClick} = this.props;

        return(
            <button onClick={() => onClick(d)}>{d}</button>
        );
    }

}


DigitC.propTypes = {
    d: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired
}

export {DigitC};