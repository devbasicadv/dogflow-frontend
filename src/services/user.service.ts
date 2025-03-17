import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}/users`;

export const getUsers = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addUser = async (user: { nome: string; email: string }) => {
  const response = await axios.post(API_URL, user);
  return response.data;
};
