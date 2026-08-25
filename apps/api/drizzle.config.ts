import 'dotenv/config'; // Importante: carrega as variáveis de ambiente do .env
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './api/modules/**/persistence/*.repository.ts', // Caminho para os schemas Drizzle
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});