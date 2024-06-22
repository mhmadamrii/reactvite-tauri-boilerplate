import axios from 'axios';

const API = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

interface IPost {
  id: number;
  userId: number;
  title: string;
  body: string;
}

const getErrorMessage = (error: unknown): string => {
  let message: string;

  if (error instanceof Error) {
    message = error.message;
  } else if (
    error &&
    typeof error === 'object' &&
    'message' in error
  ) {
    message = String(error.message);
  } else if (typeof error === 'string') {
    message = error;
  } else {
    message = 'something strange went wrong';
  }

  return message;
};

const getPosts = async (): Promise<IPost[] | undefined> => {
  try {
    const res = await API.get('/posts');

    if (res) {
      return res.data;
    }
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
};

export { getPosts };
