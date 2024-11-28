import React from 'react';
import ChatWindow from '../components/ChatWindow';
import ChatInput from '../components/ChatInput';
import UserList from '../components/UserList';
import ModelSelector from '../components/ModelSelector'; // Import the new component
import styles from './ChatPage.module.css';

const ChatPage = () => {
  return (
    <div className={styles.chatPage}>
      <UserList />
      <div className={styles.chatArea}>
        <ModelSelector /> {/* Include the ModelSelector component */}
        <ChatWindow />
        <ChatInput />
      </div>
    </div>
  );
};

export default ChatPage;
