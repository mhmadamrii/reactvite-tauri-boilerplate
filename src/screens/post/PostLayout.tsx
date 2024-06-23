import { Outlet } from 'react-router-dom';
import Testing from './Testing';

export default function PostLayout() {
  return (
    <section className='border borde-white'>
      <h1>This is layout component</h1>
      <Testing name="John" />
      <Outlet />
    </section>
  );
}
