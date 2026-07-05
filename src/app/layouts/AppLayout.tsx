import { Outlet } from 'react-router-dom';

export function AppLayout() {
  return (
    <>
      <header>Navbar</header>

      <aside>Sidebar</aside>

      <main>
        <Outlet />
      </main>
    </>
  );
}