import { Link, Route, Routes } from 'react-router-dom';
import { Homepage } from './screens/homepage';
import { Post, PostLayout } from './screens/post';
import { DetailPost } from './screens/post';
import { ThemeMode } from './components/ThemeMode';

import './index.css';

function App() {
  return (
    <>
      <nav className='container mx-auto'>
        <Link className="block" to="/">
          Home page
        </Link>
        <Link className="block" to="/posts">
          Post page
        </Link>
      </nav>
      <ThemeMode />

      <Routes>
        <Route path="/" element={<Homepage />} />
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
