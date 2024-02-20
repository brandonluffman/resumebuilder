import React, { useState } from 'react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (event) => {
    setInputMessage(event.target.value);
  };

  const sendMessage = () => {
    if (inputMessage.trim() !== '') {
      setMessages([...messages, { text: inputMessage, sender: 'user' }]);
      setInputMessage('');
      // Here you would typically send the message to your chatbot backend and get a response
      // For demonstration, we'll just echo the message back as the bot's response
      // setMessages((prevMessages) => [...prevMessages, { text: inputMessage, sender: 'bot' }]);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className='chatbot-container'>
      <img className='chatbot-img' src='/chatbot.png' onClick={toggleChatbot} alt='Chatbot' />
        <div className={isOpen ? 'chat-interface':'no-display'}>
          <div className='development-tag'>Still In Development</div>
          <div className='chat-messages'>
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.sender}`}>
                {message.text}
              </div>
            ))}
          </div>
          <div className='chat-input'>
            <input
              type='text'
              value={inputMessage}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              placeholder='Type a message...'
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
    </div>
  );
};

export default Chatbot;
