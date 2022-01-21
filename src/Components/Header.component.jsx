import React from 'react';
import PropTypes from 'prop-types';
import '../Styles/Header.styles.css';

const Header = ({
    title,
    handleModalOpen
}) => {
    return (
        <header className='app-header'>
            <div>
                <h1>{title}</h1>
            </div>
            <div>
                <button onClick={handleModalOpen} type='button'>
                    Create Message
                </button>
            </div>
        </header>
    );
}

Header.defaultProps = {
    title: 'Message Board App'
};

Header.propTypes = {
    title: PropTypes.string,
    handleModalOpen: PropTypes.func.isRequired
};

export default Header;