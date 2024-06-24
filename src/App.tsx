import {
  // Link,
  Route,
  Routes,
  useNavigate,
} from 'react-router-dom';

import { DetailPost } from './screens/post';
import { ThemeMode } from './components/ThemeMode';
import { Authentication } from './screens/authentication';
import { Homepage } from './screens/homepage';
import { Post, PostLayout } from './screens/post';
import { useEffect } from 'react';

import './index.css';

function App() {
  const navigate = useNavigate();
  const loggedIn: boolean = false;

  useEffect(() => {
    if (!loggedIn) {
      navigate('/auth');
    }
  }, []);

  return (
    <>
      {/* <nav className="container mx-auto">
        <Link className="block" to="/">
          Home page
        </Link>
        <Link className="block" to="/posts">
          Post page
        </Link>
      </nav> */}
      <ThemeMode />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/posts" element={<PostLayout />}>
          <Route index element={<Post />} />
          <Route path=":post-id" element={<DetailPost />} />
        </Route>
        <Route
          path="/*"
          element={<span>Not found...</span>}
        />
      </Routes>
    </>
  );
}

export default App;
