import { DrizzleService } from './drizzle.service.js';

export const drizzleModule = {
  db: DrizzleService.getInstance(),
};