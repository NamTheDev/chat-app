import React, { createContext, useState, useContext } from 'react';

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
    const [messages, setMessages] = useState([
        { sender: 'Bot', text: 'Welcome to the chat!' },
    ]);
    const [users, setUsers] = useState(['Bot', 'User1']);
    const [currentUser, setCurrentUser] = useState('User1');

    const sendMessage = (message) => {
        setMessages((prevMessages) => [...prevMessages, message]);
    };

    const value = {
        messages,
        sendMessage,
        users,
        currentUser
    };

    return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};

export const useChat = () => {
    return useContext(ChatContext);
};
