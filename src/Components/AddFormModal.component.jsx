import React from 'react';
import PropTypes from 'prop-types';
import '../Styles/Modal.styles.css';

const AddFormModal = ({
    modalDisplay,
    handleModalClose,
    handleTitle,
    handleTitleChange,
    handleContent,
    handleContentChange,
    handleUser,
    handleUserChange,
    handleFormSubmit,
}) => {
    return (
        <div style={{display: modalDisplay}} className='modal'>
            <div className='modal-content'>
                <div className='modal-header'>
                    <h2>Add Message</h2>
                    <i onClick={handleModalClose} className="fas fa-times-circle fa-2x"></i>
                </div>
                <hr />
                <div className='modal-body'>
                    <form onSubmit={handleFormSubmit} className='add-form'>
                        <div className='form-group'>
                            <label htmlFor='title'>Title</label>
                            <input
                                type='text'
                                id='title'
                                placeholder='Enter message title'
                                value={handleTitle}
                                onChange={handleTitleChange}
                                required
                            />
                            <small>Title must be provided</small>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='message_content'>Content</label>
                            <textarea value={handleContent} onChange={handleContentChange} id='message_content' placeholder='Message Content...' required />
                            <small>content must be provided</small>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='user'>User</label>
                            <input
                                type='text'
                                id='user'
                                placeholder='Enter user name'
                                value={handleUser}
                                onChange={handleUserChange}
                                required
                            />
                            <small>user must be provided</small>
                        </div>
                        <div className='form-group'>
                            <button type='submit'>
                                Submit
                            </button>
                            <button onClick={handleModalClose} type='button'>
                                Close
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

AddFormModal.defaultProps = {
    modalDisplay: 'none'
};

AddFormModal.propTypes = {
    modalDisplay: PropTypes.string.isRequired,
    handleModalClose: PropTypes.func.isRequired,
    handleTitle: PropTypes.string.isRequired,
    handleTitleChange: PropTypes.func.isRequired,
    handleContent: PropTypes.string.isRequired,
    handleContentChange: PropTypes.func.isRequired,
    handleUser: PropTypes.string.isRequired,
    handleUserChange: PropTypes.func.isRequired,
    handleFormSubmit: PropTypes.func.isRequired
};

export default AddFormModal;