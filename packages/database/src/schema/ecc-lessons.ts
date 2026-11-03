import { pgTable, timestamp, uuid, varchar, text, date } from 'drizzle-orm/pg-core';
import { eccTopics } from './ecc-topics.js';
import { users } from './users.js';

export const eccLessons = pgTable('ecc_lessons', {
  id: uuid('id').defaultRandom().primaryKey(),
  topicId: uuid('topic_id')
    .notNull()
    .references(() => eccTopics.id, { onDelete: 'cascade' }),
  title: varchar('title', { length: 200 }).notNull(),
  description: text('description'),
  pdfDriveUrl: text('pdf_drive_url').notNull(),
  lessonDate: date('lesson_date', { mode: 'string' }).notNull(),
  createdBy: uuid('created_by')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
});
