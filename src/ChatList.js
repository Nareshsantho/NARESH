import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import { getChats } from '../services/api';

const ChatList = ({ onSelectChat }) => {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    getChats().then(response => setChats(response.data.data));
  }, []);

  return (
    <List>
      {chats.map(chat => (
        <ListItem button key={chat.id} onClick={() => onSelectChat(chat.id)}>
          <ListItemText primary={chat.name} />
        </ListItem>
      ))}
    </List>
  );
};

export default ChatList;
