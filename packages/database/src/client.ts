// Conexão pg.Pool
import { drizzle, type NodePgDatabase } from 'drizzle-orm/node-postgres';
import pg from 'pg';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

const findEnvFile = () => {
  let currentDir = process.cwd();

  while (currentDir !== path.dirname(currentDir)) {
    const candidate = path.join(currentDir, '.env');
    if (fs.existsSync(candidate)) {
      return candidate;
    }

    currentDir = path.dirname(currentDir);
  }

  return path.resolve(process.cwd(), '.env');
};

dotenv.config({ path: findEnvFile() });

let instance: NodePgDatabase | null = null;

export function getDrizzle(): NodePgDatabase {
  if (instance) return instance;
  const connectionString = process.env.DATABASE_URL;

  if (!connectionString) {
    throw new Error('Missing DATABASE_URL in the project root .env file.');
  }

  const pool = new pg.Pool({ connectionString });
  instance = drizzle(pool);
  return instance;
}

// Função utilitária para validar a conexão com o banco (usada na inicialização da app)
export async function testConnection(): Promise<void> {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) throw new Error('Missing DATABASE_URL in the project root .env file.');

  const pool = new pg.Pool({ connectionString });
  try {
    await pool.query('SELECT 1');
  } finally {
    await pool.end();
  }
}