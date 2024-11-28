import React from 'react';
import './App.css';
import ChatPage from './pages/ChatPage';
import { ChatProvider } from './context/ChatContext';

function App() {
  return (
    <ChatProvider>
      <div className="App">
        <ChatPage />
      </div>
    </ChatProvider>
  );
}

export default App;
