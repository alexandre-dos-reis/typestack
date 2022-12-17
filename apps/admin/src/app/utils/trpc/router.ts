import { createTRPCReact } from '@trpc/react-query';
import type { AppRouter } from '@nx-orchid-orm-zod-trpc-react-hook-form/trpc';

export const trpc = createTRPCReact<AppRouter>();