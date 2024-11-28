import React, { useState } from 'react';
import styles from './ChatInput.module.css';
import { useChat } from '../context/ChatContext';

const ChatInput = () => {
    const [messageText, setMessageText] = useState('');
    const { sendMessage, currentUser, isLoading } = useChat(); // Get isLoading from context

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (messageText.trim() && !isLoading) {
            await sendMessage({ sender: currentUser, text: messageText });
            setMessageText('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.chatInput}>
            <input
                type="text"
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                placeholder="Enter message..."
                className={styles.inputField}
                disabled={isLoading} // Disable input during loading
            />
            <button type="submit" className={styles.sendButton} disabled={isLoading}>
                {isLoading ? 'Sending...' : 'Send'} {/* Update button text based on loading state */}
            </button>
            {/* Consider adding a loading spinner here if isLoading is true */}
        </form>
    );
};

export default ChatInput;
