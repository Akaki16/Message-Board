import React from 'react';
import { useState, useEffect } from 'react';
import messageService from './Services/messageService';
import Header from './Components/Header.component';
import Messages from './Components/Messages.component';
import AddFormModal from './Components/AddFormModal.component';
import Alert from './Components/Alert.component';

const App = () => {
  const [messages, setMessages] = useState([]);
  const [visible, setIsVisible] = useState(false); 
  const [messageTitle, setMessageTitle] = useState('');
  const [messageContent, setMessageContent] = useState('');
  const [messageUser, setMessageUser] = useState('');
  const [message, setMessage] = useState('');
  const [messageColor, setMessageColor] = useState('');

  // if visible is true modal is displayed and if it's false modal is closed
  const modalDisplay = visible ? 'block' : 'none';

  useEffect(() => {
    messageService
    .getAll()
    .then(response => {
      setMessages(response.data);
    })
    .catch(err => {
      setMessage('Something unexpectd happened, Could not get messages.');
      setMessageColor('rgb(122, 54, 54)');
      setTimeout(() => {
        setMessage('');
        setMessageColor('');
      }, 3000);
    })
  }, []);

  useEffect(() => {
    const handleModalCLose = () => {
      window.addEventListener('keydown', e => {
        if (e.code === 'Escape') {
          setIsVisible(false);
        }
      });
    }

    handleModalCLose();
  }, []);

  const resetForm = () => {
    setMessageTitle('');
    setMessageContent('');
    setMessageUser('');
  }

  const addNewMessage = (msg) => {
    messageService
    .create(msg)
    .then(response => {
      // copy old messages and add new one
      setMessage('New message added successfuly');
      setMessageColor('rgb(74, 160, 146)');
      setTimeout(() => {
        setMessage('');
        setMessageColor('');
      }, 3000);
      setMessages([...messages, response.data])
    })
    .catch(err => {
      setMessage('Something unexpectd happened, Could not add new message.');
      setMessageColor('rgb(122, 54, 54)');
      setTimeout(() => {
        setMessage('');
        setMessageColor('');
      }, 3000);
    });
  }

  const closeModal = () => {
    setIsVisible(false);
    resetForm();
  }

  const handleFormSubmit = (event) => {
    // prevent form from default submitting
    event.preventDefault();
    
    // create message object
    const messageObj = {
      id: messages.length + 1,
      created_at: new Date().toLocaleDateString(),
      title: messageTitle,
      content: messageContent,
      user: messageUser
    };

    // add new message, reset form and close the modal
    addNewMessage(messageObj);
    resetForm();
    setIsVisible(false);
  }

  return (
    <div>
      <Header handleModalOpen={() => setIsVisible(true)} />
      <AddFormModal
        modalDisplay={modalDisplay}
        handleModalClose={closeModal}
        handleTitle={messageTitle}
        handleTitleChange={(e) => setMessageTitle(e.target.value)}
        handleContent={messageContent}
        handleContentChange={(e) => setMessageContent(e.target.value)}
        handleUser={messageUser}
        handleUserChange={(e) => setMessageUser(e.target.value)}
        handleFormSubmit={handleFormSubmit}
      />
      <Alert
        value={message}
        bgColor={messageColor}
      />
      {/* if there are messages render them, otherwise render the meaningful message */}
      {messages.length > 0 ?
      <Messages messages={messages} /> :
      <p style={{
        textAlign: 'center',
        color: '#333',
        marginTop: '30px',
        fontSize: '25px'
      }}>There are no messages to show</p>}
    </div>
  );
}

export default App;
