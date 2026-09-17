import { config } from 'dotenv';
import { defineConfig } from 'drizzle-kit';
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

config({ path: findEnvFile() });

export default defineConfig({
  schema: './src/schema',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});