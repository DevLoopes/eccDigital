import { pgTable, timestamp, uuid, varchar, text } from 'drizzle-orm/pg-core';

export const eccTopics = pgTable('ecc_topics', {
  id: uuid('id').defaultRandom().primaryKey(),
  title: varchar('title', { length: 200 }).notNull(),
  description: text('description'),
  iconName: varchar('icon_name', { length: 100 }),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
});
