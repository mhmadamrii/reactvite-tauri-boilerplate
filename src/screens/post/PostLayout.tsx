import { Outlet } from 'react-router-dom';
import Testing from './Testing';

export default function PostLayout() {
  return (
    <section>
      <h1>Hello world</h1>
      <Testing name="John" />
      <Outlet />
    </section>
  );
}
