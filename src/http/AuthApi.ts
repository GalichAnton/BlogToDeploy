import axios from 'axios';

export const AUTH_API_URL = `https://my-blog-diplom.herokuapp.com/auth`;

const $authApi = axios.create({
  baseURL: AUTH_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default $authApi;
