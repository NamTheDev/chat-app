import React from 'react';
import ChatWindow from '../components/ChatWindow';
import ChatInput from '../components/ChatInput';
import ModelSelector from '../components/ModelSelector';
import { useChat } from '../context/ChatContext';
import styles from './ChatPage.module.css';

const ChatPage = () => {
  const { messages } = useChat();

  return (
    <div className={styles.chatPage}>
      <ModelSelector />
      <ChatWindow messages={messages} />
      <ChatInput />
    </div>
  );
};

export default ChatPage;
