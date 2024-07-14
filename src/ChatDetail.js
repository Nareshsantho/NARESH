import React from 'react';
import MessageList from '../components/MessageList';

const ChatDetail = ({ match }) => {
  const { chatId } = match.params;

  return (
    <div>
      <MessageList chatId={chatId} />
    </div>
  );
};

export default ChatDetail;
