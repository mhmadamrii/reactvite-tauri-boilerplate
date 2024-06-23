import { Outlet } from 'react-router-dom';
import Testing from './Testing';

export default function PostLayout() {
  return (
    <section className="borde-white border">
      <h1>This is layout component</h1>
      <Testing name="John" />
      <Outlet />
    </section>
  );
}
