// src/App.js

import React, { useState } from 'react';
import './chat.css';
function ChatApp() {
  const [messages, setMessages] = useState([]);
  const [recipient, setRecipient] = useState('Alumni');
  const [newMessage, setNewMessage] = useState('');

  const sendMessage = () => {
    // Update messages state with the new message
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: newMessage, recipient: recipient },
    ]);
    
    // Clear the input after sending
    setNewMessage('');
  };

  return (
    <div className="chat-container">
      <div className="chat-box">
        {/* Display messages from state */}
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.recipient}`}>
            {message.text}
          </div>
        ))}
      </div>

      <div className="input-container">
        {/* New background container for send button, dropdown bar, and chat input bar */}
        <div className="input-background">
          <select
            className="recipient-select"
            id="recipient"
            name="recipient"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
          >
            <option value="Alumni">Alumni</option>
            <option value="Peers">Peers</option>
          </select>

          <input
            type="text"
            className="chat-input"
            id="messageInput"
            placeholder="Type your message"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />

          <button className="send-button" onClick={sendMessage}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatApp;
