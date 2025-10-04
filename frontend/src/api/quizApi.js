import axios from 'axios';
const API_URL = "http://localhost:5000/api/quizzes";

export const getQuizzes = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const getQuizById = async (id) => {
  const res = await axios.get(`${API_URL}/${id}`);
  return res.data;
};

export const submitQuiz = async (id, answers) => {
  const res = await axios.post(`${API_URL}/${id}/submit`, { answers });
  return res.data;
};