import { pgTable, timestamp, uuid, varchar, text, boolean } from 'drizzle-orm/pg-core';

export const churchAnnouncements = pgTable('church_announcements', {
  id: uuid('id').defaultRandom().primaryKey(),
  title: varchar('title', { length: 200 }).notNull(),
  content: text('content').notNull(),
  active: boolean('active').default(true).notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
});
