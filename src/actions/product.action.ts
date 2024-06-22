import axios from 'axios';

import { getErrorMessage } from '~/lib/helpers';
// import { useStorePosts } from '~/lib/store/store';

const API = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

interface IPost {
  id: number;
  userId: number;
  title: string;
  body: string;
}

const getPosts = async ({
  limit,
}: {
  limit: number;
}): Promise<IPost[] | undefined> => {
  try {
    const res = await API.get(`/posts?_limit=${limit}`);

    if (res) {
      return res.data;
    }
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
};

export { getPosts };
