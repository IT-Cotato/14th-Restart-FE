import { Outlet } from 'react-router';

export function Layout() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <main>
        <Outlet />
      </main>
    </div>
  );
}
