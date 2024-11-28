import React from 'react';
import styles from './Message.module.css';
import { useChat } from '../context/ChatContext';

const Message = ({ message }) => {
    const { currentUser } = useChat();
    const isCurrentUser = message.sender === currentUser;

    return (
        <div className={`${styles.message} ${isCurrentUser ? styles.currentUser : styles.otherUser}`}>
            <span className={styles.senderName}>{message.sender}:</span>
            <span className={styles.messageText}>{message.text}</span>
        </div>
    );
};

export default Message;
