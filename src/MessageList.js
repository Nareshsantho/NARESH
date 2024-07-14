import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import { getMessages } from '../services/api';

const MessageList = ({ chatId }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    getMessages(chatId).then(response => setMessages(response.data.data));
  }, [chatId]);

  return (
    <List>
      {messages.map(message => (
        <ListItem key={message.id}>
          <ListItemText primary={message.content} />
        </ListItem>
      ))}
    </List>
  );
};

export default MessageList;
