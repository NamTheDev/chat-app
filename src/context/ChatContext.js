import React, { createContext, useState, useContext } from 'react';
import groq from '../services/groqClient'; // Import the groq client

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
    const [messages, setMessages] = useState([
        { sender: 'Bot', text: 'Welcome to the chat!' },
    ]);
    const [users, setUsers] = useState(['Bot', 'User1']);
    const [currentUser, setCurrentUser] = useState('User1');
    const [isLoading, setIsLoading] = useState(false); // Add loading state
    const [error, setError] = useState(null); // Add error state

    const sendMessage = async (message) => {
        try {
            setIsLoading(true); // Set loading to true when sending
            setMessages((prevMessages) => [...prevMessages, message]); // Optimistically add user message

            const response = await groq.chat.completions.create({
                messages: [{ role: 'user', content: message.text }],
                model: 'mixtral-8x7b-32768', // Or any other model you want to use
            });

            const botMessage = { sender: 'Bot', text: response.choices[0].message.content };
            setMessages((prevMessages) => [...prevMessages, botMessage]); // Add bot message
        } catch (err) {
            setError(err); // Set error if API call fails
            console.error('Error sending message:', err);
            // Consider adding a user-facing error message
        } finally {
            setIsLoading(false); // Set loading back to false
        }
    };

    const value = {
        messages,
        sendMessage,
        users,
        currentUser,
        isLoading, // Include loading state in context
        error // Include error state in context
    };

    return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};

export const useChat = () => {
    return useContext(ChatContext);
};
