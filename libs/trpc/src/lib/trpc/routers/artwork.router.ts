import { db } from '@typestack/database';
import { proc, router } from '../router';

export const artworkRouter = router({
    queryAll: proc.query(async () => await db.artworks)
  });