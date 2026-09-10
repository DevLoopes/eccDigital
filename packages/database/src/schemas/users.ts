import { pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

export const users = pgTable('users', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: varchar('name', { length: 150 }).notNull(),
  email: varchar('email', { length: 150 }).unique().notNull(),
  password_hash: varchar('password_hash', { length: 255 }).notNull(),
  createdAt: timestamp('created_at', {withTimezone: true}).defaultNow(),
});