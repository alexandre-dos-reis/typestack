import { createTRPCReact } from '@trpc/react-query';
import type { AppRouter } from '@typestack/trpc';

export const trpc = createTRPCReact<AppRouter>();