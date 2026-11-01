import { pgTable, timestamp, uuid, varchar, text } from 'drizzle-orm/pg-core';

export const youthSchedule = pgTable('youth_schedule', {
  id: uuid('id').defaultRandom().primaryKey(),
  title: varchar('title', { length: 200 }).notNull(),
  description: text('description'),
  eventDate: timestamp('event_date', { withTimezone: true }).notNull(),
  location: varchar('location', { length: 200 }),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
});
