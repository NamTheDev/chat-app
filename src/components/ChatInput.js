import React, { useState } from 'react';
import styles from './ChatInput.module.css';
import { useChat } from '../context/ChatContext';

const ChatInput = () => {
    const [messageText, setMessageText] = useState('');
    const { sendMessage, currentUser } = useChat();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (messageText.trim()) {
            sendMessage({ sender: currentUser, text: messageText });
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
            />
            <button type="submit" className={styles.sendButton}>Send</button>
        </form>
    );
};

export default ChatInput;
