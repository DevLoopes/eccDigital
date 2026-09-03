import { getDrizzle } from '@repo/database';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';

export class DrizzleService {
  private static instance: NodePgDatabase;

  public static getInstance(): NodePgDatabase {
    if (!DrizzleService.instance) {
      DrizzleService.instance = getDrizzle();
    }
    return DrizzleService.instance;
  }
}