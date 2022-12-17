import { db } from '@nx-orchid-orm-zod-trpc-react-hook-form/database';
import { proc, router } from '../router';

export const artworkRouter = router({
    queryAll: proc.query(async () => await db.artworks)
  });