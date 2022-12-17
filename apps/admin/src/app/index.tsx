import { TrpcProvider } from '@nx-orchid-orm-zod-trpc-react-hook-form/trpc-react';
import {
  RouterProvider,
  createReactRouter,
} from '@tanstack/react-router';
import { root } from './components/Layout';
import { indexRoute } from './tree';
import { artworksRoute } from './tree/artworks';

const routeConfig = root.addChildren([
  indexRoute,
  artworksRoute
])

const router = createReactRouter({
  routeConfig,
  defaultPreload: 'intent',
})

// Register your router for typesafety
declare module '@tanstack/react-router' {
  interface RegisterRouter {
    router: typeof router
  }
}

export const App = () => (
  <TrpcProvider url="http://localhost:3000/trpc">
      <RouterProvider router={router} />
  </TrpcProvider>
);
