import express, { type Express } from 'express';
import { apiReference } from '@scalar/express-api-reference';
import { buildDocs } from './infra/common/openapi/openapi.js';
import { UsersModule } from './modules/users/user.module.js';
import { TopicsModule } from './modules/topics/topic.module.js';
import { LessonsModule } from './modules/lessons/lesson.module.js';
import { AnnouncementsModule } from './modules/announcements/announcement.module.js';
import { YouthScheduleModule } from './modules/youth-schedule/youth-schedule.module.js';

export class AppModule {
  public static bootstrap(): Express {
    const app = express();
    app.use(express.json());

    app.use('/users', UsersModule);
    app.use('/topics', TopicsModule);
    app.use('/lessons', LessonsModule);
    app.use('/announcements', AnnouncementsModule);
    app.use('/youth-schedule', YouthScheduleModule);

    const document = buildDocs();

    app.use(
      '/api',
      apiReference({
        title: 'API Reference',
        spec: {
          content: document,
        },
      }),
    );

    return app;
  }
}