import React from 'react';
import ReactEmoji from 'react-emoji';

import './Message.css';

const Message = ({ message: { text, user }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return (
    isSentByCurrentUser
      ? (
        <div className="messageContainer sent">
          <p className="sentText">{trimmedName}</p>
          <div className="messageBox">
            <p className="messageText">{ReactEmoji.emojify(text)}</p>
          </div>
        </div>
      )
      : (
        <div className="messageContainer received justifyStart">
          <div className="messageBox">
            <p className="messageText">{ReactEmoji.emojify(text)}</p>
          </div>
          <p className="sentText">{user}</p>
        </div>
      )
  );
}

export default Message;