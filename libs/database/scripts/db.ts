import 'dotenv/config';
import { rakeDb } from 'rake-db';
import path from 'path';

rakeDb({
  databaseURL: process.env.NX_DATABASE_URL as string,
}, {
  migrationsPath: path.resolve(__dirname, '..', 'migrations'),
});