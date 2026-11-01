// Exporta db e tabelas
export {
  getTopics,
  getLessonsByTopic,
  getActiveAnnouncements,
  getUpcomingYouthSchedule,
} from './relations/index.js';
export { getDrizzle } from './client.js';
export { users, userRoleEnum } from './schema/users.js';
export { eccTopics } from './schema/ecc-topics.js';
export { eccLessons } from './schema/ecc-lessons.js';
export { churchAnnouncements } from './schema/church-announcements.js';
export { youthSchedule } from './schema/youth-schedule.js';