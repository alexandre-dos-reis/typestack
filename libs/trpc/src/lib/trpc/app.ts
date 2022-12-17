import { router } from './router';
import { artworkRouter } from './routers';

export const appRouter = router({
    artwork: artworkRouter
})

export type AppRouter = typeof appRouter;
