import ErrorBoundary from './components/ErorBoundary';
import Providers from './components/Providers';
import './index.css';

import Homepage from './screens/homepage';
import { PostScreen } from './screens/post';
import Profile from './screens/profile';

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: '/profiles',
    element: <Profile />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: '/profiles/:profileId',
        element: <Profile />,
      },
    ],
  },
  {
    path: '/posts',
    element: <PostScreen />,
    children: [
      {
        path: '/posts/:postId',
        element: <Profile />,
      },
    ],
  },
]);

function App() {
  return (
    <Providers>
      <RouterProvider router={routes} />
    </Providers>
  );
}

export default App;
