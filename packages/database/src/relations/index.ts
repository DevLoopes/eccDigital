import { eq, gte } from 'drizzle-orm';
import { type NodePgDatabase } from 'drizzle-orm/node-postgres';
import { eccTopics } from '../schema/ecc-topics.js';
import { eccLessons } from '../schema/ecc-lessons.js';
import { churchAnnouncements } from '../schema/church-announcements.js';
import { youthSchedule } from '../schema/youth-schedule.js';

export const getTopics = async (db: NodePgDatabase) => {
  return db.select().from(eccTopics);
};

export const getLessonsByTopic = async (db: NodePgDatabase, topicId: string) => {
  return db.select().from(eccLessons).where(eq(eccLessons.topicId, topicId));
};

export const getActiveAnnouncements = async (db: NodePgDatabase) => {
  return db.select().from(churchAnnouncements).where(eq(churchAnnouncements.active, true));
};

export const getUpcomingYouthSchedule = async (db: NodePgDatabase) => {
  return db
    .select()
    .from(youthSchedule)
    .where(gte(youthSchedule.eventDate, new Date()));
};