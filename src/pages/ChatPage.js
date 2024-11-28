import React from 'react';
import { ChatWindow } from '../components/ChatWindow';
import { UserList } from '../components/UserList';
import { ChatInput } from '../components/ChatInput';
import { useChat } from '../context/ChatContext';
import styles from './ChatPage.module.css';

const ChatPage = () => {
  const { messages, users } = useChat();

  return (
    <div className={styles.chatPage}>
      <div className={styles.userListContainer}>
        <UserList users={users} />
      </div>
      <div className={styles.chatContainer}>
        <ChatWindow messages={messages} />
        <ChatInput />
      </div>
    </div>
  );
};

export default ChatPage;
