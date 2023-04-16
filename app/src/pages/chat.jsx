import { useState } from 'react';
import { Link } from 'react-router-dom';
export const ChatPage = () => {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([
    { message: 'Welcome to the chat! How can I assist you?', sender: 'coach' },
  ]);
  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setChat([...chat, { message, sender: 'user' }]);
    setMessage('');
  };

  return (
    <div className="chat-page">
       <div className="header">
       <h1>Chat with Coach</h1>
        <div className="back-to-home">
          <Link to="/">Back to Home</Link>
        
      </div>
            
        </div>
      <div className="chat-container">
        <div className="chat-header">
          <div className="chat-avatar">
            <img src="https://avatarfiles.alphacoders.com/283/thumb-283778.jpg" alt="Avatar" />
          </div>
          <div className="chat-name">Jone Doe</div>
        </div>
        <div className="chat-messages">
          {chat.map((item, index) => (
            <div
              key={index}
              className={`chat-message ${item.sender === 'user' ? 'user' : 'coach'}`}
            >
              {item.message}
            </div>
          ))}
        </div>
        <form className="chat-form" onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder="Type your message here..."
            value={message}
            onChange={handleInputChange}
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};
