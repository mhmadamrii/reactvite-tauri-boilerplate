import { NavLink } from 'react-router-dom';

export default function PostsDummy() {
  return (
    <div>
      <h1>List of posts</h1>
      <NavLink to="/">Home</NavLink>
    </div>
  );
}
