import { drizzle, NodePgDatabase } from 'drizzle-orm/node-postgres';
import pg from 'pg';
import { env } from '../common/configs/env.schemas.js';

export class DrizzleService {
  private static instance: NodePgDatabase;

  public static getInstance(): NodePgDatabase {
    if (!DrizzleService.instance) {
      const pool = new pg.Pool({ connectionString: env.DATABASE_URL });
      DrizzleService.instance = drizzle(pool);
    }
    return DrizzleService.instance;
  }
}