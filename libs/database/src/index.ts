import { orchidORM } from 'orchid-orm';
import { ArtworkModel } from './models'

export const db = orchidORM(
  {
    databaseURL: process.env.NX_DATABASE_URL as string,
    log: true,
  },
  {
    artworks: ArtworkModel,
  }
);