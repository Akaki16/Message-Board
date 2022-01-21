import React from 'react';
import PropTypes from 'prop-types';
import '../Styles/Alert.styles.css';

const Alert = ({ value, bgColor }) => {
    return (
        <div className='alert' style={{ backgroundColor: bgColor }}>
            <p>{value}</p>
        </div>
    );
}

Alert.propTypes = {
    value: PropTypes.string,
    bgColor: PropTypes.string.isRequired
};

export default Alert;