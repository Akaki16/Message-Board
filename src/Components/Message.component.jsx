import React from 'react';
import PropTypes from 'prop-types';
import '../Styles/Message.styles.css';

const Message = ({ message }) => {
    const { created_at, title, content, user } = message;
    return (
        <div className='message-box'>
            <h3>Created At: {created_at}</h3>
            <h2>{title}</h2>
            <article>
                <p>{content}</p>
            </article>
            <h4>{user}</h4>
        </div>
    );
}

Message.propTypes = {
    message: PropTypes.object.isRequired
};

export default Message;