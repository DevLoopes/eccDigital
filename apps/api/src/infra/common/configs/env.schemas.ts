import { z } from 'zod';
import dotenv from 'dotenv';
import path from 'path';

// Carrega variáveis de ambiente da raiz do repositório (se existir .env)
dotenv.config({ path: path.resolve(process.cwd(), '.env') });

export const envSchema = z.object({
  PORT: z.coerce.number().default(3333),
  DB_URL: z.string().url().optional(),
  DATABASE_URL: z.string().url().optional(),
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
});

const parsed = envSchema.parse(process.env);

const resolvedDbUrl = parsed.DB_URL ?? parsed.DATABASE_URL;

if (!resolvedDbUrl) {
  throw new Error(
    'Missing DB_URL or DATABASE_URL environment variable. Create a .env in the repository root with DB_URL or DATABASE_URL set (see docs/SETUP-TURBO-DEV.md).'
  );
}

export type Env = {
  PORT: number;
  DATABASE_URL: string;
  NODE_ENV: 'development' | 'production' | 'test';
};

export const env: Env = {
  PORT: parsed.PORT,
  DATABASE_URL: resolvedDbUrl,
  NODE_ENV: parsed.NODE_ENV,
};