import { createRouteConfig, Link, Outlet } from '@tanstack/react-router';

export const root = createRouteConfig({
  component: () => {
    return (
      <>
        <div className="p-2 flex gap-2 text-lg">
          <Link to="/">Home</Link>
          <Link to="/artworks">Artworks</Link>
        </div>
        <Outlet />
      </>
    );
  },
});
