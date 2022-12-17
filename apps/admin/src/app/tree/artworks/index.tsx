import { root } from '../../components/Layout';
import { trpc } from '@typestack/trpc-react';
import { Link } from '@tanstack/react-router';

export const artworksRoute = root.createRoute({
  path: 'artworks',
  component: () => {
    const { data: artworks } = trpc.artwork.queryAll.useQuery();
    if (!artworks) return <div>Loading...</div>;
    return (
      <ul>
        {artworks.map((a) => (
          <li key={a.id}>{a.description}</li>
        ))}
      </ul>
    );
  },
});
