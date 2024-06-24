import axios from 'axios';

import { getErrorMessage } from '~/lib/helpers';
const { VITE_REACT_SERVER_URL, VITE_PORT } = import.meta
  .env;

const API = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

interface IAuthParams {
  username: string;
  password: string;
}

type LoginAction = {
  AccessToken: string;
  ExpiredToken: string;
};

export async function loginAction({
  username,
  password,
}: IAuthParams): Promise<LoginAction | undefined> {
  try {
    const res = await API.post(
      `${VITE_REACT_SERVER_URL}${VITE_PORT}/login`,
      {
        Username: username,
        Password: password,
      },
    );

    if (res) {
      return res.data;
    }
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
}
