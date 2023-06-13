import axios from 'axios';
import { BASE_SERVER_URL, SIGNIN_SERVER_URL, SIGNUP_SERVER_URL } from '../constants';

export const signUp = async formValues => {
  await axios.post(`${BASE_SERVER_URL}${SIGNUP_SERVER_URL}`, formValues);
};

export const signIn = async formValues => {
  const { data } = await axios.post(`${BASE_SERVER_URL}${SIGNIN_SERVER_URL}`, formValues);
  return data;
};
