import { TOKEN_KEY } from '../constants';

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const setToken = accessToken => {
  localStorage.setItem(TOKEN_KEY, accessToken);
};
