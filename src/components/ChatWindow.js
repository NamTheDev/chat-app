import React, { useEffect, useRef } from 'react';
import { Message } from './Message';
import styles from './ChatWindow.module.css';
import { useChat } from '../context/ChatContext';

const ChatWindow = () => {
    const { messages } = useChat();
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(scrollToBottom, [messages]);

    return (
        <div className={styles.chatWindow}>
            {messages.map((message, index) => (
                <Message key={index} message={message} />
            ))}
            <div ref={messagesEndRef} />
        </div>
    );
};

export default ChatWindow;
