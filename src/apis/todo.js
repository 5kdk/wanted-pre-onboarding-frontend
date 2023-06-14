import axios from 'axios';
import { BASE_SERVER_URL, TODOS_SERVER_URL } from '../constants';
import { getToken } from '../utils';

export const getTodos = async () => {
  const { data } = await axios.get(`${BASE_SERVER_URL + TODOS_SERVER_URL}`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  return data;
};

export const createTodo = async todo => {
  const { data } = await axios.post(
    `${BASE_SERVER_URL + TODOS_SERVER_URL}`,
    { todo },
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  );

  return data;
};

export const updateTodo = async ({ id, todo, isCompleted }) => {
  const { data } = await axios.put(
    `${`${BASE_SERVER_URL + TODOS_SERVER_URL}/${id}`}`,
    { todo, isCompleted },
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  );

  return data;
};

export const deleteTodo = async ({ id }) => {
  await axios.delete(`${`${BASE_SERVER_URL + TODOS_SERVER_URL}/${id}`}`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
};
