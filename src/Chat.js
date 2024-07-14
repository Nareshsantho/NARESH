import React, { useState } from 'react';
import ChatList from './ChatList';
import MessageList from './MessageList';
import { Grid } from '@mui/material';

const Chat = () => {
  const [selectedChat, setSelectedChat] = useState(null);

  return (
    <Grid container>
      <Grid item xs={12} md={4}>
        <ChatList onSelectChat={setSelectedChat} />
      </Grid>
      <Grid item xs={12} md={8}>
        {selectedChat && <MessageList chatId={selectedChat} />}
      </Grid>
    </Grid>
  );
};

export default Chat;
