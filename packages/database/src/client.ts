import { drizzle, type NodePgDatabase } from 'drizzle-orm/node-postgres';
import pg from 'pg';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Equivalente ao __dirname em ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

let instance: NodePgDatabase | null = null;

export function getDrizzle(): NodePgDatabase {
  if (instance) return instance;
  const connectionString = process.env.DATABASE_URL;
  const pool = new pg.Pool({ connectionString });
  instance = drizzle(pool);
  return instance;
}