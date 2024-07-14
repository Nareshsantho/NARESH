import axios from 'axios';

const BASE_URL = 'https://devapi.beyondchats.com/api';

export const getChats = (page = 1) => {
  return axios.get(`${BASE_URL}/get_all_chats?page=${page}`);
};

export const getMessages = (chatId) => {
  return axios.get(`${BASE_URL}/get_chat_messages?chat_id=${chatId}`);
};
