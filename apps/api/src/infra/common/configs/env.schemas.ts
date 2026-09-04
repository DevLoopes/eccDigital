import { z } from 'zod';
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

export const envSchema = z.object({
  PORT: z.coerce.number().default(3333),
  DATABASE_URL: z.string().url().optional(),
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
});

const parsed = envSchema.parse(process.env);

const resolvedDbUrl = parsed.DATABASE_URL;

if (!resolvedDbUrl) {
  throw new Error(
    'Missing DATABASE_URL environment variable. Create a .env in the repository root with DATABASE_URL set (see docs/SETUP-TURBO-DEV.md).'
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