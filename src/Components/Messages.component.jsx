import React from 'react';
import PropTypes from 'prop-types';
import Message from './Message.component';
import '../Styles/Messages.styles.css';

const Messages = ({ messages }) => {
    return (
        <div className='message-list'>
            {messages.map(message => {
                return (
                    <Message key={message.id} message={message} />
                );
            })}
        </div>
    );
}

Messages.propTypes = {
    messages: PropTypes.array.isRequired
};

export default Messages;